import React from 'react'
import { styled } from '@mui/material/styles'

import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDisplayString } from '../features/calculator/calculatorSlice'

const StyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid  rgba(144, 202, 249, 0.5)',
  height: '80px',
  width: '332px',
  margin: '0 auto',
  borderRadius: '4px',
  fontSize: '24px',
  textAlign: 'right',
  padding: '8px',
  overflow: 'scroll',
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  height: 'auto',
  width: '100%',
  color: '#90caf9',
  fontSize: '40px',
  textAlign: 'right',
}))

const CalcDisplay = () => {
  const displayString = useSelector(selectDisplayString)

  return (
    <StyledBox>
      <StyledTypography>{displayString}</StyledTypography>
    </StyledBox>
  )
}
export default CalcDisplay
