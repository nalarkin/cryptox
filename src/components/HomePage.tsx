import React from 'react'
import { ConversionInput } from './index';


export default function HomePage() {
    return (
        <main id='HomePage' className=' mx-auto center h-auto'>
            <h1 className=' '>Home Page</h1>
            <div className='flex text-center justify-center'>
                <ConversionInput initial='1'/>
            </div>
            
        </main>
    )
}
