const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing.  The server doesn't respond, and the client hangs indefinitely. 
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that sometimes fails
  await new Promise(resolve => setTimeout(resolve, 500));
  // Simulate a random failure
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return { message: 'Success!' };
}