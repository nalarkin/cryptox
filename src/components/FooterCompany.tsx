import React from 'react'

interface FooterCompanyProps {
    company: string,
    content: string,
    
}

export default function FooterCompany({company, content}: FooterCompanyProps) {
    return (
        <div className='footer-company flex-grow'>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div id='footer-company-text'>
                {company}
            </div>
            <div id='footer-content-text'>
                {content}
            </div>
                
            
        </div>
    )
}
