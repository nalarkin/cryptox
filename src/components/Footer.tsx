import React from 'react'
import NavigationLink from './NavigationLink'
import { v4 as uuidv4 } from 'uuid';
import FooterCompany from './FooterCompany';


export default function Footer() {
    return (
        <footer>
            <FooterCompany 
                company='company' 
                content='content'
            />
            <NavigationLink 
                key={uuidv4()} 
                text='About' 
                location='about' 
                size='X-Large' 
                additionalClassNames="class1 class2" 
            />
        </footer>
    )
}
