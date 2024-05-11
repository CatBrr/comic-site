import React from 'react';
import MainHeading from './Heading/MainHeading';

const Banner = ({title,Classes,children,SecondClasses}) => {
    return (
        <div className={Classes}>
            {children}
            <MainHeading title={title} Classes={SecondClasses}/>
        </div>
    );
};

export default Banner;