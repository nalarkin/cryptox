import React from 'react'
import { NavigationLinkProps } from '../interfaces';
import {NavigationLink} from '../features/index';
// import NavigationLink from './NavigationLink';

interface LinkGroupProps {
    title: string,
    childrenLinkProps: NavigationLinkProps[],
    additionalClasses?: string,
}



export default function LinkGroup({title, childrenLinkProps, additionalClasses}:LinkGroupProps) {
    // const curr = 
    const classesForLink = `link-list ${additionalClasses ? ` ${additionalClasses}` : ''}`;
    return (
        <div className='link-group text-left'>
            {
                title && <div className='link-group-title X-Small'>
                {title}
                </div>
            }
            <div className={classesForLink}>
                {childrenLinkProps.map(({key, location, text, size, additionalClassNames}: NavigationLinkProps) => 
                    
                    <NavigationLink
                        key={key}
                        location={location} 
                        text={text}
                        size={size}
                        additionalClassNames={additionalClassNames}
                    />
                    
                    
                )
                }
            </div>
            
        </div>
    )
}
