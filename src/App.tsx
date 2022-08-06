import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { styled } from '@mui/material/styles'
import './App.css'
import CalcButton from './components/CalcButton'
import CalcDisplay from './components/CalcDisplay'
import { Grid } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: '0 !important',
  margin: '0 !important',
  width: '336px',
}))

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <StyledGrid container spacing={12}>
          <StyledGrid item xs={12}>
            <CalcDisplay />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton displayString={'7'} />
            <CalcButton displayString={'8'} />
            <CalcButton displayString={'9'} />
            <CalcButton displayString={'÷'} variant={'contained'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton displayString={'4'} />
            <CalcButton displayString={'5'} />
            <CalcButton displayString={'6'} />
            <CalcButton displayString={'×'} variant={'contained'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton displayString={'1'} />
            <CalcButton displayString={'2'} />
            <CalcButton displayString={'3'} />
            <CalcButton displayString={'-'} variant={'contained'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton displayString={'0'} />
            <CalcButton displayString={'ac'} color="warning" />
            <CalcButton displayString={'='} variant={'contained'} color="success" />
            <CalcButton displayString={'+'} variant={'contained'} />
          </StyledGrid>
        </StyledGrid>
      </div>
    </ThemeProvider>
  )
}

export default App
