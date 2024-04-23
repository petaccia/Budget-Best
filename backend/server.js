const express =require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {
  res.send('Hello World! in the backend')
});

app.listen(port, () => {
  if (port == 5000){
    console.log(`Backend: http://localhost:${port}`)
  } else {
    console.log('Error on the server')
  }

});