import { Box, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { BlogsideBarButtons, BlogsideBarSearchButton, BlogsideBarTags, BlogsideBarOtherBlogs, BlogsideBarUserProfile } from '../../component'

const userStyles = makeStyles({
  root: {
    position: '-webkit-sticky',
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
      <BlogsideBarOtherBlogs />
    </Box>
  )
}
