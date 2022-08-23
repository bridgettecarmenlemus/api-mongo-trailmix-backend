// import express
import express from 'express';
import cors from 'cors';

//import route functions
import { getHikingTrails }  from './src/hikingtrails.js'

//create a new server instance
const app = express();
app.use(express.json());
app.use(cors ())

// binding and listening the connections on the specified port
const PORT = 3331

// -- define the routes --
//get all cars from db
app.get('/hikingtrails', getHikingTrails)

// create new car
// app.post('/hikingtrails', addHikingtrails)

//lines 15 and 18 are the routes that i created
//the GET route will GET all the cars' data from the database
//the POST route will allow us to send new cars to the database


// listen to the server on the specified port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})



