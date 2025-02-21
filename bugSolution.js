const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Server Error'); // Respond with an error to the client
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 500));
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return { message: 'Success!' };
} 