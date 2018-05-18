import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b589e3120ecca54bd814f1ad95ed162e";

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Poznan,pl&appid=${API_KEY}&units=metric`);
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
