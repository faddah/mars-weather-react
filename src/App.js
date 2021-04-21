// import logo from './logo.svg';
import React from "react";
import './App.css';
import marsAPI from './marsAPI';
import {
  currentSeason,
  dateSelector,
  solDate,
  avg,
  min,
  max,
  readingsCount,
} from "./dateSelectors";
import MarsInsightDescription from "./MarsInstightDescription";
import MarsWeatherTitleHeader from "./MarsWeatherTitleHeader";
import formattedDate from "./formattedDate";
import barometerFormatted from "./barometerFormatted";
import capitalizeWord from "./capitalizeWord";
import './mars-weather.css'

export default function App() {
    console.log(`mars b awll like, wazzzup, marvin?`);

    const getMarsWeather = async() => {
        try {
            console.log("getting weather...");
            const res = await fetch(marsAPI);
            const weather = await res.json();
            console.log("here's the weather");
            console.log({ weather });
            // console.log(weather)
            const weatherKeys = Object.keys(weather);
            // console.log(weatherKeys);
            const marsWeather = weather[weatherKeys[1]];
            const { Last_UTC, PRE, Season } = marsWeather;
            // console.log(PRE);
            const { av, ct, mn, mx } = PRE;
            // console.log(Last_UTC, Season);
            // console.log(av, ct, mn, mx);
            const currentDate = new Date(Last_UTC);
            currentSeason.textContent = capitalizeWord(Season);
            dateSelector.innerHTML = formattedDate(currentDate);
            solDate.textContent = weatherKeys[1];
            min.textContent = barometerFormatted(mn);
            max.textContent = barometerFormatted(mx);
            avg.textContent = barometerFormatted(av);
            readingsCount.textContent = ct;
        } catch (e) {
            console.log(`yo! error, bro... ${e}`);
            // console.log(e)
        }
    };

    return (
      <div className="header">
        <div className="flex-container">
          <div className="main-content">
            <MarsWeatherTitleHeader />
            <MarsInsightDescription />
          </div>
        </div>
      </div>
    );
}