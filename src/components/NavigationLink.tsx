import React from 'react'
import { Link } from "react-router-dom";
import { NavigationLinkProps } from '../interfaces';




export default function NavigationLink({text, location, size, additionalClassNames}: NavigationLinkProps) {
    const classesForLink = `nav-link ${size}${additionalClassNames ? ` ${additionalClassNames}` : ''}`;

    return (
        <Link to={`/${location}`}
            className={classesForLink}>
            {text}
        </Link>
    );
}
