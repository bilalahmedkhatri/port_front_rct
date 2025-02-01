import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Skeleton,
  InputAdornment,
  Stack,
  Tooltip
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon, Search as SearchIcon } from '@mui/icons-material';
import { createCategory, updateCategory, listCategory, deleteCategory } from '../services/apiCategory';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const response = await listCategory();
    if (response.success) {
      setCategories(response.data);
      setError(null);
    } else {
      setError(response.error);
    }
    setLoading(false);
  };

  const handleOpenDialog = (category = null) => {
    setSelectedCategory(category);
    setCategoryName(category ? category.name : '');
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCategory(null);
    setCategoryName('');
  };

  const handleSubmit = async () => {
    if (!categoryName.trim()) {
      setSnackbar({
        open: true,
        message: 'Category name cannot be empty',
        severity: 'error'
      });
      return;
    }

    const response = selectedCategory
      ? await updateCategory(selectedCategory.id, { name: categoryName })
      : await createCategory({ name: categoryName });

    if (response.success) {
      setSnackbar({
        open: true,
        message: `Category ${selectedCategory ? 'updated' : 'created'} successfully`,
        severity: 'success'
      });
      handleCloseDialog();
      fetchCategories();
    } else {
      setSnackbar({
        open: true,
        message: response.error,
        severity: 'error'
      });
    }
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      const response = await deleteCategory(categoryId);
      if (response.success) {
        setSnackbar({
          open: true,
          message: 'Category deleted successfully',
          severity: 'success'
        });
        fetchCategories();
      } else {
        setSnackbar({
          open: true,
          message: response.error,
          severity: 'error'
        });
      }
    }
  };

  const parseSearchTerm = (term) => {
    const match = term.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, field, value] = match;
      return { field, value: value.toLowerCase() };
    }
    return { field: 'name', value: term.toLowerCase() };
  };

  const filteredCategories = categories.filter(category => {
    const { field, value } = parseSearchTerm(searchTerm);
    
    switch(field) {
      case 'name':
        return category.name.toLowerCase().includes(value);
      case 'slug':
        return category.slug.toLowerCase().includes(value);
      case 'username':
        return category.created_by_name?.toLowerCase().includes(value);
      default:
        return category.name.toLowerCase().includes(value);
    }
  });

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Skeleton variant="text" width={100} height={40} />
          <Skeleton variant="rectangular" width={120} height={40} />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell align="right"><Skeleton variant="text" /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3].map((item) => (
                <TableRow key={item}>
                  <TableCell><Skeleton variant="text" /></TableCell>
                  <TableCell><Skeleton variant="text" /></TableCell>
                  <TableCell><Skeleton variant="text" /></TableCell>
                  <TableCell align="right">
                    <Skeleton variant="circular" width={40} height={40} sx={{ display: 'inline-block', mr: 1 }} />
                    <Skeleton variant="circular" width={40} height={40} sx={{ display: 'inline-block' }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box sx={{ p: 3, mb: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Categories
        </Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="Search using format 'field: value' (e.g., name: blog, slug: tech, username: john)" arrow>
            <TextField
              size="small"
              placeholder="Search (e.g., name: Category)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Tooltip>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Add New Category
          </Button>
        </Stack>
      </Box>

      <TableContainer component={Paper}
      sx={{ 
        height: { xs: 'auto', sm: 400 },
        maxHeight: { xs: '500vh', sm: 400 },
        borderRadius: 5,
        border: '1px solid #e0e0e0',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
      }}
      >
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: '#f0f0f0' }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>count</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ 
            '&::-webkit-scrollbar': {
              width: '8px'
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '10px',
              '&:hover': {
                background: '#555'
              }
            }
          }}>
            {filteredCategories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.created_by_name}</TableCell>
                <TableCell>{category.slug}</TableCell>
                <TableCell>{category.count}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpenDialog(category)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(category.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Create/Edit */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedCategory ? 'Edit Category' : 'Create New Category'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {selectedCategory ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CategoryList;