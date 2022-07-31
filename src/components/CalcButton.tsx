import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

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
  const handleClick = (number: string) => {
    console.log(number)
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
