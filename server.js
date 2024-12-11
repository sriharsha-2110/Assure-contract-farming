const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());




// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    state: String,
    district: String,
    taluk: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Registration Endpoint
app.post('/register', async (req, res) => {
    try {
        const { name, age, phone, state, district, taluk, password } = req.body;

        // Validate required fields
        if (!name || !age || !phone || !state || !district || !taluk || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Save user to database
        const newUser = new User({ name, age, phone, state, district, taluk, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://192.168.10.222:5500`);
});
