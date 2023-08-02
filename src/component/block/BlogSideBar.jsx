import { Box, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { BlogsideBarButtons, BlogsideBarSearchButton, BlogsideBarTags, BlogsideBarOtherBloggers, BlogsideBarUserProfile } from '../../component'

const userStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '2rem',
    height: '100%',
    maxHeight: '100vh',
  }
})

export default function BlogSideBar() {

  const classes = userStyles()
  return (
    <Box className={classes.root}>
      <BlogsideBarButtons />
      <BlogsideBarSearchButton />
      <BlogsideBarUserProfile />
      <BlogsideBarTags />
      <Divider sx={{ marginTop:4 }} />
      <BlogsideBarOtherBloggers done={false}/>
    </Box>
  )
}
