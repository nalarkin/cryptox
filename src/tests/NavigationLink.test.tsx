import { render, screen } from '@testing-library/react';
import NavigationLink from '../components/NavigationLink';
import {MemoryRouter} from 'react-router-dom';

/**
 * https://testing-library.com/docs/queries/about/#byrole
 */

/**
 * More detailed route testing here: https://testing-library.com/docs/example-react-router/
 */

/**
 * Use MemoryRouter because it resets between tests
 */

describe('NavigationLink', () => {
    test('renders NavigationLink component default', () => {
        const linkText = 'Test Link Text'
        render(
        <MemoryRouter>
        <NavigationLink text={linkText} location='location' size='X-Large' />
        </MemoryRouter>
        )
        expect(screen.getByText(linkText)).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
    test('renders NavigationLink component', () => {
        const linkText = 'Test Link Text'
        render(
        <MemoryRouter>
            <NavigationLink text={linkText} location='location' size='X-Large' additionalClassNames="class1 class2" />
        </MemoryRouter>
        )
        expect(screen.getByText(linkText)).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });
    
})
