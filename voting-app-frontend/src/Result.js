import { MDBDataTable } from "mdbreact";
import { useEffect, useState } from "react";
import React from 'react';
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
import { MyComponent } from './MyComponent';

function Result() {
  const [posts, setPosts] = useState([]);
  const development_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/";
  const testing_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/test/";
  const dev_url = development_url;
  
  const fetch_dev_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus";
  const fetch_test_url = "https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus";
  const fetch_url = "https://m4jg81zh19.execute-api.us-west-1.amazonaws.com/dev/results";

  const page_refresh_seconds = 30;
  const page_refresh_interval = page_refresh_seconds * 1000;

  const [usersForRender, setUsersForRender] = useState([]);
  
  /*
  const [posts, setPosts] = useState([
    {
      "state_id": "State-1",
      "planA_status": "Pass",
      "planB_status": "Pass",
      "planC_status": "Pass",
      "planD_status": "Pass",
      "planE_status": "Pass",
      "total": "Pass"
    },
    {
      "state_id": "State-2",
      "planA_status": "Pass",
      "planB_status": "Pass",
      "planC_status": "Pass",
      "planD_status": "Pass",
      "planE_status": "Pass",
      "total": "Pass"
    },
    {
      "state_id": "State-3",
      "planA_status": "Pass",
      "planB_status": "Fail",
      "planC_status": "Pass",
      "planD_status": "Pass",
      "planE_status": "Pass",
      "total": "Fail"
    },
    {
      "state_id": "State-4",
      "planA_status": "Pass",
      "planB_status": "Pass",
      "planC_status": "Pass",
      "planD_status": "Pass",
      "planE_status": "Pass",
      "total": "Pass"
    }
  ]); 
*/

  /*  ################ wait for 1 minute and refresh page with fresh data
  useEffect(() => {
    const interval = setInterval(() => {
    fetch("https://r5k39ic534.execute-api.us-east-2.amazonaws.com/dev/fetchstatus")
      .then((res) => res.json())
      .then((res) => {

        //console.log(res.json);

        setPosts(res);
        console.log("Response From Fetch API: ", res);
      });
    },60000);
    return () => clearInterval(interval);

  }, []);
*/

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
/*
useEffect(() => {
  const interval = setInterval(() => {
  fetch(fetch_url)
    .then((res) => res.json())
    .then((res) => {

      //console.log(res.json);

      setPosts(res);
      console.log("Response Refresh From Fetch API after "+ page_refresh_seconds + " Seconds: ", res);
    });
  },page_refresh_interval);
  return () => clearInterval(interval);

}, []);
*/
/*
  let deletePost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        var postIndex = posts.findIndex(function (o) {
          return o.id === postId;
        });
        if (postIndex !== -1) {
          setPosts(posts.filter((item) => item.state_id != postId));
        }
      });
  };
*/
/*
  let deletePost2 = (postId) => {
    fetch(`${dev_url}?state_id=${postId}`, {
      method: "POST",
    })
      
      .then((res) => res.json())
      .then((res) => {
        console.log("Selected State : ", postId);
        console.log("Response : ", res);
        
        var postIndex = posts.findIndex(function (o) {
          return o.id === postId;
        });
        if (postIndex !== -1) {
          setPosts(posts.filter((item) => item.state_id != postId));
        }
        
      });
  };
*/
  let runPlanA = (postId) => {
    fetch(`${dev_url}plana?state_id=${postId}`, {
      method: "POST",
    })      
      .then((res) => res.json())
      .then((res) => {
        console.log("Selected State : ", postId, ", Plan A");
        console.log("Response : ", res);
      });
  };

  let runPlanB = (postId) => {
    fetch(`${dev_url}planb?state_id=${postId}`, {
      method: "POST",
    })      
      .then((res) => res.json())
      .then((res) => {
        console.log("Selected State : ", postId, ", Plan B");
        console.log("Response : ", res);
      });
  };

  let runPlanC = (postId) => {
    fetch(`${dev_url}planc?state_id=${postId}`, {
      method: "POST",
    })      
      .then((res) => res.json())
      .then((res) => {
        console.log("Selected State : ", postId, ", Plan C");
        console.log("Response : ", res);
      });
  };

  let runPlanD = (postId) => {
    fetch(`${dev_url}pland?state_id=${postId}`, {
      method: "POST",
    })      
      .then((res) => res.json())
      .then((res) => {
        console.log("Selected State : ", postId, ", Plan D");
        console.log("Response : ", res);
      });
  };

  let runPlanE = (postId) => {
    fetch(`${dev_url}plane?state_id=${postId}`, {
      method: "POST",
    })      
      .then((res) => res.json())
      .then((res) => {
        console.log("Selected State : ", postId, ", Plan E");
        console.log("Response : ", res);
      });
  };
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

  const data = {
    columns: [
      {
        label: " ",
        field: "state_id",
        sort: "asc",
        width: 100,
      }
    ],

    rows: usersForRender,
  };

  return (
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
  );
}

export default Result;
