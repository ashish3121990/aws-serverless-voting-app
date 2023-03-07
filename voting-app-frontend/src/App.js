import React from 'react';
import './bootstrap.css';
import './jumbotron.css';

function App() {

return (
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
      <p>This is a serverless application with frontend developed using React, hosted in S3 bucket and delivered via Cloudfront CDN. The backend is developed using API Gateway, AWS Lambda functions and Dynamo DB.</p>
    </div>
  </div>
  </main> 
</div>
  );
}

export default App;
