import Hamburger from 'hamburger-react'
import { useState } from 'react';
import React from 'react';


export const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return(
        <Hamburger toggled={isOpen} toggle={setOpen}/>
    );
}