import express from 'express';
const userRouter = express.Router();

// 🧑‍💻 GET all users
userRouter.get('/', (req, res) => {
  console.log('list of all users');
  res.send('List of all users');
});

// 🔍 GET user by ID
userRouter.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log(`user id is ${userId}`);
  res.send(`User ID is ${userId}`);
});

// 🔎 GET with query parameters
userRouter.get('/search', (req, res) => {
  const { name } = req.query;
  res.send(`Searching for user: ${name}`);
});

// ➕ POST new user
userRouter.post('/', (req, res) => {
  const newUser = req.body;
  res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

// ✏️ PUT update user
userRouter.put('/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.send(`User ${userId} updated with data: ${JSON.stringify(updatedData)}`);
});

// ❌ DELETE user
userRouter.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} deleted`);
});

export default userRouter;
