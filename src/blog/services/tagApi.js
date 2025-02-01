import api from './api';

// List all tags
export const listTags = async () => {
  try {
    const response = await api.getTags();
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching tags:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch tags'
    };
  }
};

// Create a new tag
export const createTag = async (tagData) => {
  try {
    const response = await api.createTag(tagData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error creating tag:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to create tag'
    };
  }
};

// Update an existing tag
export const updateTag = async (tagId, tagData) => {
  try {
    const response = await api.updateTag(tagId, tagData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error updating tag:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to update tag'
    };
  }
};

// Delete a tag
export const deleteTag = async (tagId) => {
  try {
    await api.deleteTag(tagId);
    return {
      success: true
    };
  } catch (error) {
    console.error('Error deleting tag:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to delete tag'
    };
  }
};

// Example usage:
// const tagData = {
//   name: "Technology" // This will automatically generate a slug on the backend
// };
// 
// // List tags
// const tags = await listTags();
// 
// // Create tag
// const newTag = await createTag(tagData);
// 
// // Update tag
// const updatedTag = await updateTag(1, { name: "Updated Technology" });
// 
// // Delete tag
// const deleteResult = await deleteTag(1); 