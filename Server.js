import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://Anupam:Ashutosh@13@cluster0.kthighc.mongodb.net/').
then(() => {
    console.log("Connected to Database");
})
.catch((err) => {
    console.log("Error connecting to Database", err);
});


let app = express();
app.use(express.json());
let port = 3050; 
app.listen(port, ()=>{console.log(`the server is listening to port : ${port}`)});