import React from 'react'

interface FooterCompanyProps {
    company: string,
    content: string,
    
}

export default function FooterCompany({company, content}: FooterCompanyProps) {
    return (
        <div className='footer-company mb-5'>
            <div id='footer-company-text' className=''>
                {company}
            </div>
            <div id='footer-content-text' className='text-gray-500'>
                {content}
            </div>
                
            
        </div>
    )
}
