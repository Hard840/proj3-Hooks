import React from 'react';
import styleHead from './Header.module.css'
 import ph1 from './img/Photo (10).png'
 import ph2 from './img/Photo (11).png'
 import ph3 from './img/Photo (12).png'
 import ph4 from './img/Parent (2).png'
import ClickBtn from '../ClickBtn/ClickBtn';
const Header = () => {
    return (
        <div className={`${styleHead.u}`}>
       <div className="box"><img src={ph1} alt="" /></div>
       <div className="box"><img src={ph2} alt="" /></div>
       <div className="box"><img src={ph3} alt="" /></div>
       <div className="box"><img src={ph4} alt="" /></div>
        <ClickBtn/>
        </div>

    );
}

export default Header;
