import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors'


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        backgroundColor: green[theme.palette.mode === 'light' ? 500 : 300],
    },
}));

function LinearProgressWithLabel(props) {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '80%', align:"right" }}>
                    <Typography variant="body2" fontWeight={600} paddingLeft="1px" color="text.secondary">
                        {props.language}
                    </Typography>
                </Box>
                <Box sx={{ width: '20%', align:"left" }}>
                    <Typography variant="body2" fontWeight={600} color="text.secondary" align="right">
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%',}}>
                    <BorderLinearProgress variant="determinate" {...props} />
                </Box>
            </Box>
        </>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

// stoping pregressBar for increase of limit
let x = 0

export default function ProgressBar2({ language, stopValue, timeRange }) {
    const [progress, setProgress] = React.useState(0);

    x = progress
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 1));
            if (x === stopValue) {
                clearInterval(timer)
            };
        }, timeRange);
    }, []);
    return (
        <Box sx={{ width: '100%', mb: 1 }} >
            <LinearProgressWithLabel value={progress} language={language} />
        </Box>
    );
}
