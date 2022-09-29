import { Box, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

export default function BlogFigCaption() {
  return (
    <Box>
        <Typography align='center' fontSize={12} pt={1} color={grey[600]} >
            Photo by 
            <Link href="" rel="noreferrer" target='_blank' pl="4px" color='inherit'>
                UnSplash
            </Link>
        </Typography>
    </Box>
  )
}
