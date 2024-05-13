import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import MainHeading from '../Pages/Heading/MainHeading';
import {CgCloseR } from "react-icons/cg";
import GroupButtons from '../Pages/Buttons/GroupButtons';
import Collapse from 'react-bootstrap/Collapse';
import {Link} from 'react-router-dom'
//style={{ minHeight: '150px' }}
const SideMenu = ({buttonsMenu,setBtn,activeBtn,ToggleMenu,MenuShow,buttonsGroup}) => {
    return (
            <Collapse in={MenuShow} dimension="width">
                <div key='menu-div' className='menu'>
                    <div key={'menudiv-1'}>
                        <div key='div-icon' className='text-end'>
                            <CgCloseR key='close-icon' className='icon-close m-1' data-toggle='close' onClick={ToggleMenu}/>
                        </div>
                        <MainHeading Classes='menuHeading' key='heading-1' title='menu'/>
                        <hr></hr>
                    {
                        
                        buttonsMenu.map((btn,index)=>{
                            if(btn.title === activeBtn){
                                return <div className={''}><Link to={'/'+btn.title}><Button key={"btn-menu-"+index} className={'btn-menu active_'} onClick={(event)=> setBtn(event)}>{btn.title}</Button></Link></div>
                            }
                            else{
                                return <div className={''}><Link to={'/'+btn.title}><Button key={"btn-menu-"+index} className={'btn-menu'} onClick={(event)=> setBtn(event)}>{btn.title}</Button></Link></div>
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