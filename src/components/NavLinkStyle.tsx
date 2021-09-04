import React from 'react'
import { NavLink } from "react-router-dom";
import { NavigationLinkProps } from '../interfaces';
import '../style/NavigationLink.css';

interface props {
    component: React.Component,
    
}


export default function NavLinkStyle({text, location, size, additionalClassNames}: props) {
    const classesForLink = `nav-link ${size}${additionalClassNames ? ` ${additionalClassNames}` : ''}`;

    return (
        <NavLink 
            to={`/${location}`}
            activeClassName='selected'
            className={classesForLink}
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>
            {text}
        </NavLink>
    );
}
