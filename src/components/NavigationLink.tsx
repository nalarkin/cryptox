import React from 'react'
import { Link } from "react-router-dom";

type NavigationLinkProps = {
    text: string,
    location: string,
    size: string,
    additionalClassNames?: string,
}


export default function NavigationLink({text, location, size, additionalClassNames}: NavigationLinkProps) {
    // const classesForLink = `linkText ${size}`;
    return (
        <Link to={`/${location}`}
            className={`nav-link ${size} ${additionalClassNames ? additionalClassNames : ''}`}>
            {text}
        </Link>
    );
}
