import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import api from '../services/api';

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.getPost(slug);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Divider sx={{ my: 4 }} />
      <Typography variant="subtitle1" color="text.secondary">
        Published on {new Date(post.created_at).toLocaleDateString()}
      </Typography>
    </div>
  );
}

export default PostDetail;