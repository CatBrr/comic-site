import React from 'react';
import Alert from 'react-bootstrap/Alert';
import SecondHeading from './Heading/SecondHeading';

const Error = () => {
    return (
        <Alert key={'erroe'} variant={'danger'} className='m-2 alert-span-danger'>
            <SecondHeading title={'Oops! ˙◠˙'}></SecondHeading>
            No such page has been found
        </Alert>
    );
};

export default Error;