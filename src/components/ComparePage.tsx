import React from 'react'
import {MyResponsiveLine} from '../features/index';
import {data} from '../features/graph/data';
import {getTheme} from '../features/graph/theme';

export default function ComparePage() {
    return (
        <main id='ComparePage'>
            <h1> Compare prices here.</h1>
            <div className='text-xs mb-5 text-center'>Graph below is for testing purposes.</div>
            <div className='h-96'>
            <MyResponsiveLine data={data} theme={getTheme()} />
            </div>
            
        </main>

    )
}
