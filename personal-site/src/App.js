import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainApp from './main/MainApp';
import PalavraApp from './palavra/PalavraApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes starting with /palavra render the Palavra PWA application */}
        <Route path="/palavra/*" element={<PalavraApp/>} />
        {/* All other routes render the main site */}
        <Route path="/*" element={<MainApp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;