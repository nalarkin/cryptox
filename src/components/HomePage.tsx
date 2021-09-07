import React from 'react'
import { ConversionInput } from '../features/index';


export default function HomePage() {
    return (
        <main id='HomePage' className=' '>
            <h1 className=' '>Home Page</h1>
            <div className=' text-center  mx-auto'>
                <ConversionInput initial='1'/>
            </div>
            
        </main>
    )
}
