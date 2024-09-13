const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitlife', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Schema/Model for keeping class bookings
const bookingSchema = new mongoose.Schema({
    className: String,
    date: String,
    time: String,
    instructor: String,
    clientName: String,
    clientEmail: String
});

const Booking = mongoose.model('Booking', bookingSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle form submission for class bookings
app.post('/book-class', (req, res) => {
    const newBooking = new Booking({
        className: req.body.className,
        date: req.body.date,
        time: req.body.time,
        instructor: req.body.instructor,
        clientName: req.body.clientName,
        clientEmail: req.body.clientEmail
    });
    
    newBooking.save((err) => {
        if (err) {
            res.status(500).send('Error saving booking.');
        } else {
            res.send('Booking successful!');
        }
    });
});

// Starts server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});