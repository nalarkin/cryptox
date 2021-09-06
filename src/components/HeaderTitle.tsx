import React from 'react'

interface props {
    title: string,
}

export default function HeaderTitle({title}: props) {
    return (
        <div className='text-2xl text-gray-200 text-'>
            {title}
        </div>
    )
}
