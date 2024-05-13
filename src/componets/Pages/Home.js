import React from 'react';
import Collapsible from './Tabs/Collapsible';
import SecondHeading from './Heading/SecondHeading';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Home = () => {
    return (
        <Tabs
            defaultActiveKey="recent"
            id="uncontrolled-tab-example"
            className="tabs-menu"
        >
            <Tab eventKey="recent" title="recent" className='content'>
                <div>recent uploaded</div>
            </Tab>
            <Tab eventKey="updates" title="updates" className='content'>
                <Collapsible label='Update' ClassesTab='content-tab-parent' ClassesBody={'content-tab p-1'}>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <div className='p-2 w-75'>
                        <SecondHeading title='Update #1'></SecondHeading>
                        <hr></hr>
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex 
                          ea commodo consequat. Duis aute irure dolor
                          in reprehenderit
                        </div>
                        <div className='content-tab-img'></div>
                    </div>
                 </Collapsible>
            </Tab>
        </Tabs>
    );
};

export default Home;