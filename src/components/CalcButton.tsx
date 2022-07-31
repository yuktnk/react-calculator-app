import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import {
  addNumber,
  addCalculationSymbol,
  reset,
  calc
} from '../features/calculator/calculatorSlice'

type CalcButtonProps = {
  displayString: string
  variant: 'text' | 'outlined' | 'contained' | undefined
  disabled?: boolean | undefined
}

const StyledButton = styled(Button)(({ theme }) => ({
  height: '80px',
  width: '80px',
  margin: '2px'
}))

const CalcButton = (props: CalcButtonProps) => {
  const dispacth = useDispatch()

  const handleClick = (value: string) => {
    if (value === 'ac') {
      // reset
      dispacth(reset())
    } else if (value === '=') {
      // calc
      dispacth(calc())
    } else if (
      value === '×' ||
      value === '÷' ||
      value === '+' ||
      value === '-'
    ) {
      dispacth(addCalculationSymbol(value))
    } else {
      dispacth(addNumber(value))
    }
  }

  return (
    <StyledButton
      variant={props.variant}
      disabled={props.disabled}
      onClick={() => handleClick(props.displayString)}
    >
      {props.displayString}
    </StyledButton>
  )
}
export default CalcButton
