import express from 'express';
const app = express();

// 🔧 Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware executed');
  next(); // Pass control to the next middleware
});

// 🏠 Basic Home Page Route
app.get('/', (req, res) => {
  console.log('Welcome to home');
  res.send('Home Page'); // ✅ You need to send a response
});

// 🚀 Start the Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});