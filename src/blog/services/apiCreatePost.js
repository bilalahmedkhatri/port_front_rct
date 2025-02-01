import api from './api';

/**
 * Creates a new blog post with the provided data
 * @param {FormData} formData - FormData object containing:
 *   - title: string
 *   - content: string (JSON stringified Draft.js content)
 *   - category: number (category ID)
 *   - tags: array of numbers (tag IDs)
 *   - featured_image: File object (optional)
 *   - keywords: string (comma-separated)
 * @returns {Promise} Response from the API
 */
export const createPost = async (formData) => {
  try {
    const response = await api.post('/posts/create/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for file upload
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

/**
 * Uploads an image for the post editor
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<{url: string}>} The URL of the uploaded image
 */
export const uploadEditorImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await api.post('/upload-image/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default {
  createPost,
  uploadEditorImage,
}; 