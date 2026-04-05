import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");


//const aplurl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"



app.get("/",(req,res)=>{
    res.render("weatherindex",{Cityname:"",tempindegree:"",humidpercent:"",windspeed:"", feelslike:"", pressure:"", forecastArray:[]});
});



app.post("/result", async (req,res)=>{
   try{
    const city=req.body.city;
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.Api_key}&units=metric`);
    const data=response.data;

    // Fetch forecast data
    const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.Api_key}&units=metric`);
    const forecastList = forecastResponse.data.list;
    const dailyForecasts = [];
    const seenDays = new Set();
    
    for (const item of forecastList) {
        const dateObj = new Date(item.dt * 1000);
        const day = dateObj.toLocaleDateString("en-US", { weekday: 'short' });
        // Gather one data point per day for the next 5 unique days
        if (!seenDays.has(day) && dailyForecasts.length < 5) {
            seenDays.add(day);
            dailyForecasts.push({
                day: day,
                temp: item.main.temp.toFixed(1) + " °C",
                weather: item.weather[0].main // 'Clouds', 'Clear', 'Rain' etc.
            });
        }
    }

    res.render("weatherindex",{
    Cityname:city,
    tempindegree: data.main.temp + " °C",
    humidpercent:data.main.humidity + " %",
    windspeed:data.wind.speed + " Km/h",
    feelslike: data.main.feels_like + " °C",
    pressure: data.main.pressure + " hPa",
    forecastArray: dailyForecasts
    });
   } catch(error){
    console.log("error");
    res.render("weatherindex",{Cityname:"City Not Found",tempindegree:"",humidpercent:"",windspeed:"", feelslike:"", pressure:"", forecastArray:[]});
   } 
});


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

// Export the app for Vercel serverless functions
export default app;