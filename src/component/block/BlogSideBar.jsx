import { Box, Divider } from '@mui/material'
import { BlogsideBarButtons, BlogsideBarSearchButton, BlogsideBarTags, BlogsideBarOtherBlogs } from '../../component'

export default function BlogSideBar() {
  return (
    <Box>
      <BlogsideBarButtons />
      <BlogsideBarSearchButton />
      <BlogsideBarTags />
      <Divider sx={{ marginTop:4 }} />
      <BlogsideBarOtherBlogs />
    </Box>
  )
}
