import { MDBDataTable } from "mdbreact";
//import { useEffect, useState } from "react";
//import React from 'react';
import { MyComponent } from './MyComponent';
import React, { useState, useEffect } from "react";

const Test1 = () => {
  const [data, setData] = useState(null);

/*
  useEffect(() => {
    fetch(fetch_url)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.json);
        setPosts(res);
        console.log("Response From Fetch API: ", res);
      });
  }, []);
*/
let voteforcat = (postId) => {
  fetch(`https://m4jg81zh19.execute-api.us-west-1.amazonaws.com/dev/vote?vote_id=${postId}`, {
    method: "POST",
  })      
    .then((res) => res.json())
    .then((res) => {
      console.log("Voted For : ", postId);
      console.log("Response : ", res);
    });
};

  useEffect(() => {
    fetch("https://m4jg81zh19.execute-api.us-west-1.amazonaws.com/dev/results")
      .then((response) => response.json())
      .then((data) => { 
        //console.log(data.json);
        setData(data)
      });


  }, []);

  return (
    <div>
      {data ? (
        <div>
          {data.map((item) => (
            <div key={item.vote_id}>
                      <div
            className="btn btn-primary"
            style={{
              cursor: "pointer",
              color: "black",
              fontSize: "1.5em",
              padding: ".9rem",
              borderRadius: ".3rem",
              background: "#8fd8f2",
            }}
            onClick={() => voteforcat('Cat-2')}
          >{item.vote_id}
          </div>
              <h1>{item.vote_id} {item.votecount}</h1>    
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test1;