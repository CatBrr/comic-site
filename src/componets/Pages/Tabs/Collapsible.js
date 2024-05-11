import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Collapsible = ({label,ClassesBody,ClassesTab,children}) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button className={open? 'opened '+ClassesTab:ClassesTab} onClick={() => setOpen(!open)}>
                {label}
            </Button>
            <Collapse in={open}>
                <div className={ClassesBody}>
                {children}
                </div>
            </Collapse>
        </div>
    );
};

export default Collapsible;