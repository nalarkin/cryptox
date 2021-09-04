import React from 'react'
import logo from '../logo.svg';


export default function Home() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Yep Cryptox.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
        </a>
        </div>
    )
}
