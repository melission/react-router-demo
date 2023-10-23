import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StyledItem from "./StyledItem";

const ResourceBlock = () => {
    const desc = 'The site was created using following resources: '
    const resourceList = ['https://www.flaticon.com/free-stickers/', 'https://chat.openai.com/']
    return (
        <Box>
            {desc}
            <Stack spacing={2}>
                {resourceList.map((resource) => (
                    <StyledItem>{resource}</StyledItem>
                ))}
            </Stack>
        </Box>
    )
}

export default ResourceBlock