import React from 'react'
import { NavigationLinkProps } from '../interfaces';
import NavigationLink from './NavigationLink';

interface LinkGroupProps {
    title: string,
    childrenLinkProps: NavigationLinkProps[],
}



export default function LinkGroup({title, childrenLinkProps}:LinkGroupProps) {
    // const curr = 
    
    return (
        <div className='link-group'>
            {childrenLinkProps.map(({key, location, text, size}: NavigationLinkProps) => 
                
                <NavigationLink
                    key={key}
                    location={location} 
                    text={text}
                    size={size}
                />
            )
            }
        </div>
    )
}
