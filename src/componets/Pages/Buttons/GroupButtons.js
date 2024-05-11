import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//<Button key={"btn-group-2"} variant="secondary">Scroll</Button>
const GroupButtons = ({btnTitles, classNames,btnClass,page}) => {
    const [activeBtn,setActivebtn]=useState('book')
    function setBtn(event){
        setActivebtn(event.target.innerHTML)
    }
    return (
        <ButtonGroup className={classNames} >
            {
                btnTitles.map((title,index)=>{
                    if(page!=='comics'){
                            return <Button key={"btn-group-"+index} className={btnClass} onClick={(event)=> setBtn(event)} disabled>{title}</Button>
                    }
                    else{
                        if(title===activeBtn){
                            return <Button key={"btn-group-"+index} className={btnClass+' active'} onClick={(event)=> setBtn(event)}>{title}</Button>
                       }
                       else{
                            return <Button key={"btn-group-"+index} className={btnClass} onClick={(event)=> setBtn(event)}>{title}</Button>
                       }
                    }
                })
            }
            
            
        </ButtonGroup>
    );
};

export default GroupButtons;