import React from 'react';

const GitHubCatLogo = () => {
    const githubLink = 'https://github.com/melission/react-router-demo';

    const openGitHubLink = () => {
        window.open(githubLink, '_blank');
    };

    return (
        <div className='grid grid-cols-2' onClick={openGitHubLink}>
            <div>
                <img
                    src="https://octodex.github.com/images/original.png"
                    alt="GitHub Cat Logo"
                    style={{ cursor: 'pointer', width: '100px' }}
                />
            </div>
            <div className='self-center'>The code of the project is here</div>
        </div>
    );
};

export default GitHubCatLogo;
