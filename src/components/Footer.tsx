import React from 'react'
import { v4 as uuidv4 } from 'uuid';
// import FooterAuthor from './FooterAuthor';
// import FooterCompany from './FooterCompany';
// import LinkGroup from './LinkGroup';
import { FooterAuthor, FooterCompany, LinkGroup } from './index';


export default function Footer() {
    const linkGroupProps = [
        {
            key: uuidv4(),
            text: 'Home',
            location: '',
            size: 'X-Small',
            additionalClassNames: 'footer-link'
        },
        {
            key: uuidv4(),
            text: 'History',
            location: 'history',
            size: 'X-Small',
            additionalClassNames: 'footer-link'
        },
        {
            key: uuidv4(),
            text: 'Compare',
            location: 'compare',
            size: 'X-Small',
            additionalClassNames: 'footer-link'
        },
        {
            key: uuidv4(),
            text: 'About',
            location: 'about',
            size: 'X-Small',
            additionalClassNames: 'footer-link'
        },
    ]
    return (
        <footer>
            <FooterCompany 
                company='Cryptox' 
                content=''
            />
            <div className='footer-link-container'>
                <LinkGroup
                    title='Links'
                    childrenLinkProps={linkGroupProps}
                    additionalClasses='footer-link-list'
                />
            </div>
            
            <FooterAuthor />
        </footer>
    )
}
