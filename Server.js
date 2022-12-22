const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const router = require("./api/router")
const connectDB = require('./config/db');


connectDB();

app.use(express.json());
app.use(cors());
app.use(router);

// app.get('/',async (req, res) => {
//     res.send("Hello World!");
// });

app.listen(PORT,()=> {
    console.log(`Server is running on ${PORT}`);
});