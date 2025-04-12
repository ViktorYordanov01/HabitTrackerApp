import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db';
import { Task } from './models/Task';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from TypeScript + Express!');
});

app.post('/tasks', async (req: any, res: any) => {
    try {
      const { title, description, priority } = req.body;
  
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
  
      const newTask = new Task({
        title,
        description,
        priority,
      });
  
      const savedTask = await newTask.save();
      console.log('Saved task:', savedTask);
      return res.status(201).json(savedTask);
    } catch (error) {
      console.error('❌ Failed to create task:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const createTask = async () => {
  const newTask = new Task({
    title: 'Buy groceries',
    description: 'Milk, eggs, bread',
    priority: 'high',
  });

  await newTask.save();
};

