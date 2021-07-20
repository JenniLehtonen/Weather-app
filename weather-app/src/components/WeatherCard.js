import React, {useContext} from 'react';
import {Card} from 'react-bootstrap';

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
        console.log(weekdayArr);
	}

    for(let i=0;i<every8th.length;i++)
	{
        every8th[i].weekDay=weekdayArr[i];
	}
    
    console.log(every8th);


    return(
        <div id="cardContainer">
            {every8th.map((item, index) => (
                <Card className="bg-dark text-white" key={index}>
                        <Card.Text>{item.weekDay}</Card.Text>
                        <Card.Title>{Math.round(item.main.temp)}</Card.Title>
                        <Card.Img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                </Card>
            ))}
        </div>
    );
}

export default WeatherCard;