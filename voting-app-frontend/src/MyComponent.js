//import { MDBDataTable } from "mdbreact";
//import { useEffect, useState } from "react";
import React from 'react';
import cat12 from './cat12.jpg';
import cat6 from './cat6.jpg';
import cat30 from './cat30.jpg';

export const MyComponent = (props) => { 

    if (props.cat_id === 'Cat-3' )
    {   
       // console.log("Test1");
       // console.log("state_id",props.cat_id);
       // console.log("Votes",props.votes);
        return ( 
          <div>
          <h2  className="uil-trash-alt"
            style={{
              cursor: "pointer",
              color: "blue",
              fontSize: "1.5em",
              padding: "1.2rem",
              borderRadius: ".3rem",
              background: "white",
              justifyContent: "left"
            }}>Cat-3 Total Votes :- {props.votes}     </h2>
         <img src={cat30} width="300" height="300" alt=""/>
        
           </div>
          ); 
    }
    else if (props.cat_id === 'Cat-2' )
    {   
       // console.log("Test1");
       // console.log("state_id",props.cat_id);
       // console.log("Votes",props.votes);
        return ( 
          <div>
          <h2  className="uil-trash-alt"
            style={{
              cursor: "pointer",
              color: "blue",
              fontSize: "1.5em",
              padding: "1.2rem",
              borderRadius: ".3rem",
              background: "white",
              justifyContent: "left"
            }}>Cat-2 Total Votes :- {props.votes}     </h2>
         <img src={cat6} width="300" height="300" alt=""/>
        
           </div>
          ); 
    }
    else if (props.cat_id === 'Cat-1' )
    {   
        //console.log("Test1");
        //console.log("state_id",props.cat_id);
        //console.log("Votes",props.votes);
        return ( 
          <div>
          <h2  className="uil-trash-alt"
            style={{
              cursor: "pointer",
              color: "blue",
              fontSize: "1.5em",
              padding: "1.2rem",
              borderRadius: ".3rem",
              background: "white",
              justifyContent: "left"
            }}>Cat-1 Total Votes :- {props.votes}     </h2>
         <img src={cat12} width="300" height="300" alt=""/>
        
           </div>
          ); 
    }
    else
    {   
        //console.log("Test2");
        //console.log(props.status);
        return ( 
            <div
            className="uil-trash-alt"
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "1.5em",
              padding: ".9rem",
              borderRadius: ".3rem",
              background: "green",
            }}
          >
          {props.status}       
          </div>
          ); 
    }  
} 

export default MyComponent;
