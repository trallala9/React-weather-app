import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b589e3120ecca54bd814f1ad95ed162e";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,

        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined

    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
    }
    render() {
        return ( <
            div >
            <
            Titles / >
            <
            Form getWeather = {
                this.getWeather
            }
            / > <
            Weather / >
            <
            /div>
        );
    }
}
export default App;
