import { CatPictures } from './CatPictures';
import React, { useState, useEffect } from "react";

const Vote = () => {
  const [data, setData] = useState(null);

  const refreshPage = ()=>{
  window.location.reload();
  }

  const vote_url = "https://m4jg81zh19.execute-api.us-west-1.amazonaws.com/dev/vote";
  const results_fetchurl= "https://m4jg81zh19.execute-api.us-west-1.amazonaws.com/dev/results";

let voteforcat = (catId) => {
  fetch(vote_url + `?vote_id=${catId}`, {
    method: "POST",
  })      
    .then((res) => res.json())
    .then((res) => {
      console.log("Voted For : ", catId);
      console.log("Response : ", res);
      //console.log("Refreshing Page");
      //window.location.reload();
      refreshPage();
      //console.log("Page Refreshed");
    });
};

  useEffect(() => {
    fetch(results_fetchurl)
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
          >Vote ({item.votecount}) 
          </div>
          </div>
          ))}
        </div></div>
      ) : (
        <p style={{
          cursor: "pointer",
          color: "black",
          fontSize: "1.5em",
          padding: ".9rem",
          borderRadius: ".3rem",
          background: "#8fd8f2",
        }}>Loading...</p>
      )}
    </div>
  );
};

export default Vote;