import { MDBDataTable } from "mdbreact";
//import { useEffect, useState } from "react";
//import React from 'react';
import { CatPictures } from './CatPictures';
import React, { useState, useEffect } from "react";
import Cat_1 from './cat12.jpg';
import cat6 from './cat6.jpg';
import cat30 from './cat30.jpg';
//import { StyleSheet, View, Text, Button } from 'react-native'

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

const refreshPage = ()=>{
  window.location.reload();
}

let voteforcat = (postId) => {
  fetch(`https://m4jg81zh19.execute-api.us-west-1.amazonaws.com/dev/vote?vote_id=${postId}`, {
    method: "POST",
  })      
    .then((res) => res.json())
    .then((res) => {
      console.log("Voted For : ", postId);
      console.log("Response : ", res);
      //console.log("Refreshing Page");
      //window.location.reload();
      refreshPage();
      //console.log("Page Refreshed");
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
              <div className="container">
              <div className="row">	
          {data.map((item) => (

            <div className="col-md-4" key={item.vote_id}>
            <h2>{item.vote_id}</h2>
            <CatPictures cat_id={item.vote_id} /> 
            <br></br><br></br>            
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
            onClick={() => voteforcat(item.vote_id) }
          >Vote
          </div>
              <h1>Votes {item.votecount}</h1>    
            </div>
          ))}
        </div></div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test1;