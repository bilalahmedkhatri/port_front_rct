import React, { useState, useEffect } from 'react';
import { listTags, deleteTag } from '../services/tagApi';
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
  Skeleton
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import { createTag, updateTag } from '../services/tagApi';

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tagName, setTagName] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Fetch tags on component mount
  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    setLoading(true);
    const response = await listTags();
    if (response.success) {
      setTags(response.data);
      setError(null);
    } else {
      setError(response.error);
    }
    setLoading(false);
  };

  const handleOpenDialog = (tag = null) => {
    setSelectedTag(tag);
    setTagName(tag ? tag.name : '');
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTag(null);
    setTagName('');
  };

  const handleSubmit = async () => {
    if (!tagName.trim()) {
      setSnackbar({
        open: true,
        message: 'Tag name cannot be empty',
        severity: 'error'
      });
      return;
    }

    const response = selectedTag
      ? await updateTag(selectedTag.id, { name: tagName })
      : await createTag({ name: tagName });

    if (response.success) {
      setSnackbar({
        open: true,
        message: `Tag ${selectedTag ? 'updated' : 'created'} successfully`,
        severity: 'success'
      });
      handleCloseDialog();
      fetchTags();
    } else {
      setSnackbar({
        open: true,
        message: response.error,
        severity: 'error'
      });
    }
  };

  const handleDelete = async (tagId) => {
    if (window.confirm('Are you sure you want to delete this tag?')) {
      const response = await deleteTag(tagId);
      if (response.success) {
        setSnackbar({
          open: true,
          message: 'Tag deleted successfully',
          severity: 'success'
        });
        fetchTags();
      } else {
        setSnackbar({
          open: true,
          message: response.error,
          severity: 'error'
        });
      }
    }
  };

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
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Tags
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add New Tag
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>count</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags.map((tag) => (
              <TableRow key={tag.id}>
                <TableCell>{tag.name}</TableCell>
                <TableCell>{tag.slug}</TableCell>
                <TableCell>{tag.count}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpenDialog(tag)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(tag.id)}>
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
          {selectedTag ? 'Edit Tag' : 'Create New Tag'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Tag Name"
            fullWidth
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {selectedTag ? 'Update' : 'Create'}
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

export default TagList;