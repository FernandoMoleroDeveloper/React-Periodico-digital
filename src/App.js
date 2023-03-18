import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header/Header';
import Noticias from './components/Noticias/Noticias';
import NoticiasHome from './components/NoticiasHome/NoticiasHome';

// Componentes lazy
const NotFound = React.lazy(() => import("./components/NotFound"));


function App() {
  
  return (
      <div className="app">
        <BrowserRouter>

          <Header></Header>
          

          <Routes>
            <Route path='/noticias' element={<NoticiasHome></NoticiasHome>}></Route>
            <Route path='/noticias/:topic' element={<Noticias></Noticias>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
          </Routes>

        </BrowserRouter>
      </div>
  );
}

export default App;