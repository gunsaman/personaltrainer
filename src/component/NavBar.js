import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {BsFillPersonFill} from 'react-icons/bs';
import { GiMuscleUp } from "react-icons/gi";
import './Navbar.css';
import {IconContext} from 'react-icons'


export default function NavBar() {

    const [sidebar, setSidebar] = useState(false);
    const SidebarData = [

        {
            title:'Home',
            path:'/',
            icon: <AiIcons.AiFillHome/>,
            cName:'nav-text'
        },
        {
            title:'Customers',
            path:'/customers',
            icon: <BsFillPersonFill/>,
            cName:'nav-text'
        },
        {
            title:'Trainings',
            path:'/training',
            icon: <IoIcons.IoMdFitness/>,
            cName:'nav-text'
        },
        {
            title:'Calendar',
            path:'/calendar',
            icon: <IoIcons.IoMdCalendar/>,
            cName:'nav-text'
        },
        {
            title:'Statistics',
            path:'/statistics',
            icon: <IoIcons.IoMdStats/>,
            cName:'nav-text'
        }
    ]

    const showSidebar =()=> {
        setSidebar(!sidebar)
    }
    return (        
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="navbar">
            
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
                
            </Link>
            
             
             <h1 style={{margin:'200px', color:'white'}} ><GiMuscleUp style={{color:'green'}} /> Peronal Trainer</h1>
            
        </div>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
        
        </IconContext.Provider>
      
        </>
        
    )
}