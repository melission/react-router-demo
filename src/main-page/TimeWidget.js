import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyledClocks = styled(Paper)(({ theme }) => ({
    backgroundImage: theme.palette.mode === 'dark'
        ? 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
        : 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
    ...theme.typography.h3,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Make the Paper component take the full height of its parent
}));

const TimeWidget = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update the time every second

        return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div className='grid h-full'>
            <StyledClocks>{formattedTime}</StyledClocks>
        </div>
    );
};

export default TimeWidget;
