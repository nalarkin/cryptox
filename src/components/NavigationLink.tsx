import React from 'react'
import { NavLink } from "react-router-dom";
import { NavigationLinkProps } from '../interfaces';
import '../style/NavigationLink.css';




export default function NavigationLink({text, location, size, additionalClassNames}: NavigationLinkProps) {
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
