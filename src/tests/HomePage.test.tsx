import { render, screen,  } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
// import NavigationLinkProps from '../interfaces';
import {HomePage} from '../components/index';



describe('FooterAuthor', () => {
    test('renders FooterAuthor component', () => {
        render(
        <MemoryRouter>
            <HomePage  
            />
        </MemoryRouter>
        )
        screen.debug();
        // expect(screen.getByText(/nathan larkin/i)).toBeInTheDocument();
        // expect(screen.getAllByRole('link').length).toBe(3);
    });
    
})
