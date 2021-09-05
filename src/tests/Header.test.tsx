import { render, screen,  } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
// import NavigationLinkProps from '../interfaces';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';



describe('FooterAuthor', () => {
    test('renders FooterAuthor component', () => {
        render(
        <MemoryRouter>
            <Header 
            />
        </MemoryRouter>
        )
        screen.debug();
    });
    
})
