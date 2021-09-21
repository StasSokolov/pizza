import React from "react";
import {Route} from "react-router-dom";

import {Header} from "./components";
import {Cart, Home} from "./pages";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route path='/cart' component={Cart}/>
            </div>
        </div>
    );
}


export default App