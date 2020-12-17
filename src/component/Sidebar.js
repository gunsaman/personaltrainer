import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Customers',
        path:'/customers',
        icon: <IoIcons.IoMdPeople/>,
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
        icon: <AiIcons.AiFillCalendar/>,
        cName:'nav-text'
    },
    {
        title:'Statistics',
        path:'/statistics',
        icon: <IoIcons.SidebarData/>,
        cName:'nav-text'
    }
]