import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { CgMenu} from "react-icons/cg";
import Banner from './componets/Pages/Banner';
import SideMenu from './componets/Nav/SideMenu';
import Home from './componets/Pages/Home';
import Comics from './componets/Pages/Comics';
import Characters from './componets/Pages/Characters';
import Socials from './componets/Pages/Socials';
import Blog from './componets/Pages/Blog';
import Error from './componets/Pages/Error';

const App = () => {
    let buttonsGroup=['book','scroll']
    let buttonsMenu=[
      {id:1,title:'home'},
      {id:2,title:'comics'},
      {id:3,title:'characters'},
      {id:4,title:'socials'},
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
        <BrowserRouter>
            <Container>
                <Row className='m-0'>
                <SideMenu buttonsGroup={buttonsGroup} buttonsMenu={buttonsMenu} setBtn={setBtn} activeBtn={activeBtn} ToggleMenu={ToggleMenu} MenuShow={MenuShow}></SideMenu>
                    <Col xs={12} className='main'>
                        <Banner title='Campfire tales' Classes={'banner'} SecondClasses='BannerHeading'>
                            <div className='text-start'>
                            <CgMenu className={MenuShow? 'invisible icon-open':'visible icon-open'} data-toggle='open' onClick={ToggleMenu}/>
                            </div>
                        </Banner>
                        <Routes>
                            <Route path = '/' element={<Home></Home>}></Route>
                            <Route path = '/home' element={<Home></Home>}></Route>
                            <Route path = '/comics' element={<Comics></Comics>}></Route>
                            <Route path = '/characters' element={<Characters></Characters>}></Route>
                            <Route path = '/socials' element={<Socials></Socials>}></Route>
                            <Route path = '/blog' element={<Blog></Blog>}></Route>
                            <Route path = '*' element={<Error></Error>}></Route>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
};

export default App;