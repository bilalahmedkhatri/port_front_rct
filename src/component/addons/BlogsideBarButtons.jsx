import { green, grey } from '@mui/material/colors'
import CustomButton from './CustomButton'


export default function BlogsideBarButtons() {
  return (
    <>
      <CustomButton 
        variant="contained"
        buttontext="Get Started"
        width="65%"
        minwidth={300}
        borderradius={20}
        fontsize={12}
        fontweight="bold"
        textcolor={grey[900]}
        bgcolor={green[400]}
        bghcolor={green[500]}
        hcolor={grey[50]}
      />
      <CustomButton 
        buttontext="Sign In"
        fontsize={12}
        fontweight="800"
        textcolor={green[700]}
        bgcolor='#ffffff'
        marginleft={1}
      />
    </>
  )
}
