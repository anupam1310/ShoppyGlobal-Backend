import express from 'express';
import mongoose from 'mongoose';
import productrouter from './Router/Product.router.js';
import cartrouter from './Router/Cart.router.js';
import userRouter from './Router/User.router.js';
// Connect to MongoDB

mongoose.connect('mongodb+srv://anupamkaushik3_db_user:rt2hy8ED5w1xxCGe@projectecommerce.ev7uxzg.mongodb.net/').
then(() => {
    console.log("Connected to Database");
})
.catch((err) => {
    console.log("Error connecting to Database", err);
});

// Initialize Express app
let app = express();
app.use(express.json());
let port = 3050; 
app.listen(port, ()=>{console.log(`the server is listening to port : ${port}`)});

// Setup routes
userRouter(app);
productrouter(app);
cartrouter(app);



