import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import {
  addNumber,
  addCalculationSymbol,
  reset,
  calc,
} from '../features/calculator/calculatorSlice'

type CalcButtonProps = {
  displayString: string
  variant?: 'text' | 'outlined' | 'contained'
  disabled?: boolean | undefined
  color?: 'inherit' | 'secondary' | 'primary' | 'success' | 'error' | 'info' | 'warning'
}

const StyledButton = styled(Button)(({ theme }) => ({
  height: '80px',
  width: '80px',
  margin: '2px',
  fontSize: '30px',
}))

const CalcButton = ({ color, variant = 'outlined', disabled, displayString }: CalcButtonProps) => {
  const dispacth = useDispatch()

  const handleClick = (value: string) => {
    if (value === 'ac') {
      dispacth(reset())
    } else if (value === '=') {
      dispacth(calc())
    } else if (value === '×' || value === '÷' || value === '+' || value === '-') {
      dispacth(addCalculationSymbol(value))
    } else {
      dispacth(addNumber(value))
    }
  }

  return (
    <StyledButton
      color={color}
      variant={variant}
      disabled={disabled}
      onClick={() => handleClick(displayString)}
    >
      {displayString}
    </StyledButton>
  )
}
export default CalcButton
