import { Box, Button } from '@mui/material'
import { green, grey } from '@mui/material/colors'


export default function BlogsideBarButtons() {
  return (
    <Box sx={{ mt: 3,  }}>
    <Button
      variant="contained"
      size="large"
      // onClick={gerFormData}
      sx={{
        width: "65%",
        maxWidth: 300,
        borderRadius: 20,
        fontSize: 12,
        color: grey[900],
        backgroundColor: green[400],
        fontWeight: "bold",
        "&:hover": {
          bgcolor: green[500],
          color: green[40],
        },
      }}
    >
      Get Started
    </Button>
    <Button
      sx={{
        fontSize: 12,
        fontWeight: "800",
        ml: 2,
        color: green[700]
      }}
    >
      Sign In
    </Button>
  </Box>
  )
}
