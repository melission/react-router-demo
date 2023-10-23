import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StyledItem from './StyledItem';
import Loader from './Loading';


function UselessFactWidget() {
    const [fact, setFact] = useState('');
    const [factTime, setFactTime] = useState('');
    const [factIsLoaded, setFactIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then((response) => response.json())
            .then((data) => {
                setFactIsLoaded(true)
                setFact(data.text);
                setFactTime(new Date());
            });
    }, []);

    return (
        <Container >
            <Stack>
                {!factIsLoaded && <StyledItem><Loader /></StyledItem>}
                <StyledItem>
                    {fact}
                </StyledItem>
            </Stack>
        </Container >
    );
}

export default UselessFactWidget;
