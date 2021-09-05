import React from 'react'

interface props {
    title: string,
}

export default function HeaderTitle({title}: props) {
    return (
        <div>
            {title}
        </div>
    )
}
