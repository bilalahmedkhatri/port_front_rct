// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet'; // For SEO
// import styled from 'styled-components'; // For styling

// // MUI imports
// import { Container } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// // Component imports (assumed to exist)
// import BlogHeader from '../components/BlogHeader';
// import HeroSection from '../components/HeroSection';
// // import PostCard from '../components/PostCard';
// // import Sidebar from '../components/Sidebar';
// // import Newsletter from '../components/Newsletter';
// // import Footer from '../components/Footer';
// // import LoadingSpinner from '../components/LoadingSpinner';

// // API import
// import { listPost } from '../services/apiPost';

// const MainPage = () => {
//   // State management
//   const [listOfPost, setListOfPost] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const theme = useTheme();
//   const postsPerPage = 9;

//   // Fetch posts
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const data = await listPost();
//         setListOfPost(data);
//         console.log('feching data', data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   return (
//     <>
//       {/* SEO Optimization */}
//       <Helmet>
//         <title>Blog Title | Your Website</title>
//         <meta name="description" content="Your blog description here" />
//         <meta name="keywords" content="blog, articles, content" />
//         <link rel="canonical" href="https://yourdomain.com/blog" />
//         {/* Schema.org markup */}
//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "http://schema.org",
//               "@type": "Blog",
//               "name": "Your Blog Name",
//               "description": "Your blog description",
//               "url": "https://yourdomain.com/blog"
//             }
//           `}
//         </script>
//       </Helmet>
//       <BlogHeader darkMode={darkMode} setDarkMode={setDarkMode} />

//       <HeroSection blogPost={listOfPost} />
//         // featuredPosts={posts.filter(post => post.featured).slice(0, 3)}
//       />

//       {/* <ContentWrapper>
//           <MainContent>
//             {loading ? (
//               <LoadingSpinner />
//             ) : (
//               <>
//                 <PostsGrid>
//                   {currentPosts.map(post => (
//                     <PostCard
//                       key={post.id}
//                       post={post}
//                       darkMode={darkMode}
//                     />
//                   ))}
//                 </PostsGrid>

//                 <Pagination>
//                   <button
//                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                   >
//                     Previous
//                   </button>
//                   <span>Page {currentPage}</span>
//                   <button
//                     onClick={() => setCurrentPage(prev => prev + 1)}
//                     disabled={indexOfLastPost >= posts.length}
//                   >
//                     Next
//                   </button>
//                 </Pagination>
//               </>
//             )}
//           </MainContent>

//           <Sidebar 
//             popularPosts={posts.slice(0, 5)}
//             categories={['Technology', 'Lifestyle', 'Travel', 'Food']}
//             tags={['coding', 'design', 'photography', 'tips']}
//           />
//         </ContentWrapper>

//         <Newsletter />
//         <Footer /> */}
//     </>
//   );
// };

// export default MainPage;


// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import DOMPurify from 'dompurify';
// import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //(Ensure this is the correct path)
// import draftToHtml from 'draftjs-to-html';
// // MUI imports
// import { Container, Typography, CircularProgress, Pagination } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// // API import (ensure this function is secure)
// import { listPost } from '../services/apiPost';

// // Placeholder components - replace with your actual components
// const BlogHeader = lazy(() => import('../components/BlogHeader'));
// const HeroSection = lazy(() => import('../components/HeroSection'));

// // Styled Components
// const ContentWrapper = styled(Container)`
//   margin-top: 4px;
//   display: flex;
//   gap: 4px;
// `;

// const MainContent = styled.main`
//   flex: 3;
// `;

// const PostCardWrapper = styled.div`
//   margin-bottom: 3px;
//   border: 1px solid doted black;
//   border-radius: 10px;
//   padding: 12px;
//   box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
// `;

// const PostsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 16px;
// `;


// const MainPage = () => {
//   const [listOfPost, setListOfPost] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const theme = useTheme();
//     const [currentPage, setCurrentPage] = useState(1);
//     const postsPerPage = 9;

//   useEffect(() => {
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

//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const currentPosts = listOfPost.slice(indexOfFirstPost, indexOfLastPost);

//     const totalPages = Math.ceil(listOfPost.length / postsPerPage);
//   const renderEditorContent = (rawContent) => {
//     try {
//         if (!rawContent) {
//             return <Typography>Content not available.</Typography>;
//         }

//         let contentState;
//         if (typeof rawContent === 'string') {
//             try {
//                 // Attempt to parse the string as JSON
//                 const parsedContent = JSON.parse(rawContent);
//                 contentState = convertFromRaw(parsedContent);
//             } catch (error) {
//                 console.error("Failed to parse rawContent string:", error);
//                 return <Typography>Error displaying content.</Typography>;
//             }
//         } else if (typeof rawContent === 'object') {
//             // Assume rawContent is already a valid ContentState object
//             contentState = convertFromRaw(rawContent);
//         } else {
//             return <Typography>Invalid content format.</Typography>;
//         }

//         const sanitizedHTML = DOMPurify.sanitize(
//             draftToHtml(convertToRaw(contentState)),
//             {
//                 ALLOWED_TAGS: ['b', 'i', 'u', 's', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'img', 'em', 'strong'],
//                 ALLOWED_ATTR: ['href', 'target', 'src', 'alt', 'title', 'style', 'class'], // Customize allowed attributes
//             }
//         );

//         return (
//             <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
//         );
//     } catch (error) {
//         console.error("Error rendering editor content:", error);
//         return <Typography>Error displaying content.</Typography>;
//     }
// };



//   return (
//     <>
//       <Helmet>
//         {/* ... SEO Meta Tags ... */}
//       </Helmet>

//       <Suspense fallback={<CircularProgress />}>
//         <BlogHeader darkMode={darkMode} setDarkMode={setDarkMode} />
//         <HeroSection blogPost={currentPosts} />

//         <ContentWrapper>
//           <MainContent>
//             {loading ? (
//               <CircularProgress />
//             ) : (
//               <>
//                 <PostsGrid>
//                   {currentPosts.map((post) => (
//                     <PostCardWrapper key={post.id}>
//                       <Typography variant="h5" gutterBottom>
//                         {post.title}
//                       </Typography>
//                       {/* <Typography variant="subtitle1" color="textSecondary" gutterBottom>
//                         {post.createdAt}
//                       </Typography> */}
//                       {/* Render Draft.js Content */}
//                       {renderEditorContent(post.content)}
//                     </PostCardWrapper>
//                   ))}
//                 </PostsGrid>

//                 {/* Pagination */}
//                 <Pagination>
//                   <button
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                   >
//                     Previous
//                   </button>
//                   <span>Page {currentPage} of {totalPages}</span>
//                   <button
//                     onClick={() => setCurrentPage((prev) => prev + 1)}
//                     disabled={currentPage === totalPages}
//                   >
//                     Next
//                   </button>
//                 </Pagination>
//               </>
//             )}
//           </MainContent>
//           {/* ... Sidebar, Newsletter, Footer (if you have them) ... */}
//         </ContentWrapper>
//       </Suspense>
//     </>
//   );
// };

// export default MainPage;


// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Helmet } from 'react-helmet';
// import DOMPurify from 'dompurify';
// import { convertFromRaw, convertToRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; //(Ensure this is the correct path)

// // MUI imports
// import { Container, Typography, CircularProgress, Box, Button } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// // API import (ensure this function is secure)
// import { listPost } from '../services/apiPost';

// // Placeholder components - replace with your actual components
// const BlogHeader = lazy(() => import('../components/BlogHeader'));
// const HeroSection = lazy(() => import('../components/HeroSection'));

// // ... other imports

// const MainPage = () => {
//   // ... state variables (listOfPost, loading, darkMode)
//   const [listOfPost, setListOfPost] = useState([]);
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

//   // Render Draft.js Content (using dangerouslySetInnerHTML and DOMPurify)
//   const renderEditorContent = (rawContent) => {
//     try {
//       if (!rawContent) {
//         return <Typography>Content not available.</Typography>;
//       }

//       let contentState;
//       if (typeof rawContent === 'string') {
//         try {
//           const parsedContent = JSON.parse(rawContent);
//           contentState = convertFromRaw(parsedContent);
//         } catch (error) {
//           console.error("Failed to parse rawContent string:", error);
//           return <Typography>Error displaying content.</Typography>;
//         }
//       } else if (typeof rawContent === 'object') {
//         contentState = convertFromRaw(rawContent);
//       } else {
//         return <Typography>Invalid content format.</Typography>;
//       }

//       const sanitizedHTML = DOMPurify.sanitize(
//         draftToHtml(convertToRaw(contentState)),
//         {
//           ALLOWED_TAGS: ['b', 'i', 'u', 's', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'img', 'em', 'strong'],
//           ALLOWED_ATTR: ['href', 'target', 'src', 'alt', 'title', 'style', 'class'],
//         }
//       );

//       return (
//         <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
//       );
//     } catch (error) {
//       console.error("Error rendering editor content:", error);
//       return <Typography>Error displaying content.</Typography>;
//     }
//   };

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






import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import DOMPurify from 'dompurify';
import { convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// MUI imports
import { Container, Typography, CircularProgress, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// API import
import { listPost } from '../services/apiPost';
import GetPosts from './GetPosts';

// Placeholder components
const BlogHeader = lazy(() => import('../components/BlogHeader'));
const HeroSection = lazy(() => import('../components/HeroSection'));

// Truncate function
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
}

const MainPage = () => {
  // ... other state variables (listOfPost, loading, darkMode)
  const [listOfPost, setListOfPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedPosts, setExpandedPosts] = useState({}); // Track expanded state
  const postsPerPage = 9;

  useEffect(() => {
    // ... fetchPosts logic (same as before)
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await listPost(); // Fetch data
        console.log('Fetched data:', response);

        // Add Caching Headers (Example - adjust as needed)
        const cacheControl = response.headers;
        console.error('Cache-Control:', cacheControl);

        if (!cacheControl || !cacheControl.includes('max-age')) {
          console.warn("API response does not have proper caching headers.");
        }

        setListOfPost(response.data); // Assuming the data is in response.data
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // ... other logic (indexOfLastPost, indexOfFirstPost, currentPosts, totalPages)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listOfPost.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(listOfPost.length / postsPerPage);

  // Updated renderEditorContent function
  const renderEditorContent = (rawContent, postId) => {
    const maxLength = 150; // Character limit

    try {
      // ... (Code to convert rawContent to contentState remains the same) ...
      if (!rawContent) {
        return <Typography>Content not available.</Typography>;
      }

      let contentState;
      if (typeof rawContent === 'string') {
        try {
          const parsedContent = JSON.parse(rawContent);
          contentState = convertFromRaw(parsedContent);
        } catch (error) {
          console.error('Failed to parse rawContent string:', error);
          return <Typography>Error displaying content.</Typography>;
        }
      } else if (typeof rawContent === 'object') {
        contentState = convertFromRaw(rawContent);
      } else {
        return <Typography>Invalid content format.</Typography>;
      }

      const htmlContent = draftToHtml(convertToRaw(contentState));
      const isExpanded = expandedPosts[postId];
      const truncatedContent = isExpanded
        ? htmlContent
        : truncateText(htmlContent, maxLength);

      const sanitizedHTML = DOMPurify.sanitize(truncatedContent, {
        ALLOWED_TAGS: [
          'b', 'i', 'u', 's', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'ul', 'ol', 'li', 'blockquote', 'img', 'em', 'strong'
        ],
        ALLOWED_ATTR: [
          'href', 'target', 'src', 'alt', 'title', 'style', 'class'
        ],
      });

      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          {!isExpanded && htmlContent.length > maxLength && (
            <Button
              size="small"
              onClick={() =>
                setExpandedPosts({ ...expandedPosts, [postId]: true })
              }
            >
              Read More
            </Button>
          )}
          {isExpanded && (
            <Button
              size="small"
              onClick={() =>
                setExpandedPosts({ ...expandedPosts, [postId]: false })
              }
            >
              Read Less
            </Button>
          )}
        </div>
      );
    } catch (error) {
      console.error('Error rendering editor content:', error);
      return <Typography>Error displaying content.</Typography>;
    }
  };

  return (
    <>
      <Helmet>{/* ... SEO Meta Tags ... */}</Helmet>

      <Suspense fallback={<CircularProgress />}>
        <BlogHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection blogPost={currentPosts} />

        <Container
          component="main"
          sx={{
            marginTop: theme.spacing(4),
            display: 'flex',
            gap: theme.spacing(4),
          }}
        >
          <Box sx={{ flex: 3 }}>
            {loading ? (
              <CircularProgress />
            ) : (
              <>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: theme.spacing(3),
                  }}
                >
                  {currentPosts.map((post) => (
                    <Box
                      key={post.id}
                      sx={{
                        marginBottom: theme.spacing(3),
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: theme.shape.borderRadius,
                        padding: theme.spacing(2),
                        boxShadow: theme.shadows[2],
                      }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {post.title}
                      </Typography>
                      {renderEditorContent(post.content, post.id)} {/* Pass postId */}
                    </Box>
                  ))}
                </Box>

                {/* Pagination */}
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    sx={{ mr: 2 }}
                  >
                    Previous
                  </Button>
                  <Typography>
                    Page {currentPage} of {totalPages}
                  </Typography>
                  <Button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                    sx={{ ml: 2 }}
                  >
                    Next
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </Suspense>
      <GetPosts currentPosts={currentPosts} />
    </>
  );
}

export default MainPage;