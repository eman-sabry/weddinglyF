//for express 
const express = require('express');
const app = express();

//connection back and front so accept request
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Allow your Next.js app
    credentials: true, // Allow cookies to be sent
}));


//for static files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//to use .env 
require('dotenv').config();

//database connection 
const connectDB = require("./models/connect.js");
connectDB();

//listening to port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));

//ejs
app.set('view engine', 'ejs');

//routes 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//cookies
//const cookieParser = require('cookie-parser');
//app.use(cookieParser());

///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Routes
*/
const userRoute = require('./modules/user/user.route.js');
const venueRoute = require('./modules/venue/venue.route.js');
const photographerRoute = require('./modules/photographer/photographer.route.js');


app.use('/api/venue', venueRoute);
app.use('/api/user', userRoute);
app.use('/api/photographer', photographerRoute);

//const { requireAuth, checkUser } = require('./middleware/authMiddleware.js');
//app.get('*', checkUser);

//protected routes
//app.get('/aboutUs', requireAuth, (req, res) => res.render('aboutUs'));





