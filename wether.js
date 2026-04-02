import express from "express";
import axios from "axios"
import bodyParser from "body-parser";
import dotenv from "dotenv";


const app= express();
const port=3000;
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine","ejs");


//const aplurl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"



app.get("/",(req,res)=>{
    res.render("weatherindex",{Cityname:"",tempindegree:"",humidpercent:"",windspeed:""});
});



app.post("/result", async (req,res)=>{
   try{
    const city=req.body.city;
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.Api_key}&units=metric`);
    const data=response.data;
    res.render("weatherindex",{
    Cityname:city,
    tempindegree: data.main.temp + " °C",
    humidpercent:data.main.humidity + " %",
    windspeed:data.wind.speed + " Km/h",
    });
   } catch(error){
    console.log("error");
    res.render("weatherindex",{Cityname:"City Not Found",tempindegree:"",humidpercent:"",windspeed:""});
   } 
});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});