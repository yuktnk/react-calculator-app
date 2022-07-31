import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface CalculatorState {
  displayString: string
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CalculatorState = {
  displayString: '',
  status: 'idle'
}

enum calculationSymbol {
  kakeru = '*',
  waru = '/',
  tasu = '+',
  hiku = '-'
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.displayString = state.displayString.concat(action.payload)
    },
    addCalculationSymbol: (state, action) => {
      // × と ÷ のときは * と / に変換する
      if (action.payload === '×') {
        action.payload = '*'
      }
      if (action.payload === '÷') {
        action.payload = '/'
      }

      // 最後の文字が計算記号の場合は置き換えを行う
      const lastString = state.displayString[state.displayString.length - 1]
      if (
        lastString === calculationSymbol.kakeru ||
        lastString === calculationSymbol.waru ||
        lastString === calculationSymbol.tasu ||
        lastString === calculationSymbol.hiku
      ) {
        state.displayString = state.displayString.slice(0, -1) + action.payload
        return
      }

      state.displayString = state.displayString.concat(action.payload)
    },
    reset: state => {
      state.displayString = ''
    },
    calc: state => {
      // 最初の文字列が計算記号の場合はその計算記号を削除する
      const firstString = state.displayString[0]
      if (
        firstString === calculationSymbol.kakeru ||
        firstString === calculationSymbol.waru ||
        firstString === calculationSymbol.tasu ||
        firstString === calculationSymbol.hiku
      ) {
        state.displayString = state.displayString.slice(1)
        return
      }
      state.displayString = String(eval(state.displayString))
    }
  }
})

export const {
  addNumber,
  addCalculationSymbol,
  reset,
  calc
} = calculatorSlice.actions

export const selectDisplayString = (state: RootState) =>
  state.calculator.displayString

export default calculatorSlice.reducer
