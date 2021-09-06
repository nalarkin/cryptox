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
            additionalClassNames: 'footer-link w-min'
        },
        {
            key: uuidv4(),
            text: 'History',
            location: 'history',
            size: 'X-Small',
            additionalClassNames: 'footer-link w-min'
        },
        {
            key: uuidv4(),
            text: 'Compare',
            location: 'compare',
            size: 'X-Small',
            additionalClassNames: 'footer-link w-min'
        },
        {
            key: uuidv4(),
            text: 'About',
            location: 'about',
            size: 'X-Small',
            additionalClassNames: 'w-min'
        },
    ]
    return (
        <footer className='mr-5 w-full mt-10 grid grid-flow-col text-left  '>
            <div>
            <FooterCompany 
                company='Cryptox' 
                content='Mission statement...'
            />
            <div className='footer-link-container justify-self-left'>
                <LinkGroup
                    title='Links'
                    childrenLinkProps={linkGroupProps}
                    additionalClasses='flex flex-col w-min '
                />
            </div>
            </div>
            
            <FooterAuthor />
           
            
        </footer>
    )
}
