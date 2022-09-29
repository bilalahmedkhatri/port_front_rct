import { TextField } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'

export default function BlogsideBarSearchButton() {
    return (
        <Box sx={{ mt: 6 }}>
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
                sx={{
                    width: "99%",
                    maxWidth: 300,
                    fontSize: 10,
                    color: grey[900],
                }}
            />
        </Box>
    )
}
