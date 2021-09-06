import React from 'react'
import { ConversionInput } from './index';


export default function HomePage() {
    return (
        <main id='HomePage' className=' mx-auto center '>
            <h1 className=' text-large text-4xl text-center'>Home Page</h1>
            <div className='flex max-w-lg text-center'>
                <ConversionInput initial='1'/>
            </div>
            
        </main>
    )
}
