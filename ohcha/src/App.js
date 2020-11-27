import React from "react";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

import "./App.css";

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Switch location={location}>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie/:id" component={Detail} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <AnimatedSwitch />
        </BrowserRouter>
    );
}

export default App;
