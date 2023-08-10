const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/leetcode-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Require the Problem model
const Problem = require('./models/problem');

// Middleware to parse JSON
app.use(express.json());

// API Route to fetch all problems
app.get('/api/problems', async (req, res) => {
    try {
        const problems = await Problem.find();
        res.json(problems);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch problems' });
    }
});

// API Route to submit a new problem
app.post('/api/problems', async (req, res) => {
    const problem = new Problem(req.body);
    try {
        await problem.save();
        res.status(201).json(problem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save problem' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
