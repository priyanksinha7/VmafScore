import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScoresPage from './Pages/Scores';
import SamplePage from './Pages/Sample';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/scores" element={<ScoresPage/>}>
     </Route>
     <Route path="/create" element={<SamplePage />}>
     </Route>
  </Routes>
    </BrowserRouter>
);
