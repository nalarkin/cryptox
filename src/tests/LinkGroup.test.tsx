import { render, screen } from '@testing-library/react';
import { text } from 'node:stream/consumers';
import {MemoryRouter} from 'react-router-dom';
import LinkGroup from '../components/LinkGroup';
// import NavigationLinkProps from '../interfaces';
import { v4 as uuidv4 } from 'uuid';



describe('LinkGroup', () => {
    const testTitle = 'TestTitle'
    const childrenProps = [
        {
            key: uuidv4(),
            text: 'Test Link',
            location: 'TestLocation',
            size: 'X-Small',
        },
        {
            key: uuidv4(),
            text: 'Second Link',
            location: 'SecondLocation',
            size: 'X-Large',
        }
    ]
    test('renders LinkGroup component default', () => {
        render(
        <MemoryRouter>
            <LinkGroup title={testTitle} childrenLinkProps={childrenProps} />
        </MemoryRouter>
        )
        expect(screen.getByText(/test link/i)).toBeInTheDocument();
        expect(screen.getByText(/second link/i)).toBeInTheDocument();
        expect(screen.getByText(testTitle)).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });
    
})
