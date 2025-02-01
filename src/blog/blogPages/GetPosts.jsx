import React from 'react';

// MUI imports
import { Grid, Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function GetPosts({ currentPosts }) {

  return (
    <Grid container spacing={3}>
      {currentPosts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <CardActionArea component={RouterLink} to={`/post/${post.slug}`}>
              {post.featured_image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={post.featured_image}
                  alt={post.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Display a short excerpt of the post content */}
                  {post.meta_description > 150
                    ? `${post.meta_description.substring(0, 150)}...`
                    : post.meta_description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}


// return (
//   <>
//     <Suspense fallback={<CircularProgress />}>

//       <Container
//       >
//         <Box sx={{ flex: 3 }}>
//           {loading ? (
//             <CircularProgress />
//           ) : (
//             <>
//               <Box
//                 sx={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                   gap: theme.spacing(3),
//                 }}
//               >
//                 {currentPosts.map((post) => (
//                   <Box
//                     key={post.id}
//                     sx={{
//                       marginBottom: theme.spacing(3),
//                       border: `1px solid ${theme.palette.divider}`,
//                       borderRadius: theme.shape.borderRadius,
//                       padding: theme.spacing(2),
//                       boxShadow: theme.shadows[2],
//                     }}
//                   >
//                     <Typography variant="h5" gutterBottom>
//                       {post.title}
//                     </Typography>
//                     {renderEditorContent(post.content, post.id)} {/* Pass postId */}
//                   </Box>
//                 ))}
//               </Box>

//               {/* Pagination */}
//               <Box
//                 sx={{
//                   mt: 4,
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Button
//                   onClick={() =>
//                     setCurrentPage((prev) => Math.max(prev - 1, 1))
//                   }
//                   disabled={currentPage === 1}
//                   sx={{ mr: 2 }}
//                 >
//                   Previous
//                 </Button>
//                 <Typography>
//                   Page {currentPage} of {totalPages}
//                 </Typography>
//                 <Button
//                   onClick={() => setCurrentPage((prev) => prev + 1)}
//                   disabled={currentPage === totalPages}
//                   sx={{ ml: 2 }}
//                 >
//                   Next
//                 </Button>
//               </Box>
//             </>
//           )}
//         </Box>
//       </Container>
//     </Suspense>
//   </>
// );
// };

