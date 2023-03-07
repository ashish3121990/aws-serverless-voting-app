import React from 'react';
import cat12 from './cat12.jpg';
import cat6 from './cat6.jpg';
import cat30 from './cat30.jpg';
import othercat from './othercat.jpg';

export const CatPictures = (props) => { 

    if (props.cat_id === 'Cat-3' )
    {   
        return ( 
        <div>
         <img src={cat30} width="300" height="300" alt=""/>        
        </div>
          ); 
    }
    else if (props.cat_id === 'Cat-2' )
    {   
        return ( 
        <div>
          <img src={cat6} width="300" height="300" alt=""/>
        </div>
          ); 
    }
    else if (props.cat_id === 'Cat-1' )
    {   
        return ( 
        <div>
          <img src={cat12} width="300" height="300" alt=""/>
        </div>
          ); 
    }
    else
    {   
      return ( 
        <div>
          <img src={othercat} width="300" height="300" alt=""/>
        </div>
          );
    }  
} 

export default CatPictures;
