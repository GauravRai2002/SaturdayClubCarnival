import React from 'react'
import UpperNav from '../components/UpperNav'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {  } from "react-router-dom"
import Home from './Home';
import Schedule from './Schedule';
import Results from './Results';
import Points from './../components/Points';
import Photos from './../components/Photos';

function Layout() {
  return (
    <>
        <BrowserRouter>
        <UpperNav/>
        <BreadCrumb/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/schedule/*" element={ <Schedule/> } />
                <Route path="/photos" element={ <Photos/> } />
                <Route path="pointstable" element={ <Points/> } />
            </Routes>

        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default Layout