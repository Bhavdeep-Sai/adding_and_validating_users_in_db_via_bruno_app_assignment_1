require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const userRouter = require('./marketplace/userRoutes');

const app = express();
const port = 3010;

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("Mongodb connected")})
.catch((err)=>{console.log("Mongodb connection failed", err)})

app.use(express.static('static'));

app.use(express.json());
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
