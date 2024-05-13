import React from 'react';
import Collapsible from './Tabs/Collapsible';
import SecondHeading from './Heading/SecondHeading';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ImageList from './Block/ImageList';

const Home = () => {
    let recent_comics=[
        {
            id:1,
            title:'comic title1',
            desc:'silly billies doing some shit',
            tags:['SFW','scyde','silly', 'goober media','yippee'],
            cover:'https://picsum.photos/id/237/150/200'
        },
        {
            id:2,
            title:'comic title2',
            desc:'silly billies  not doing some shit',
            tags:['suggestive','scyde','*dramatic poof*', 'goober media','corn'],
            cover:'https://picsum.photos/id/137/150/200'
        },
        {
            id:3,
            title:'comic title3',
            desc:'silly billies doing some smart shit',
            tags:['SFW','scyde','NOTsilly', 'smartass media','NOTyippee'],
            cover:'https://picsum.photos/id/27/150/200'
        },
        {
            id:4,
            title:'comic title4',
            desc:'0-0',
            tags:['NSFW','scyde','men kisser', 'scydeworlddom','yippee'],
            cover:'https://picsum.photos/id/23/150/200'
        },
        {
            id:5,
            title:'comic title5',
            desc:'meat meat meat meat meat',
            tags:['vore','gore','DAMN', 'yummy','meat'],
            cover:'https://picsum.photos/id/37/150/200'
        },
        {
            id:6,
            title:'comic title6',
            desc:'cant let gang know i fw this shit',
            tags:['SFW','crott','gawd damn', 'AAAAAAAAHH','nah'],
            cover:'https://picsum.photos/id/7/150/200'
        }
    ]
    return (
        <Tabs
            defaultActiveKey="recent"
            id="uncontrolled-tab-example"
            className="tabs-menu "
        >
            <Tab eventKey="recent" title="recent" className='content'>
                <SecondHeading title='Recent Uploaded' Classes={'second-heading'}></SecondHeading>
                <ImageList recent_comics={recent_comics}></ImageList>
            </Tab>
            <Tab eventKey="updates" title="updates" className='content'>
                <Collapsible label='Update' ClassesTab='content-tab-parent' ClassesBody={'content-tab p-1'}>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <div className='p-2 w-75'>
                        <SecondHeading title='Update #1' Classes={'second-heading'}></SecondHeading>
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