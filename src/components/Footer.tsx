import React from 'react'
import NavigationLink from './NavigationLink'

export default function Footer() {
    return (
        <div>
            <NavigationLink text='About' location='about' size='X-Large' additionalClassNames="class1 class2" />
        </div>
    )
}
