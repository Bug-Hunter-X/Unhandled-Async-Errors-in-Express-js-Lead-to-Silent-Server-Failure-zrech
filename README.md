# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled asynchronous errors causing the server to become unresponsive without any indication of failure.  The client making requests to the server will hang indefinitely.

The `bug.js` file contains code that exhibits the problem.  The `bugSolution.js` file shows how to fix the issue.

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`. 
4. Make multiple requests to `http://localhost:3000/`.  Observe that approximately half the requests will hang.

## Solution

The solution involves adding proper error handling to catch and respond to exceptions within asynchronous middleware functions.