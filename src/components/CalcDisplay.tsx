import React from 'react'
import { styled } from '@mui/material/styles'

import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDisplayString } from '../features/calculator/calculatorSlice'

const StyledTypography = styled(Typography)(({ theme }) => ({
  border: '1px solid  rgba(144, 202, 249, 0.5)',
  height: '80px',
  width: '332px',
  margin: '0 auto',
  borderRadius: '4px',
  color: '#90caf9'
}))

const CalcDisplay = () => {
  const displayString = useSelector(selectDisplayString)
  return <StyledTypography>{displayString}</StyledTypography>
}
export default CalcDisplay
