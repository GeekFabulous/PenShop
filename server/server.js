//this will import express module
import { express } from "express";

//this is to instantiate express
const app = express();

//This is to get a response from the client side 
app.get("/",(req,res) => {
    res.send("API is Up and running!");
});

//this is to set a port for the server to run on
app.listen(5000, console.log("Our server is up and runnong "));