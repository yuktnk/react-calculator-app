import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface CalculatorState {
  displayString: string
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CalculatorState = {
  displayString: '-',
  status: 'idle'
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {}
})

export const selectDisplayString = (state: RootState) =>
  state.calculator.displayString

export default calculatorSlice.reducer
