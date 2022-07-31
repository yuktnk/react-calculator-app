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
    mode: 'dark'
  }
})

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: '0 !important'
}))

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        {/* <CalcDisplay /> */}
        <StyledGrid container spacing={12}>
          <StyledGrid item xs={12}>
            <CalcButton variant={'outlined'} displayString={'ac'} />
            <CalcButton variant={'outlined'} displayString={'+/-'} />
            <CalcButton variant={'outlined'} displayString={'%'} />
            <CalcButton variant={'contained'} displayString={'÷'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton variant={'outlined'} displayString={'7'} />
            <CalcButton variant={'outlined'} displayString={'8'} />
            <CalcButton variant={'outlined'} displayString={'9'} />
            <CalcButton variant={'contained'} displayString={'×'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton variant={'outlined'} displayString={'4'} />
            <CalcButton variant={'outlined'} displayString={'5'} />
            <CalcButton variant={'outlined'} displayString={'6'} />
            <CalcButton variant={'contained'} displayString={'-'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton variant={'outlined'} displayString={'1'} />
            <CalcButton variant={'outlined'} displayString={'2'} />
            <CalcButton variant={'outlined'} displayString={'3'} />
            <CalcButton variant={'contained'} displayString={'+'} />
          </StyledGrid>
          <StyledGrid item xs={12}>
            <CalcButton variant={'outlined'} displayString={'0'} />
            <CalcButton variant={'outlined'} disabled displayString={''} />
            <CalcButton variant={'outlined'} disabled displayString={''} />
            <CalcButton variant={'contained'} displayString={'='} />
          </StyledGrid>
        </StyledGrid>
      </div>
    </ThemeProvider>
  )
}

export default App
