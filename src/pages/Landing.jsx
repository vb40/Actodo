import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";
import axios from 'axios';

function Landing() {
    const data = useLocation();
    const [weather, setWeather] = useState({ temp: '...', city: 'city...' });
    const [currentTime, setCurrentTime] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

                if (!weatherApiKey) {
                    throw new Error('Weather API key is missing');
                }

                console.log('REACT_APP_WEATHER_API_KEY:', weatherApiKey);

                // Fetch the weather for Chennai
                const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=${weatherApiKey}`);
                console.log('Weather response:', weatherResponse.data);
                const { temp } = weatherResponse.data.main;

                setWeather({ temp: `${temp}°C`, city: 'Chennai, Tamil Nadu, India' });
            } catch (error) {
                console.error('Error fetching weather:', error);
                if (error.response) {
                    console.error('Response error data:', error.response.data);
                    console.error('Response error status:', error.response.status);
                }
            }
        };

        const updateTimeAndMonth = () => {
            const now = new Date();
            const time = now.toLocaleTimeString();
            const month = now.toLocaleString('default', { month: 'long' });

            setCurrentTime(time);
            setCurrentMonth(month);
        };

        fetchWeather();
        updateTimeAndMonth();

        const intervalId = setInterval(updateTimeAndMonth, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const username = data.state ? data.state.user : 'Guest';

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* Header */}
                <Header username={username} />
                {/* Card */}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={weather.temp} subtitle={weather.city} />
                    <Card bgcolor={"#FD6663"} title={currentMonth} subtitle={currentTime} />
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
                </div>
                {/* Todo Container */}
                <TodoContainer />
            </div>
        </div>
    );
}

export default Landing;
