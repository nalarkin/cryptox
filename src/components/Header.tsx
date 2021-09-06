import React from 'react'
import { v4 as uuidv4 } from 'uuid';
// import HeaderTitle from './HeaderTitle';
// import LinkGroup from './LinkGroup';
import {LinkGroup, HeaderTitle} from './index';


export default function Header() {
    const linkGroupProps = [
        {
            key: uuidv4(),
            text: 'Home',
            location: '',
            size: 'X-Small',
            additionalClassNames: 'header-link'
        },
        {
            key: uuidv4(),
            text: 'History',
            location: 'history',
            size: 'X-Small',
            additionalClassNames: 'header-link'
        },
        {
            key: uuidv4(),
            text: 'Compare',
            location: 'compare',
            size: 'X-Small',
            additionalClassNames: 'header-link'
        },
        {
            key: uuidv4(),
            text: 'About',
            location: 'about',
            size: 'X-Small',
            additionalClassNames: 'header-link'
        },
    ]
    return (
        <header id='app-header'>
            <div id='app-header-title'>
                <HeaderTitle 
                    title='Cryptox' 
                />
            </div>
            
            <div className='header-link-container'>
                <LinkGroup
                    title=''
                    childrenLinkProps={linkGroupProps}
                    additionalClasses='header-link-list'
                />
            </div>
           
            
        </header>
    )
}
