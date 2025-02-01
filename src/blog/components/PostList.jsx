import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from '@mui/material';
import api from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
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
                  {post.meta_description.length > 150
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

export default PostList;