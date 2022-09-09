import { styled, ThemeProvider } from '@mui/styles'
import React, { useState } from 'react'
import { blueGrey, green } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const ProgressBarr = styled('div')(({ theme }) => ({
    backgroundColor: blueGrey[50],
    height: theme.spacing(1),
    width: '100%',
    borderRadius: '6px',
}))


const ProgressBarStyle = styled('h5')(({ theme }) => ({
    // fontFamily: 
    backgroundColor: green[500],
    fontWeight: 600,
    fontSize: '0.9rem',
    display: 'flex',
    height: theme.spacing(1),
    alignItems: 'right',
    justifyContent: 'right',
    width: 0,
    borderRadius: '6px',
    opacity: 0,
    transition: '1s ease',
}))

export default function ProgressBar({ done }) {
    const [style, setStyle] = useState({})
    setTimeout(() => {
        const newstyle = {
            opacity: 1,
            width: `${done}%`,
        }
        setStyle(newstyle)
    }, 1000)

    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <ProgressBarr>
                <ProgressBarStyle div={done.toString()} data-load={done} style={style} />
            </ProgressBarr>
        </ThemeProvider>
    )
}
