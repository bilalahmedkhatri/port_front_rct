import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';
import PostList from './components/PostList';
import PostUpdate from './components/PostUpdate';
import SignUp from './components/SignUp';
import TagList from './components/TagList';
import CategoryList from './components/CategoryList';
import { AuthProvider } from './contexts/AuthContext'; // Create this context for managing authentication
import PrivateRoute from './components/PrivateRoute'; // Create a PrivateRoute component to protect routes
import { ThemeConfig } from './contexts/ThemeConfig';



// blog pages
import MainPage from './blogPages/MainPage';
import PostDetailPage from './blogPages/PostDetailPage';

const theme = createTheme({
  // your theme configuration
});

function BlogApp() {
  return (
    <>
      {/* Blog UI */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mb: 4 }}>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/post-page/:slug" element={<PostDetailPage />} />
          </Routes>
        </Container>
      </ThemeProvider>

      {/* Dashboard UI */}
      <ThemeProvider theme={theme}>
        <ThemeConfig>
          <CssBaseline />
          {/* <Router> */}
          <AuthProvider>
            <Container maxWidth="lg" sx={{ mb: 4 }}>
              <Routes>
                <Route path="/blog" element={<PostList />} />
                <Route path="/post/:slug" element={<PostDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/create" element={<PrivateRoute><PostCreate /></PrivateRoute>} />
                <Route path="/update/:slug" element={<PrivateRoute><PostUpdate /></PrivateRoute>} />
                <Route path="/tags" element={<PrivateRoute><TagList /></PrivateRoute>} />
                <Route path="/category" element={<PrivateRoute><CategoryList /></PrivateRoute>} />
              </Routes>
            </Container>
            <Footer />
          </AuthProvider>
          {/* </Router> */}
        </ThemeConfig>
      </ThemeProvider>

    </>

  );
}

export default BlogApp;