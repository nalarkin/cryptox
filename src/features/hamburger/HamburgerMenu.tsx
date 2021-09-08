import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { JsxAttributeLike, JsxElement } from 'typescript';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { useDebounce } from './Debounce';
// import {
//   close,
//   open,
//   toggle,
//   selectMenuValue
// } from './hamburgerSlice';



// const menuLinks = [
//     {
//         key: 0,
//         text: 'Home',
//         location: '',
//     },
//     {
//         key: 1,
//         text: 'History',
//         location: 'history',
//     },
//     {
//         key: 2,
//         text: 'Compare',
//         location: 'compare',
//     },
//     {
//         key: 3,
//         text: 'About',
//         location: 'about',
//     },
// ]



export default function HamburgerMenu() {
    // const menuIsOpen = useAppSelector(selectMenuValue);
    // const dispatch = useAppDispatch();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    // function handleMenuClick() {
    //     dispatch(toggle());
    // }

    // function openMenu() {
    //     dispatch(open());
    // }
    
    // function handleLinkClick() {
    //     dispatch(close());
    // }

    function handleLinkClick() {
        setMenuIsOpen(false);
    }
    // function openMenu() {
    //     setMenuIsOpen(true);
    // }
    function toggleMenu() {
        setMenuIsOpen(prev => !prev);
    }

    return (
        // nav and navBar
        <nav className={`fixed z-10 md:hidden`}>
          <button onClick={toggleMenu}>{menuIsOpen ? "Close" : "Menu"}</button>

          {/* menunav + (if navbar open => showMenu) */}
          <ul className={`overflow-y-scroll fixed h-screen w-0 overflow-hidden z-20 ${menuIsOpen ? 'w-96 h-96' : ''}`}>
          <div className='flex flex-col bg-gray-800 border-b-2 '>
            <div className='my-10 text-3xl'>
                <NavLink 
                        exact
                        to={`home`}
                        activeClassName='selected'
                        onClick={handleLinkClick}
                        className={``}
                    >
                    {`Home`}
                </NavLink>
            </div>
               
            <div className='my-10 text-3xl'>
                <NavLink 
                                    exact
                                    to={`history`}
                                    activeClassName='selected'
                                    onClick={handleLinkClick}
                                    className={``}
                                >
                                {`History`}
                            </NavLink>
            </div>
               
            <div className='my-10 text-3xl'>
                <NavLink 
                    exact
                    to={`compare`}
                    activeClassName='selected'
                    onClick={handleLinkClick}
                    className={``}
                >
                {`Compare`}
                </NavLink>
            </div>
            <div className='my-10 text-3xl'>
                <NavLink 
                    exact
                    to={`about`}
                    activeClassName='selected'
                    onClick={handleLinkClick}
                    className={``}
                >
                {`About`}
            </NavLink>
            </div>
            </div>
          </ul>
          
          
        </nav>
      )
}

// return (
//     // nav and navBar
//     <nav className={`relative z-10 cursor-pointer`}>
//       <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>

//       {/* menunav + (if navbar open => showMenu) */}
//       <ul className={`overflow-y-scroll fixed h-screen w-0 overflow-hidden z-20 ${navbarOpen ? 'w-96 h-96' : ''}`}>
//       <div className='mt-5 ml-5 bg-blue-500 '>
//         <button onClick={handleLinkClick}>Link/Button</button>
//         </div>
//       </ul>
      
      
//     </nav>
//   )


// .navBar {
//     position: relative;
//   }
  
//   .navBar button {
//     position: fixed;
//     left: 40px;
//     top: 40px;
//     z-index: 10;
//     cursor: pointer;
//   }
  
//   .menuNav {
//     overflow-y: scroll;
//     list-style: none;
//     position: fixed;
//     top: 0;
//     background: darkcyan;
//     left: 0;
//     bottom: 0;
//     height: 100vh;
//     width: 0;
//     overflow: hidden;
//     max-width: 290px;
//     z-index: 9;
//   }
  
//   .menuNav.showMenu {
//     width: 100%;
//   }
  
//   a {
//     display: block;
//     padding: 10px 40px;
//     text-decoration: none;
//     color: #3fffd2;
//     text-transform: uppercase;
//     font-weight: bold;
//   }
  
//   .menuNav li:first-child {
//     margin-top: 7rem;
//   }