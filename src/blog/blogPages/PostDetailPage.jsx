import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Chip, Divider, CircularProgress } from '@mui/material';
import { SinglePost } from '../services/apiPost';

// ... other imports
import DOMPurify from 'dompurify';
import { convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';


export default function PostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await SinglePost(slug); // Fetch data

        // Add Caching Headers (Example - adjust as needed)
        const cacheControl = response.headers;
        console.error('Cache-Control:', cacheControl);

        if (!cacheControl || !cacheControl.includes('max-age')) {
          console.warn("API response does not have proper caching headers.");
        }

        setPost(response.data); // Assuming the data is in response.data
      } catch (error) {
        console.error('Error fetching posts:', error);
      } 
    };

    fetchPosts();
  }, [slug]);

  if (!post) {
    return <CircularProgress />;
  }

  //  Render Draft.js Content(using dangerouslySetInnerHTML and DOMPurify)
  const renderEditorContent = (rawContent) => {
    try {
      if (!rawContent) {
        return <Typography>Content not available.</Typography>;
      }

      let contentState;
      if (typeof rawContent === 'string') {
        try {
          const parsedContent = JSON.parse(rawContent);
          contentState = convertFromRaw(parsedContent);
        } catch (error) {
          console.error("Failed to parse rawContent string:", error);
          return <Typography>Error displaying content.</Typography>;
        }
      } else if (typeof rawContent === 'object') {
        contentState = convertFromRaw(rawContent);
      } else {
        return <Typography>Invalid content format.</Typography>;
      }

      const sanitizedHTML = DOMPurify.sanitize(
        draftToHtml(convertToRaw(contentState)),
        {
          ALLOWED_TAGS: ['b', 'i', 'u', 's', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'img', 'em', 'strong'],
          ALLOWED_ATTR: ['href', 'target', 'src', 'alt', 'title', 'style', 'class'],
        }
      );

      return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
      );
    } catch (error) {
      console.error("Error rendering editor content:", error);
      return <Typography>Error displaying content.</Typography>;
    }
  };

  return (

    <Suspense fallback={<CircularProgress />}>
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <Box mb={2}>
        {post.tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} sx={{ mr: 1 }} />
        ))}
      </Box>
      {post.featured_image && (
        <img
          src={post.featured_image}
          alt={post.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
        />
      )}
      {/* <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      {renderEditorContent(post.content)}
      <Divider sx={{ my: 4 }} />
      <Typography variant="subtitle1" color="text.secondary">
        Published on {new Date(post.created_at).toLocaleDateString()}
      </Typography>
    </Suspense>
  );
}





// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //(Ensure this is the correct path)

// // MUI imports
// import { Container, Typography, CircularProgress, Box, Button } from '@mui/material';
// import { useTheme } from '@mui/material/styles';




//   const [loading, setLoading] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = useTheme();
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 9;

//   useEffect(() => {
//     // ... fetchPosts logic (same as before)
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const response = await listPost(); // Fetch data
//         console.log('Fetched data:', response);

//         // Add Caching Headers (Example - adjust as needed)
//         const cacheControl = response.headers;
//         console.error('Cache-Control:', cacheControl);

//         if (!cacheControl || !cacheControl.includes('max-age')) {
//           console.warn("API response does not have proper caching headers.");
//         }

//         setListOfPost(response.data); // Assuming the data is in response.data
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = listOfPost.slice(indexOfFirstPost, indexOfLastPost);

//   const totalPages = Math.ceil(listOfPost.length / postsPerPage);

//

//   const trancateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.substring(0, maxLength) + '...';
//     }
//     return text;
//   };

//   return (
//     <>
//       <Helmet>
//         {/* ... SEO Meta Tags ... */}
//       </Helmet>

//       <Suspense fallback={<CircularProgress />}>
//         <BlogHeader darkMode={darkMode} setDarkMode={setDarkMode} />
//         <HeroSection blogPost={currentPosts} />

//         {/* Using MUI Container with Emotion's styled */}
//         <Container
//           component="main"
//           sx={{
//             marginTop: theme.spacing(4),
//             display: 'flex',
//             gap: theme.spacing(4),
//           }}
//         >
//           <Box sx={{ flex: 3 }}>
//             {loading ? (
//               <CircularProgress />
//             ) : (
//               <>
//                 {/* Using MUI Grid and Box for layout */}
//                 <Box
//                   sx={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//                     gap: theme.spacing(3),
//                   }}
//                 >
//                   {currentPosts.map((post) => (
//                     <Box
//                       key={post.id}
//                       sx={{
//                         marginBottom: theme.spacing(3),
//                         border: `1px solid ${theme.palette.divider}`,
//                         borderRadius: theme.shape.borderRadius,
//                         padding: theme.spacing(2),
//                         boxShadow: theme.shadows[2],
//                       }}
//                     >
//                       <Typography variant="h5" gutterBottom>
//                         {post.title}
//                       </Typography>
//                       {/* <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//                         {post.createdAt}
//                       </Typography> */}
//                       {/* {trancateText(post.content, 100)} */}
//                       {renderEditorContent(post.content)}
//                     </Box>
//                   ))}
//                 </Box>

//                 {/* Pagination */}
//                 <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                   <Button
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                     sx={{ mr: 2 }}
//                   >
//                     Previous
//                   </Button>
//                   <Typography>Page {currentPage} of {totalPages}</Typography>
//                   <Button
//                     onClick={() => setCurrentPage((prev) => prev + 1)}
//                     disabled={currentPage === totalPages}
//                     sx={{ ml: 2 }}
//                   >
//                     Next
//                   </Button>
//                 </Box>
//               </>
//             )}
//           </Box>

//           {/* ... Sidebar (if applicable) ... */}
//         </Container>

//         {/* ... Newsletter, Footer (if applicable) ... */}
//       </Suspense>
//     </>
//   );
// };

// export default MainPage;


