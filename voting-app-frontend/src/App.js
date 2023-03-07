import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import React from 'react';
import { MyComponent } from './MyComponent';
import cat12 from './cat12.jpg';
import cat6 from './cat6.jpg';
import cat30 from './cat30.jpg';
import './bootstrap.css';
import './jumbotron.css';

function App() {

  //const [posts, setPosts] = useState([]);
  const development_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/";
  const testing_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/test/";
  const dev_url = development_url;
  
  const fetch_dev_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus";
  const fetch_test_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus";
  const fetch_url = fetch_dev_url;

  const page_refresh_seconds = 30;
  const page_refresh_interval = page_refresh_seconds * 1000;

  const [usersForRender, setUsersForRender] = useState([]);
  
  const [posts, setPosts] = useState([
    { }
  ]); 

  //#############################################

  useEffect(() => {
    //const interval = setInterval(() => {
    fetch(fetch_url)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.json);
        setPosts(res);
        console.log("Response From Fetch API: ", res);
      });
   // }; ,60000);
    //return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let postsArray = JSON.parse(JSON.stringify(posts));
    let userData = [];
    postsArray.map((item, index) => {
      item.state_id = (
          <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          <MyComponent cat_id={item.vote_id} votes={item.votecount}/>  
          <div>
    </div>


          </div>

          
        );
      userData.push(item);
    });
    setUsersForRender(userData);
  }, [posts]);

  //#############################################

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
    let postsArray = JSON.parse(JSON.stringify(posts));
    let userData = [];
    postsArray.map((item, index) => {
     
    item.cat = (
        <div>
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a className="navbar-brand" href="/">Serverless Voting App</a>
  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
    </ul>
  </div>
</nav>
      <main role="main">
      <div className="jumbotron">
    <div className="container">
      <h1>Vote for your favourite cat</h1>
      <p>This is a serverless application with frontend developed using React, hosted in S3 bucket and delivered via Cloudfront CDN. The backend is developed using API Gateway, AWS Lambda functions and Dynamo DB. <br></br><b>Scroll below to view voting results</b></p>
    </div>
  </div>

      <div className="container">
    <div className="row">	
      <div className="col-md-4">
        <h2>Cat-1</h2>
         <img src={cat12} width="300" height="300" alt=""/>
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
            onClick={() => voteforcat('Cat-1')}
          >Vote
          </div>

          <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          <MyComponent cat_id={item.vote_id} votes={item.votecount}/>  
          <div>
    </div>


          </div>


     </div>
	  
     <div className="col-md-4">
        <h2>Cat-2</h2>
         <img src={cat6} width="300" height="300" alt=""/>
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
            onClick={() => voteforcat('Cat-2')}
          >Vote
          </div>
     </div>
	  
     <div className="col-md-4">
        <h2>Cat-3</h2>
         <img src={cat30} width="300" height="300" alt=""/>
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
            onClick={() => voteforcat('Cat-3')}
          >Vote
          </div>
     </div>
	  
    </div>
  </div> 
  </main> 
        </div>
      );
      userData.push(item);
    });
    setUsersForRender(userData);
  }, [posts]);


  const data = {
    columns: [
        {
        label: " ",
        field: "cat",
        width: 100
      }
    ],
    rows: usersForRender,
  };

  const data2 = {
    columns: [
        {
        label: "",
        field: "cat",
        width: 100
      }
    ],
    rows: usersForRender,
  };
  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div>
    <div className="App">
      <MDBDataTable
        responsive
        bordered
       data={data}
        searching={false}
        paging={false}
        info={false}
      />
    </div>
    <h2  className="uil-trash-alt"
            style={{
              cursor: "pointer",
              color: "Green",
              fontSize: "2.5em",
              padding: "1.9rem",
              borderRadius: ".3rem",
              background: "white",
              justifyContent: "left"
            }}>Voting Results <button onClick={refreshPage}>Refresh</button></h2>
</div>
  );
}

export default App;
