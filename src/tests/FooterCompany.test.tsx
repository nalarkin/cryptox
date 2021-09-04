import { render, screen } from '@testing-library/react';
import { text } from 'node:stream/consumers';
import {MemoryRouter} from 'react-router-dom';
import LinkGroup from '../components/LinkGroup';
// import NavigationLinkProps from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import FooterCompany from '../components/FooterCompany';



describe('FooterCompany', () => {
    test('renders FooterCompany component', () => {
        render(
        <MemoryRouter>
            <FooterCompany  
                company='Company Name' 
                content='footer content'
            />
        </MemoryRouter>
        )
        expect(screen.getByText(/company name/i)).toBeInTheDocument();
        expect(screen.getByText(/footer content/i)).toBeInTheDocument();
    });
    
})
