import React from 'react';

const SecondHeading = ({title, Classes}) => {
    return (
        <h2 className={Classes}>
            {title}
            <hr></hr>
        </h2>
    );
};

export default SecondHeading;