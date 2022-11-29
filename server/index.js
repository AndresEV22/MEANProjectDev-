const express = require('express');
const connectDB = require('./config/dbconect');
const cors = require('cors');

const app = express();
const PORT = 4000;

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/notes', require('./routes/noteRoutes'));

app.listen(PORT, ()=>{
    console.log("Server Running")
});