import React from 'react';

const MainHeading = ({title ,Classes}) => {
    return (
        <h1 className={Classes}>
            {title}
        </h1>
    );
};

export default MainHeading;