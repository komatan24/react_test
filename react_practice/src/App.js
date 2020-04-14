import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import singlepages from './pages/singlepages.js';
// import singlepages2 from './pages/singlepages2.js';
// import ButtonComponent from './components/ButtonComponent.js';
// import InputComponent from './components/InputComponent.js';
import MessageComponent from './components/MessageComponent.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <InputComponent input type="text" id="input" />
          <ButtonComponent button id="btn" onclick="btn()" /> */}
          <MessageComponent message id="messageArea" />
\          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React */}
        </a>
          <Switch>
            {/* <Route exact path="/" component={singlepages} />
            <Route path="/single2" component={singlepages2} /> */}
            {/* <Route path="/input" component={InputComponent} /> */}
            {/* <Route path="/button" component={ButtonComponent} /> */}
            <Route path="/message" component={MessageComponent} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );

}


export default App;
