import { render, screen,  } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
// import NavigationLinkProps from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import FooterAuthor from '../components/FooterAuthor';



describe('FooterAuthor', () => {
    test('renders FooterAuthor component', () => {
        render(
        <MemoryRouter>
            <FooterAuthor  
            />
        </MemoryRouter>
        )
        screen.debug();
        expect(screen.getByText(/nathan larkin/i)).toBeInTheDocument();
        expect(screen.getAllByRole('link').length).toBe(3);
    });
    
})
