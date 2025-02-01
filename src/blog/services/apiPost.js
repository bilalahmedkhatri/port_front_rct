import api from './api';

// get SinglePost
export const SinglePost = async (slug) => {
  try {
    const response = await api.getPost(slug);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching Posts:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch Posts'
    };
  }
};

// List all Posts
export const listPost = async () => {
  try {
    const response = await api.getPosts();
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching Posts:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch Posts'
    };
  }
};

// Create a new Post
export const createPost = async (tagData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const dataWithUser = {
      ...tagData,
      created_by: user.id
    };
    const response = await api.createPost(dataWithUser);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error creating Post:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to create Post'
    };
  }
};

// Update an existing Post
export const updatePost = async (tagId, tagData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const dataWithUser = {
      ...tagData,
      created_by: user.id
    };
    const response = await api.updatePost(tagId, dataWithUser);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error updating Post:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to update Post'
    };
  }
};

// Delete a Post
export const deletePost = async (tagId) => {
  try {
    await api.deletePost(tagId);
    return {
      success: true
    };
  } catch (error) {
    console.error('Error deleting Post:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to delete Post'
    };
  }
};

// Example usage:
// Single Post define a slug to get the blog post
// const getSinglePost = await SinglePost("new-tools-to-help-retailers-build-gen-ai-search-and-agents");
// console.log(getSinglePost);
// 
// // Create tag
// const newTag = await createTag(tagData);
// 
// // Update tag
// const updatedTag = await updateTag(1, { name: "Updated Technology" });
// 
// // Delete tag
// const deleteResult = await deleteTag(1); 