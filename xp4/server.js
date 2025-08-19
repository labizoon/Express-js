import express from 'express';
const app = express();

//req and res
//req is something(data) we are asking for
//res is tha some(data) is coming in answere

// GET request
app.get('/greet', (req, res) => {
  res.json({ message: 'Hello, Sir! Welcome to Express API.' });
});

// POST request
app.post('/echo', (req, res) => {
  const { data } = req.body;
  res.json({ received: data });
});


app.listen(3000 , (req,res)=>{
    console.log('server is runing on 3000'); 
});