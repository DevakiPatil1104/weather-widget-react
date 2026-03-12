import { useState } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 19.4,
        humidity: 36,
        temp: 20.37,
        tempMax: 20.37,
        tempMin: 20.37,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Weather App by Sigma</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}