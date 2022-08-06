import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface CalculatorState {
  displayString: string
}

const initialState: CalculatorState = {
  displayString: '0',
}

enum calculationSymbol {
  kakeru = '×',
  waru = '÷',
  tasu = '+',
  hiku = '-',
}

enum formatedCalculationSymbol {
  kakeru = '*',
  waru = '/',
  tasu = '+',
  hiku = '-',
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    /*
     * 0~9の数字が入力されたとき
     */
    addNumber: (state, action) => {
      if (state.displayString === '0' && action.payload === '0') {
        return
      }

      if (state.displayString === '0') {
        state.displayString = ''
      }

      state.displayString = state.displayString.concat(action.payload)
    },

    /*
     * 計算記号（×, ÷, +, -）が入力されたとき
     */
    addCalculationSymbol: (state, action) => {
      // 何も入力されていないときはアーリーリターン
      if (state.displayString === '0') {
        return
      }

      // × と ÷ のときは * と / に変換する
      action.payload === calculationSymbol.kakeru &&
        (action.payload = formatedCalculationSymbol.kakeru)
      action.payload === calculationSymbol.waru &&
        (action.payload = formatedCalculationSymbol.waru)

      // 最後の文字が計算記号の場合は、置き換えを行う
      const lastString = state.displayString[state.displayString.length - 1]
      if (
        lastString === formatedCalculationSymbol.kakeru ||
        lastString === formatedCalculationSymbol.waru ||
        lastString === formatedCalculationSymbol.tasu ||
        lastString === formatedCalculationSymbol.hiku
      ) {
        state.displayString = state.displayString.slice(0, -1) + action.payload
        return
      }

      state.displayString = state.displayString.concat(action.payload)
    },

    /*
     * オールクリア（ AC ）が入力されたとき
     */
    reset: (state) => {
      state.displayString = '0'
    },

    /*
     * = が入力されたとき
     */
    calc: (state) => {
      // 何も入力されていないときはアーリーリターン
      if (state.displayString === '0') {
        return
      }

      // 最後の文字が計算記号の場合はアーリーリターン
      const lastString = state.displayString[state.displayString.length - 1]
      if (
        lastString === formatedCalculationSymbol.kakeru ||
        lastString === formatedCalculationSymbol.waru ||
        lastString === formatedCalculationSymbol.tasu ||
        lastString === formatedCalculationSymbol.hiku
      ) {
        return
      }

      state.displayString = String(eval(state.displayString))
    },
  },
})

export const { addNumber, addCalculationSymbol, reset, calc } =
  calculatorSlice.actions

export const selectDisplayString = (state: RootState) =>
  state.calculator.displayString

export default calculatorSlice.reducer
