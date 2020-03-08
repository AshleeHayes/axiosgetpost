import React from 'react';
import './App.css';
import axios from 'axios'

//  first use case 
function performGetRequest1() {
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';

  axios.get("http://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    resultElement.innerHTML =
    generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = generateErrorHTMLOutput(error);
  })
}

// In the second use case we’d like to perform another HTTP GET request. This time we’d like to use a specific todo ID as a request parameter. The ID can be entered by the user. 
function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';
  
  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
}

// POST
// document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
function performPostRequest(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';
  
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: todoTitle,
    completed: false
  })
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
  
  e.preventDefault();
}

function generateSuccessHTMLOutput(response) {
  return  '<h4>Result</h4>' + 
          '<h5>Status:</h5> ' + 
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}
function generateErrorHTMLOutput(error) {
  return  '<h4>Result</h4>' + 
          '<h5>Message:</h5> ' + 
          '<pre>' + error.message + '</pre>' +
          '<h5>Status:</h5> ' + 
          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
          '<h5>Headers:</h5>' + 
          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
          '<h5>Data:</h5>' + 
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
}

function App() {
  return (
    <div>

<div class="container">
      <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong><a href="http://codingthesmartway.com/courses/complete-javascript/" target="_blank">[ONLINE COURSE] - The Complete JavaScript Course: Build a Real-World Project</a></strong> +++ Master JavaScript with the most complete JavaScript course on the market! Includes projects, challenges, final exam, ES6 +++ You will gain a deep and true understanding of how JavaScript works behind the scenes. +++
      </div>
      <h1>JS Axios Demo <small>by CodingTheSmartWay.com</small></h1>
      <div class="jumbotron">
        <h1>Welcome To Axios</h1>
        <h4>This applications uses Axios. Axios is a Promise-based HTTP client for JavaScript which can be used in your front-end application and in your Node.js backend. </h4>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">GET Request</div>
        <div class="panel-body">
          <button class="btn btn-primary" onClick={performGetRequest1}>Get Todos</button>
       
          <div class="panel-body" id="getResult1"></div>
        </div>
      </div>
      <div class="panel panel-primary">
        <div class="panel-heading">GET Request with Paramaters</div>
        <div class="panel-body">
          <input type="text" class="form-control" id="todoId" placeholder="Todo ID ..."/><br/>
          <button class="btn btn-primary" onClick={performGetRequest2}>Get Todos</button>
         
          <div class="panel-body" id="getResult2"></div>
        </div>
      </div>
       <div class="panel panel-primary">
        <div class="panel-heading">POST Request</div>
        <div class="panel-body">
          <form class="form-inline" id="todoInputForm">
            <div class="form-group">
              <input type="text" class="form-control" id="todoTitle" placeholder="Todo Title ..." />
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form><br/>
       
          <div class="panel-body" id="postResult"></div>
        </div>
      </div>
      <div class="footer">
        <p>&copy <a href="http://codingthesmartway.com" target="_blank">CodingTheSmartWay.com</a> | <a href="http://codingthesmartway.com/imprint" target="_blank">Imprint</a></p>
      </div>
     
    </div>
   
    </div>
  );
}

export default App;
