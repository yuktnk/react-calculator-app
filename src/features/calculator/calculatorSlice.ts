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
    /*
     * 0~9の数字が入力されたとき
     */
    addNumber: (state, action) => {
      if (state.displayString === '' && action.payload === '0') {
        return
      }
      state.displayString = state.displayString.concat(action.payload)
    },

    /*
     * 計算記号（×, ÷, +, -）が入力されたとき
     */
    addCalculationSymbol: (state, action) => {
      // 何も入力されていないときはアーリーリターン
      if (state.displayString === '') {
        return
      }

      // × と ÷ のときは * と / に変換する
      action.payload === '×' && (action.payload = '*')
      action.payload === '÷' && (action.payload = '/')

      // 最後の文字が計算記号の場合は、置き換えを行う
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

    /*
     * オールクリア（ AC ）が入力されたとき
     */
    reset: state => {
      state.displayString = ''
    },

    /*
     * = が入力されたとき
     */
    calc: state => {
      // 何も入力されていないときはアーリーリターン
      if (state.displayString === '') {
        return
      }

      // 最後の文字が計算記号の場合はアーリーリターン
      const lastString = state.displayString[state.displayString.length - 1]
      if (
        lastString === calculationSymbol.kakeru ||
        lastString === calculationSymbol.waru ||
        lastString === calculationSymbol.tasu ||
        lastString === calculationSymbol.hiku
      ) {
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
