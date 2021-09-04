import React from 'react';
import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import App from '../App';

/**
 * getByText and getByRole should be your go-to search 
 * types to select elements from your rendered React components 
 * with React Testing Library.
 */


/**
 * So every time you are asserting that an element isn't 
 * there, use queryBy. 
 * 
 * Otherwise default to getBy. 
 * 
 * The findBy search variant is used for asynchronous 
 * elements which will be there eventually. 
 */

/**
 * getBy 
 * queryBy 
 * findBy 
 *  getAllBy
    queryAllBy
    findAllBy
 */

 
describe('App', () => {
  test('renders App component', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
 
    // expect(screen.getByText('Learn React')).toBeInTheDocument();
    // regex below
    // expect(screen.getByText(/save/)).toBeInTheDocument();
    // get by role will show roles that are available if the one you providde doesn't exist
    //screen.getByRole('');
  });
});

/**So quite often it isn't necessary to assign aria 
 * roles to HTML elements explicitly for the sake of testing */


/**
 *  LabelText: getByLabelText: <label for="search" />
    PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
    AltText: getByAltText: <img alt="profile" />
    DisplayValue: getByDisplayValue: <input value="JavaScript" />
 */

/**
 * Example of a test to expect no values text 
 * expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
 */

/**
 * Find by Example (async)
 * expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
 */

/**
 * Additional Assertive Functions    
 * toBeDisabled
    toBeEnabled
    toBeEmpty
    toBeEmptyDOMElement
    toBeInTheDocument
    toBeInvalid
    toBeRequired
    toBeValid
    toBeVisible
    toContainElement
    toContainHTML
    toHaveAttribute
    toHaveClass
    toHaveFocus
    toHaveFormValues
    toHaveStyle
    toHaveTextContent
    toHaveValue
    toHaveDisplayValue
    toBeChecked
    toBePartiallyChecked
    toHaveDescription
 */

    /**
     * Mimicking User Events 
     * Whenever possible, use userEvent over fireEvent when using React Testing Library. 
     * 
     * await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
     * 
     * Fire Event syntax below
     * fireEvent.change(screen.getByRole('textbox'), {
     * target: { value: 'JavaScript' },});
     * 
     * If given warning "Warning: An update to App inside a test was not wrapped in act(...)."
     * then you should use await findBy before starting the fireEvent
     */

    /**
     * Mocking Functions 
     * describe('Search', () => {
        test('calls the onChange callback handler', async () => {
            const onChange = jest.fn();
        
            render(
            <Search value="" onChange={onChange}>
                Search:
            </Search>
            );
        
            await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
        
            expect(onChange).toHaveBeenCalledTimes(10);
        });
        });
     */