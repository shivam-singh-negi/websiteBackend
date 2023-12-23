// index.js or server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('MongoDB connection error:', error.message);
}

app.use(express.json());

// Define your routes


// Root endpoint
app.get('/', (req, res) => {
  res.send('<h1>Server is active</h1>');
});

// Use user and auth routes
app.use('/api/users', userRoutes);
app.use('/api', authRoutes);


// Example error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
