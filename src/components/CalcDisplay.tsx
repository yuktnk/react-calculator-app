import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

// type CalcDisplayProps = {
//   displayString: string
// }

const StyledButton = styled(Button)(({ theme }) => ({}))

const CalcDisplay = () => {
  return <StyledButton variant="outlined">deeee</StyledButton>
}
export default CalcDisplay
