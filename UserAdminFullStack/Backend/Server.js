const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongooseDb = require('./Config/db');
const authRoutes = require('./Routes/Auth')


dotenv.config();
mongooseDb();


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth' , authRoutes)

const PORT = 4000;
app.listen(PORT , () => {
  console.log("server working")
})
