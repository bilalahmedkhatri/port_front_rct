import api from './api';

// List all tags
export const listCategory = async () => {
  try {
    const response = await api.getcategory();
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching Categories:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch Categories'
    };
  }
};

// Create a new tag
export const createCategory = async (tagData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const dataWithUser = {
      ...tagData,
      created_by: user.id
    };
    const response = await api.createCategory(dataWithUser);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error creating Category:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to create Category'
    };
  }
};

// Update an existing tag
export const updateCategory = async (tagId, tagData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const dataWithUser = {
      ...tagData,
      created_by: user.id
    };
    const response = await api.updateCategory(tagId, dataWithUser);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error updating Category:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to update Category'
    };
  }
};

// Delete a tag
export const deleteCategory = async (tagId) => {
  try {
    await api.deleteCategory(tagId);
    return {
      success: true
    };
  } catch (error) {
    console.error('Error deleting Category:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to delete Category'
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