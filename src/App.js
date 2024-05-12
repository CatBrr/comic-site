import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import React, { useState } from 'react';
import { CgMenu} from "react-icons/cg";
import Banner from './componets/Pages/Banner';
import Collapsible from './componets/Pages/Tabs/Collapsible';
import SecondHeading from './componets/Pages/Heading/SecondHeading';
import SideMenu from './componets/Nav/SideMenu';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function App() {
  let buttonsGroup=['book','scroll']
  let buttonsMenu=[
    {id:1,title:'home'},
    {id:2,title:'comics'},
    {id:3,title:'info'},
    {id:4,title:'My socials'},
    {id:5,title:'blog'}
  ]
  const [activeBtn,setActivebtn]=useState('home')
  const [MenuShow, SetMenuShow]=useState(false)
  function setBtn(event){
      setActivebtn(event.target.innerHTML)
  }
  function ToggleMenu(){
    if(MenuShow){
      SetMenuShow(false)
    }
    else{
      SetMenuShow(true)
    }
    console.log(MenuShow);
  }
  return (
    <Container>
       <Row className='m-0'>
       <SideMenu buttonsGroup={buttonsGroup} buttonsMenu={buttonsMenu} setBtn={setBtn} activeBtn={activeBtn} ToggleMenu={ToggleMenu} MenuShow={MenuShow}></SideMenu>
        <Col xs={12} className='main'>
              <Banner title='Campfire tales' Classes={'banner'} SecondClasses='BannerHeading'>
                <div className='text-start'>
                  <CgMenu className={MenuShow? 'invisible icon-open':'visible icon-open'} data-toggle='open' onClick={ToggleMenu}/>
                </div>
              </Banner>
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
         </Col>
      </Row>
    </Container>
    
  );
}

export default App;
