import express from 'express';
import user from './routes/user.js';

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use('/user', user);  // Mount users router

// 🏠 Home route
app.get('/', (req, res) => {
  console.log('this is xp2 folder');
  res.send('Welcome to XP2!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});