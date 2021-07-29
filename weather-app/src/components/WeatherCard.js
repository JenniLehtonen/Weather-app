import React, {useContext} from 'react';
import {Card} from 'react-bootstrap';

import thunderstorm from '../images/thunderstorm.svg';
import drizzle from '../images/drizzle.svg';
import rain from '../images/rain.svg';
import snow from '../images/snow.svg';
import mist from '../images/mist.png';
import clear from '../images/clear.svg';
import clouds from '../images/clouds.svg';

import WeatherContext from '../contexts/weatherContext';

const WeatherCard = () => {
    const weatherContext = useContext(WeatherContext);
    const every8th = weatherContext.every8th;
    console.log(every8th);

    const getWeekdayName = (dateStr, locale) => {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'short' });    
    }

    let weekdayArr = [];
	for(let i=0;i<every8th.length;i++)
	{
        //Get the date from the array
        var dateStr = every8th[i].dt_txt;
        //Split the date
        var dateArr = dateStr.split(" ");
        //Send the day to getWeekdayName function
        var day = getWeekdayName(dateArr[0], "en-EN");
        //Push the weekday name to weekdayArr
		weekdayArr.push(day);
	}

    for(let i=0;i<every8th.length;i++)
	{
        every8th[i].weekDay=weekdayArr[i];

        if(every8th[i].weather[0].main == "Rain"){
            every8th[i].weatherIcon = rain
          } else if (every8th[i].weather[0].main == "Clear"){
            every8th[i].weatherIcon = clear
          } else if (every8th[i].weather[0].main == "Thunderstorm"){
            every8th[i].weatherIcon = thunderstorm
          } else if (every8th[i].weather[0].main == "Drizzle"){
            every8th[i].weatherIcon = drizzle
          } else if (every8th[i].weather[0].main == "Snow"){
            every8th[i].weatherIcon = snow
          } else if (every8th[i].weather[0].main == "Clouds"){
            every8th[i].weatherIcon = clouds
          } else if (every8th[i].weather[0].main == "Mist" || every8th[i].weather[0].main =="Smoke" || every8th[i].weather[0].main == "Haze" || every8th[i].weather[0].main == "Dust" || every8th[i].weather[0].main == "Fog" || every8th[i].weather[0].main == "Sand" || every8th[i].weather[0].main == "Dust" || every8th[i].weather[0].main == "Ash" || every8th[i].weather[0].main == "Squall" || every8th[i].weather[0].main == "Tornado"){
            every8th[i].weatherIcon = mist
          }
	}

    return(
        <div id="cardContainer">
            {every8th.map((item, index) => (
                <div className="futureForecast" key={index}>
                        <h3>{item.weekDay}</h3>
                        <h4>{Math.round(item.main.temp)}</h4>
                        <img src={item.weatherIcon} />
                </div>
            ))}
        </div>
    );
}

export default WeatherCard;