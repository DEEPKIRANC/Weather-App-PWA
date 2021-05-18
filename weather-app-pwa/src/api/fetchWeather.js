import axios from "axios";

const FETCH_URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY=process.env.REACT_APP_API_KEY;

export const fetchWeather=async(query)=>{
    const { data }=await axios.get(FETCH_URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY
        }
    });

    return data; 
}