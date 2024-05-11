import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import MainHeading from '../Pages/Heading/MainHeading';
import {CgCloseR } from "react-icons/cg";
import GroupButtons from '../Pages/Buttons/GroupButtons';
import Collapse from 'react-bootstrap/Collapse';
//style={{ minHeight: '150px' }}
const SideMenu = ({buttonsMenu,setBtn,activeBtn,ToggleMenu,MenuShow,buttonsGroup}) => {
    return (
            <Collapse in={MenuShow} dimension="width">
                <div className='menu'>
                    <div>
                        <div className='text-end'>
                            <CgCloseR className='icon-close m-1' data-toggle='close' onClick={ToggleMenu}/>
                        </div>
                        <MainHeading Classes='menuHeading' title='menu'/>
                        <hr></hr>
                    {
                        buttonsMenu.map((btn,index)=>{
                            if(btn.title === activeBtn){
                                return <div className={''}><Button key={"btn-menu-"+index} className={'btn-menu active'} onClick={(event)=> setBtn(event)}>{btn.title}</Button></div>
                            }
                            else{
                                return <div className={''}><Button key={"btn-menu-"+index} className={'btn-menu'} onClick={(event)=> setBtn(event)}>{btn.title}</Button></div>
                            }
                        })
                    }
                    </div>
                    <GroupButtons btnTitles={buttonsGroup} classNames='' btnClass='btn-group-menu' page={activeBtn}/>
                </div>
            </Collapse>
    );
};

export default SideMenu;