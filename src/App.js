import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "38c812d3e2e2681470d9ca6a83c3c330";

class App extends React.Component {
    render() {
        return ( <
            div >
            <
            Titles / >
            <
            Form / >
            <
            Weather / >
            <
            /div>
        );
    }
}
export default App;
