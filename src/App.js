import logo from './logo.svg';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from "./Pages/MainPage/MainPage";
import { Error } from "./Pages/Error/Error";
import { Rules } from "./Pages/Rules/Rules";

// const MainPage = lazy(() => import('./Pages/MainPage/MainPage'));
// const Error404 = lazy(() => import('./Pages/Error/Error'));
// const Rules = lazy(()=> import('./Pages/Rules/Rules'))


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* exact match as / is common with url */}
          <Route exact path='/' element={<MainPage />} />

          <Route path='/terms-and-condition' element={<Rules />} />

          {/* 404 error page when no url matches */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
