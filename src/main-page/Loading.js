import React, { useState, useEffect } from 'react';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

function Loader() {
    const [loadingState, setLoadingState] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingState((loadingState + 1) % 3);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [loadingState]);

    const renderIcon = () => {
        switch (loadingState) {
            case 0:
                return <HourglassEmptyIcon />;
            case 1:
                return <HourglassTopIcon />;
            case 2:
                return <HourglassBottomIcon />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Loading...</h2>
            {renderIcon()}
        </div>
    );
}

export default Loader;
