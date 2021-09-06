import React from 'react'
import { NavLink } from "react-router-dom";
import { NavigationLinkProps } from '../interfaces';


export default function NavigationLink({text, location, size, additionalClassNames}: NavigationLinkProps) {
    const classesForLink = `nav-link ${size}${additionalClassNames ? ` ${additionalClassNames}` : ''}`;

    return (
        <NavLink 
            exact
            to={`/${location}`}
            activeClassName='selected'
            className={classesForLink + ' hover:text-yellow-500'}
            activeStyle={{
                // color: "yellow"
            }}>
            {text}
        </NavLink>
    );
}
