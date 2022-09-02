import React from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { motion } from 'framer-motion';


const Current = () => {
    const dispatch = useDispatch();


    const handleClick = () =>{
        try {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async(position) => {
                    let lat = position.coords.latitude;
                    let lng = position.coords.longitude;
                    const req = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`);
                    const data = req.data;

                    dispatch({
                        type: "WEATHER_DATA",
                        payload: data
                    });
                });
            } else {
                console.warn("Tu navegador no soporta Geolocalización!! ");
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <motion.button whileTap={{ scale: 0.8 }} id='currentLocBtn' onClick={handleClick}>Search current location<img style={{height:"20px", marginLeft:"3px"}} src='https://img.icons8.com/arcade/344/experimental-marker-arcade.png'/></motion.button >
    )
}

export default Current