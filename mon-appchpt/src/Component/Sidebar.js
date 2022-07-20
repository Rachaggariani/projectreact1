import './side.css';
import React from 'react';
import {FaUserAlt} from 'react-icons/fa';
import { BsBriefcase} from 'react-icons/bs';
import { AiOutlinePlus} from 'react-icons/ai';
function Sidebar(){
    return(
    <div className="side">
        <div className="bloc">
            <h1 className="title">
        
            <FaUserAlt/>users
            </h1>
        <h1 className="title">
            <BsBriefcase/>Case
            </h1>
        <h1 className="title">
            <AiOutlinePlus/>Plus User</h1>
        </div>
        
    </div>
    )
}
export default Sidebar