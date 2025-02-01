
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  CircularProgress,
  Alert,
  Container,
  useTheme,
  useMediaQuery,
  OutlinedInput
} from '@mui/material';
import api from '../services/api';
import '../src/static/EditorStyles.css';

function PostCreate() {
  const [title, setTitle] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [initialContent, setInitialContent] = useState(null);
  const { id: postId } = useParams(); // Get the postId from the URL

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Generate random light color for chips
  const getRandomLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 85%)`;
  };

  // Calculate editor height based on screen size
  const getEditorHeight = () => {
    if (isMobile) {
      return '200px';
    }
    return '300px';
  };

  // Debounce function to delay saving to localStorage
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Save editor content to localStorage with debounce
  const saveContent = useCallback(
    debounce((content) => {
      localStorage.setItem('editorContent', JSON.stringify(content));
    }, 1000),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [categoriesResponse, tagsResponse, postResponse] = await Promise.all([
          api.getcategory(),
          api.getTags(),
          api.getPostById(postId) // Fetch post by ID
        ]);

        setCategories(categoriesResponse.data || []);
        setTags(tagsResponse.data || []);

        const postData = postResponse.data;
        setTitle(postData.title);
        setSelectedCategories(postData.categories || []);
        setSelectedTags(postData.tags || []);
        setKeywords(postData.keywords || '');
        setInitialContent(postData.content)
        // Handle featured image URL
        if (postData.featured_image_url) {
          setImagePreview(postData.featured_image_url);
        }
        // Set the editor content
        try {
          const contentState = convertFromRaw(JSON.parse(postData.content));
          setEditorState(EditorState.createWithContent(contentState));
        } catch (error) {
          console.error('Error loading post content:', error);
        }

      } catch (err) {
        setError('Failed to load post data');
        console.error('Error fetching post data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (postId) {
      fetchData();
    }
  }, [postId]);

  useEffect(() => {
    if (initialContent) {
      try {
        const contentState = convertFromRaw(JSON.parse(initialContent));
        setEditorState(EditorState.createWithContent(contentState));
      } catch (error) {
        console.error('Error setting initial editor content:', error);
      }
    }
  }, [initialContent]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);

    const contentState = newEditorState.getCurrentContent();
    if (contentState.hasText()) {
      const rawContent = convertToRaw(contentState);
      saveContent(rawContent);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const contentState = editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState));

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', rawContent);
    selectedCategories.forEach((catId) => {
      formData.append('categories', catId);
    });
    selectedTags.forEach((tagId) => {
      formData.append('tags', tagId);
    });
    if (featuredImage) {
      formData.append('featured_image', featuredImage);
    }
    formData.append('keywords', keywords);

    try {
      const response = await api.updatePost(postId, formData); // Update post
      if (response.data) {
        localStorage.removeItem('editorContent');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error details:', error.response?.data || error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImageCallBack = async (file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await api.uploadImage(formData);
      if (response.data && response.data.url) {
        return { data: { link: response.data.url } };
      }
      throw new Error('Failed to upload image');
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          mt: 7,
          mb: 10,
          pr: 3,
          pb: 6
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Edit Post
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box className="editor-container" sx={{ borderRadius: 2, overflow: 'hidden' }}>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbar={{
                      options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'image', 'textAlign', 'link', 'embedded', 'emoji', 'history'],
                      inline: {
                        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
                      },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: uploadImageCallBack,
                        alt: { present: true, mandatory: false },
                        previewImage: true,
                        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                        defaultSize: {
                          height: 'auto',
                          width: '100%',
                        },
                        alignmentEnabled: true,
                        uploadEnabled: true,
                        defaultAlign: 'center',
                        className: 'editor-image',
                        popupClassName: 'editor-image-popup',
                        urlEnabled: true,
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="categories-label">Categories</InputLabel>
                  <Select
                    labelId="categories-label"
                    multiple
                    value={selectedCategories}
                    onChange={(e) => setSelectedCategories(e.target.value)}
                    input={<OutlinedInput label="Categories" sx={{ borderRadius: 2 }} />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => {
                          const category = categories.find(c => c.id === value);
                          return (
                            <Chip
                              key={value}
                              label={category ? category.name : value}
                              sx={{
                                backgroundColor: getRandomLightColor(),
                                borderRadius: 2
                              }}
                            />
                          );
                        })}
                      </Box>
                    )}
                  >
                    {categories.map((cat) => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="tags-label">Tags</InputLabel>
                  <Select
                    labelId="tags-label"
                    multiple
                    value={selectedTags}
                    onChange={(e) => setSelectedTags(e.target.value)}
                    input={<OutlinedInput label="Tags" sx={{ borderRadius: 2 }} />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => {
                          const tag = tags.find(t => t.id === value);
                          return (
                            <Chip
                              key={value}
                              label={tag ? tag.name : value}
                              sx={{
                                backgroundColor: getRandomLightColor(),
                                borderRadius: 2
                              }}
                            />
                          );
                        })}
                      </Box>
                    )}
                  >
                    {tags.map((tag) => (
                      <MenuItem key={tag.id} value={tag.id}>
                        {tag.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFeaturedImage(file);
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        setImagePreview(reader.result);
                      }
                      reader.readAsDataURL(file);
                    } else {
                      setImagePreview(null);
                    }
                  }}
                />
                <Button
                  variant="outlined"
                  onClick={() => fileInputRef.current.click()}
                  sx={{ borderRadius: 2 }}
                >
                  Upload Featured Image
                </Button>
                {imagePreview && (
                  <Box sx={{ mt: 2, maxWidth: '100%', height: 'auto', borderRadius: 2, overflow: 'hidden' }}>
                    <img src={imagePreview} alt="Featured Preview" style={{ width: '100%', height: 'auto' }} />
                  </Box>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Keywords (comma-separated)"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ borderRadius: 2 }}
                >
                  Update Post
                </Button>
              </Grid>

              {isLoading && (
                <Grid item xs={12}>
                  <CircularProgress />
                </Grid>
              )}

              {error && (
                <Grid item xs={12}>
                  <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>
                </Grid>
              )}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PostCreate;