import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { BlogSideBar, Blog } from '../component';
import { BlogNavBar }  from '../component';
import '../component/custom.css'


const tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
];

const footers = [
    {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
];

function PricingContent() {
    return (
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <BlogNavBar />
            <Container maxWidth='lg' disableGutters component="main" sx={{ py:4 }}>
                <Grid container >
                    <Grid item xs={12} sm={12} md={8} lg={9} >
                        <Blog />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={3}>
                        <BlogSideBar />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default function SingleBlogPage() {
    return <PricingContent />;
}