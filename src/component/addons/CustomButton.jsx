import { Button } from '@mui/material'

export default function CustomButton(props) {
  return (
    <>
      <Button
        variant={props.variant}
        component={props.component}
        size={props.size}
        onClick={props.clickfunc}
        className={props.buttonclass}
        sx={{
          width: props.width,
          maxWidth: props.minwidth,
          borderRadius: props.borderradius,
          fontSize: props.fontsize,
          fontWeight: props.fontweight,
          color: props.textcolor,
          backgroundColor: props.bgcolor,
          marginInlineStart: props.marginleft,
          marginInlineEnd: props.marginright,
          mt: props.margintop,
          mb: props.mb,
          my: props.my,
          mx: props.mx,
          paddingInlineStart: props.pl,
          paddingInlineEnd: props.pr,
          paddingBlock: props.paddingblock,
          paddingBottom: props.paddingbottom,
          px: props.px,
          textTransform: props.texttransform,
          "&:hover": {
            bgcolor: props.bghcolor,
            color: props.hcolor,
          },
        }}
      >
        {props.buttontext}
      </Button>
    </>
  )
}
