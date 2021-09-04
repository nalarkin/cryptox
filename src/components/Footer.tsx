import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import FooterCompany from './FooterCompany';
import LinkGroup from './LinkGroup';


export default function Footer() {
    const linkGroupProps = [
        {
            key: uuidv4(),
            text: 'Home',
            location: '',
            size: 'X-Small',
        },
        {
            key: uuidv4(),
            text: 'History',
            location: 'history',
            size: 'X-Small',
        },
        {
            key: uuidv4(),
            text: 'Compare',
            location: 'compare',
            size: 'X-Small',
        },
        {
            key: uuidv4(),
            text: 'About',
            location: 'about',
            size: 'X-Small',
        },
    ]
    return (
        <footer>
            <FooterCompany 
                company='company' 
                content='content'
            />
            <LinkGroup
                title='Link Group Title'
                childrenLinkProps={linkGroupProps}
            />
        </footer>
    )
}
