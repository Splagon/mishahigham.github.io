import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainApp from './main/MainApp';
import PalavraApp from './palavra/PalavraApp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Routes starting with /palavra render the Palavra PWA application */}
        <Route path="/palavra" component={PalavraApp} />
        {/* All other routes render the main site */}
        <Route path="/" component={MainApp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;