import React, { useState } from 'react';
import { motion } from 'framer-motion';



const Weather = (props) => {
    const cityData = props.cityData;
    const [flip, setFlip] = useState(false);


    const showIcon = () =>{
      if (cityData.weather[0].main === "Clear") {
        return <img className='weatherIcon' id="clear" src="https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png" alt=''/>
      } else if(cityData.weather[0].main==="Clouds") {
        return <img className='weatherIcon' id="clouds" src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt=''/>
      } else if (cityData.weather[0].main==="Rain") {
        return <img className='weatherIcon' src="https://icon-library.com/images/rainy-weather-icon/rainy-weather-icon-12.jpg" id="rain" alt=''/>
      } else if(cityData.weather[0].main==="Thunderstorm"){
        return <img className='weatherIcon' src="https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-thunderstorm-512.png" id='thunderstorm' alt=''/>
      } else if(cityData.weather[0].main==="Fog"){
        return <img className='weatherIcon' src='https://cdn-icons-png.flaticon.com/512/2531/2531622.png' id='fog' alt=''/>
      } else if(cityData.weather[0].main === "Drizzle"){
        return <img className='weatherIcon' id='drizzle' src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png"  alt=''/>
      } else if (cityData.weather[0].main === "Haze"){
        return <img className='weatherIcon' src="https://cdn-icons-png.flaticon.com/512/1779/1779807.png" alt="" />
      }
    }

    const countryFlag = () =>{
      return <img style={{width: "25px", height: "20px"}} src={`https://countryflagsapi.com/png/${cityData.sys.country}`} alt=""/>
    }

    const handleClick = () =>{
      if (flip===false) {
        setFlip(true);
      } else{
        setFlip(false);
      }
    }

  return (
    <motion.section 
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    layout
    whileTap={{ scale: 0.7 }}
    onClick={handleClick}       
    >
        {flip===true?
        <article style={{display : "flex", flexDirection: "column", justifyContent: "center"}}>
          <p><span className='details'>Feels like degrees:</span> {(cityData.main.feels_like - 273.15).toFixed(2)} Cº</p>
          <p><span className='details'>Humidity</span> {cityData.main.humidity}%</p>
          {cityData.main.grnd_level?<p>Ground level {cityData.main.grnd_level} mts</p>:""}
          <p><span className='details'>Pressure</span> {cityData.main.pressure} hPa</p>
          <p><span className='details'>Wind:</span></p>
          <li><span className='details'>Degrees:</span> {cityData.wind.deg}º</li>
          <li><span className='details'>Speed:</span> {cityData.wind.speed} km/h</li>
          <p><span className='details'>Coordinates:</span></p>
          <li><span className='details'>Latitude:</span> {cityData.coord.lat}</li>
          <li><span className='details'>Latitude:</span> {cityData.coord.lon}</li>
        </article>
        :
        <article>
          <div id='countryData'>
            {countryFlag()}
            <h2>{cityData.name}</h2>
          </div>
          <div>
            <div>{showIcon()}</div>
            <h1>{(cityData.main.temp - 273.15).toFixed(2)} Cº</h1> 
          </div>
          <div className='minmax'>
            <p><img style={{height:"12px"}} src='https://img.icons8.com/office/344/long-arrow-up.png' alt=''/>Max: {(cityData.main.temp_max - 273.15).toFixed(2)} Cº</p>
            <p><img style={{height:"12px"}} src='https://img.icons8.com/office/344/long-arrow-down.png' alt=''/>Min: {(cityData.main.temp_min - 273.15).toFixed(2)} Cº</p>
          </div>
        </article>}   

    </motion.section>
  )
}

export default Weather