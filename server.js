const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const cors = require('cors')

app.use(cors);

app.use('/home',data1)

// app.listen(4000,()=>{
//     console.log("server running");
// })



app.listen(process.env.PORT||8080 ,()=>{
    console.log("server running");
})