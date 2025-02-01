import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
} from '@mui/material';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import api from '../services/api';

function PostUpdate() {
  const { slug } = useParams();
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [category, setCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.getPost(slug);
        const postData = response.data;

        setTitle(postData.title);
        setCategory(postData.category?.id || '');
        setSelectedTags(postData.tags.map((tag) => tag.id));
        setMetaTitle(postData.meta_title || '');
        setMetaDescription(postData.meta_description || '');
        setKeywords(postData.keywords || '');

        // Convert HTML content to Draft.js content
        if (postData.content) {
          const blocksFromHtml = htmlToDraft(postData.content);
          const { contentBlocks, entityMap } = blocksFromHtml;
          const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
          const newEditorState = EditorState.createWithContent(contentState);
          setEditorState(newEditorState);
        } else {
          setEditorState(EditorState.createEmpty());
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [slug]);

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTagChange = (event) => {
    setSelectedTags(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFeaturedImage(file);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contentState = editorState.getCurrentContent();
    const content = draftToHtml(convertToRaw(contentState));

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    selectedTags.forEach((tagId) => {
      formData.append('tags', tagId);
    });
    if (featuredImage) {
      formData.append('featured_image', featuredImage);
    }
    formData.append('meta_title', metaTitle);
    formData.append('meta_description', metaDescription);
    formData.append('keywords', keywords);

    try {
      await api.updatePost(slug, formData);
      navigate(`/post/${slug}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Update Post
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="editor-wrapper"
            editorClassName="editor-class"
            toolbarClassName="editor-toolbar"
            placeholder="Write your content here..."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
            >
              {/* Replace with actual categories fetched from the API */}
              <MenuItem value={1}>Technology</MenuItem>
              <MenuItem value={2}>Science</MenuItem>
              {/* ... other categories */}
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
              onChange={handleTagChange}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={`Tag ${value}`} />
                  ))}
                </Box>
              )}
            >
              {/* Replace with actual tags fetched from the API */}
              <MenuItem value={1}>Tech</MenuItem>
              <MenuItem value={2}>AI</MenuItem>
              {/* ... other tags */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
          <Button variant="outlined" onClick={handleImageClick}>
            Upload Featured Image
          </Button>
          {featuredImage && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected: {featuredImage.name}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Meta Title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Meta Description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            multiline
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Keywords (comma-separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Update Post
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default PostUpdate;