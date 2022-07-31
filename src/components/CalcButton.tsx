import React from 'react'
import { styled } from '@mui/material/styles'
import CountUp from 'react-countup'
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
  variant: 'text' | 'outlined' | 'contained'
  disabled?: boolean | undefined
  color?:
    | 'inherit'
    | 'secondary'
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
}

const StyledButton = styled(Button)(({ theme }) => ({
  height: '80px',
  width: '80px',
  margin: '2px',
  fontSize: '30px'
}))

const CalcButton = (props: CalcButtonProps) => {
  const dispacth = useDispatch()

  const handleClick = (value: string) => {
    if (value === 'ac') {
      dispacth(reset())
    } else if (value === '=') {
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
      color={props.color}
      variant={props.variant}
      disabled={props.disabled}
      onClick={() => handleClick(props.displayString)}
    >
      {props.displayString !== 'ac' &&
      props.displayString !== '+' &&
      props.displayString !== '-' &&
      props.displayString !== '×' &&
      props.displayString !== '÷' &&
      props.displayString !== '.' &&
      props.displayString !== '=' ? (
        <CountUp
          start={0}
          end={Number(props.displayString)}
          duration={Number(props.displayString) / 15}
          separator=","
        />
      ) : (
        props.displayString
      )}
    </StyledButton>
  )
}
export default CalcButton
