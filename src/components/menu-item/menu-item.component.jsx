 
import React from 'react'
import {withRouter} from 'react-router-dom';
import  './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl ,match}) => (
     
        
        <div 
        className={`${size} menu-item` } 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-imgae'
                style={{backgroundImage:`url(${imageUrl})`}}> 
        
            <div className='content'>
                <h1 className='title'>
                    {title.toUpperCase()}
                </h1>
                <span className='subtitle' >
                    SHOP NOW
                </span>
            </div>
        </div>
)

    // return (
    //     <div 
    //     style={{backgroundImage:`url(${imageUrl})`}}
    //     className={`${size} menu-item` }>
    //         <div className='content'>
    //             <h1 className='title'>
    //                 {title.toUpperCase()}
    //             </h1>
    //             <span className='subtitle' >
    //                 SHOP NOW
    //             </span>
    //         </div>
    //     </div>
    // )
 

export default withRouter( MenuItem );
