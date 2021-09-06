import React from 'react'
import { ConversionInput } from '../features/index';


export default function HomePage() {
    return (
        <main id='HomePage' className=' mx-auto '>
            <h1 className=' '>Home Page</h1>
            <div className='flex text-center justify-center'>
                <ConversionInput initial='1'/>
            </div>
            
        </main>
    )
}
