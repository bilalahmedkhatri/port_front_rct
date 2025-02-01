import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Button, 
  Typography, 
  Container, 
  Grid, 
  IconButton,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Chip,
  Box,
  Tooltip,
  TablePagination,
  Link,
  Skeleton,
  useMediaQuery,
  Stack,
  Card,
  CardContent,
  Popover
} from '@mui/material';
import { 
  Add as AddIcon, 
  Edit as EditIcon, 
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Search as SearchIcon,
  LocalOffer as TagIcon,
  Update as UpdateIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { ColorModeContext } from '../contexts/ThemeConfig';
import CategoryIcon from '@mui/icons-material/Category';
import Header from './Header';

function Dashboard() {
  const { currentUser } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedTags, setSelectedTags] = React.useState([]);

  // Sample data to mimic posts
  const [posts, setPosts] = React.useState([
    { 
      id: 1, 
      title: 'Getting Started with React', 
      author: 'john_doe',
      status: 'published',
      publishedDate: '2023-08-01',
      lastUpdated: '2023-08-02',
      views: 1250,
      category: 'Tutorial',
      tags: ['react', 'javascript', 'beginner']
    },
    { 
      id: 2, 
      title: 'Advanced JavaScript Concepts', 
      author: 'jane_smith',
      status: 'draft',
      publishedDate: '2023-07-28',
      lastUpdated: '2023-08-15',
      views: 850,
      category: 'Programming',
      tags: ['javascript', 'advanced', 'es6', 'javascript', 'advanced', 'es6', 'javascript', 'advanced', 'es6', 'javascript', 'advanced', 'es6']
    },
    { 
      id: 3, 
      title: 'Web Development Best Practices', 
      author: 'tech_guru',
      status: 'pending',
      publishedDate: '2023-07-25',
      lastUpdated: '2023-07-27',
      views: 2100,
      category: 'Best Practices',
      tags: ['web-dev', 'best-practices', 'coding-standards']
    },
  ].sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)));

  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [categoryFilter, setCategoryFilter] = React.useState('all');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(isMobile ? 5 : 10);

  const handleTagsClick = (event, tags) => {
    setSelectedTags(tags);
    setAnchorEl(event.currentTarget);
  };

  const handleTagsClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    // Adjust rows per page based on screen size
    setRowsPerPage(isMobile ? 5 : 10);
  }, [isMobile]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDragStart = (e, index) => {
    if (!isMobile) { // Disable drag on mobile
      e.dataTransfer.setData('text/plain', index);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    if (!isMobile) {
      const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
      const newPosts = [...posts];
      const [removed] = newPosts.splice(dragIndex, 1);
      newPosts.splice(dropIndex, 0, removed);
      setPosts(newPosts);
    }
  };

  const getStatusChipColor = (status) => {
    switch(status) {
      case 'published':
        return 'success';
      case 'draft':
        return 'warning';
      case 'pending':
        return 'info';
      default:
        return 'default';
    }
  };

  const getRandomLightColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 90%)`;
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const paginatedPosts = filteredPosts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 1 }}}>
      <Header />
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <Skeleton variant="text" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 1 }} width={200} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 3 }} width={150} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="rectangular" height={48} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="rectangular" height={48} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="rectangular" height={48} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="rectangular" height={48} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mb: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Skeleton variant="rectangular" height={56} sx={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', sm: 'auto' } }}>
                  <Skeleton variant="rectangular" width={120} height={56} />
                  <Skeleton variant="rectangular" width={120} height={56} />
                </Box>
              </Box>
              <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 1 }} />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Skeleton variant="rectangular" width={250} height={40} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            gutterBottom 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' }, 
              justifyContent: 'space-between',
              gap: 2,
              mb: 3
            }}
          >
            Dashboard
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              width: { xs: '100%', sm: 'auto' }
            }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                component={RouterLink}
                to="/create"
                fullWidth={isMobile}
                size={isMobile ? "small" : "medium"}
              >
                Create Post
              </Button>
              <Button
                variant="outlined"
                startIcon={<TagIcon />}
                component={RouterLink}
                to="/tags"
                fullWidth={isMobile}
                size={isMobile ? "small" : "medium"}
                sx={{ 
                  minWidth: isMobile ? 'auto' : '120px',
                  whiteSpace: 'nowrap'
                }}
              >
                Manage Tags
              </Button>
              <Button
                variant="outlined"
                startIcon={<CategoryIcon />}
                component={RouterLink}
                to="/category"
                fullWidth={isMobile}
                size={isMobile ? "small" : "medium"}
                sx={{ 
                  minWidth: isMobile ? 'auto' : '120px',
                  whiteSpace: 'nowrap'
                }}
              >
                Categories
              </Button>
              <IconButton onClick={toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
            Welcome, {currentUser?.username || 'Admin'}!
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ 
                mb: 3, 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2 
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                  <SearchIcon sx={{ mr: 1 }} />
                  <TextField
                    label="Search"
                    variant="outlined"
                    size={isMobile ? "small" : "medium"}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ flexGrow: 1 }}
                  />
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2,
                  flexDirection: { xs: 'row', sm: 'row' },
                  width: { xs: '100%', sm: 'auto' }
                }}>
                  <TextField
                    select
                    label="Status"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    size={isMobile ? "small" : "medium"}
                    sx={{ minWidth: { xs: '50%', sm: 120 } }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="published">Published</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                  </TextField>
                  <TextField
                    select
                    label="Category"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    size={isMobile ? "small" : "medium"}
                    sx={{ minWidth: { xs: '50%', sm: 120 } }}
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="Tutorial">Tutorial</MenuItem>
                    <MenuItem value="Programming">Programming</MenuItem>
                    <MenuItem value="Best Practices">Best Practices</MenuItem>
                  </TextField>
                </Box>
              </Box>

              <TableContainer 
                component={Paper} 
                sx={{ 
                  height: { xs: 'auto', sm: 400 },
                  maxHeight: { xs: '70vh', sm: 400 },
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  // boxShadow: '10px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)',
                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
                }}
              >
                <Table stickyHeader size={isMobile ? "small" : "medium"}>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Post Title</TableCell>
                      <TableCell>Author</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Published Date</TableCell>
                      <TableCell>Last Updated</TableCell>
                      <TableCell>Views</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Tags</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedPosts.map((post, index) => (
                      <TableRow 
                        key={post.id}
                        draggable={!isMobile && post.author === currentUser?.username}
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                        sx={{ 
                          cursor: !isMobile && post.author === currentUser?.username ? 'move' : 'default',
                          '&:hover': { backgroundColor: theme.palette.action.hover }
                        }}
                      >
                        <TableCell>
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell>
                          <Link 
                            component={RouterLink} 
                            to={`/post/${post.id}`}
                            sx={{ 
                              textDecoration: 'none', 
                              color: 'inherit',
                              '&:hover': { textDecoration: 'underline' },
                              fontSize: { xs: '0.875rem', sm: '1rem' }
                            }}
                          >
                            {post.title}
                          </Link>
                        </TableCell>
                        <TableCell>
                          {post.author}
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={post.status} 
                            color={getStatusChipColor(post.status)}
                            size={isMobile ? "small" : "medium"}
                          />
                        </TableCell>
                        <TableCell>
                          {post.publishedDate}
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <UpdateIcon fontSize="small" sx={{ mr: 0.5 }} />
                            {post.lastUpdated}
                          </Box>
                        </TableCell>
                        <TableCell>
                          {post.views}
                        </TableCell>
                        <TableCell>
                          {post.category}
                        </TableCell>
                        <TableCell>
                          <Box 
                            onClick={(e) => handleTagsClick(e, post.tags)}
                            sx={{ 
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <TagIcon fontSize="small" sx={{ mr: 0.5 }} />
                            {post.tags.length}
                          </Box>
                        </TableCell>
                        <TableCell>
                          {post.author === currentUser?.username && (
                            <IconButton 
                              size={isMobile ? "small" : "medium"}
                              component={RouterLink}
                              to={`/update/${post.id}`}
                            >
                              <EditIcon fontSize={isMobile ? "small" : "medium"} />
                            </IconButton>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleTagsClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{
                  '.MuiPopover-paper': {
                    maxWidth: '400px',
                    display: 'flex',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    boxShadow: '10px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)',
                  }
                }}
              >
                <Box sx={{ 
                  p: 1.5, 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: 0.75,
                  maxWidth: '400px',
                  '& .MuiChip-root': {
                    maxWidth: '150px'
                  }
                }}>
                  {selectedTags.map((tag, i) => (
                    <Chip 
                      key={i}
                      label={tag}
                      size="small"
                      variant="filled"
                      sx={{
                        textOverflow: 'ellipsis',
                        maxWidth: '150px',
                        backgroundColor: getRandomLightColor(),
                        color: 'text.primary'
                      }}
                    />
                  ))}
                </Box>
              </Popover>

              <TablePagination
                component="div"
                count={filteredPosts.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
                sx={{
                  '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    my: 3,
                  }
                }}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Dashboard;