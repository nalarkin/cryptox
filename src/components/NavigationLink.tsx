import React from 'react'
import { NavLink } from "react-router-dom";
import { NavigationLinkProps } from '../interfaces';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
        
    }

    &:hover {
        color: green
    }
`;



export default function NavigationLink({text, location, size, additionalClassNames}: NavigationLinkProps) {
    const classesForLink = `nav-link ${size}${additionalClassNames ? ` ${additionalClassNames}` : ''}`;

    return (
        <StyledNavLink 
            exact
            to={`/${location}`}
            activeClassName='selected'
            className={classesForLink}
            activeStyle={{
                color: "yellow"
            }}>
            {text}
        </StyledNavLink>
    );
}
