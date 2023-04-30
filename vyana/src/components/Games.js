import React from 'react'
import './Games.css'
import GamesList from './GamesList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Badminton from './Badminton';
import Poker from './Poker';
import Snooker from './Snooker';
import Tennis from './Tennis';
import Squash from './Squash';
import Swimming from './Swimming';
import Darts from './Darts';

function Games() {
    return (
        <>
            {/* <BrowserRouter> */}
                <GamesList/>
                <Routes>
                    <Route path='badminton' element={ <Badminton/> }/>
                    <Route path='poker' element={ <Poker/> }/>
                    <Route path='snooker' element={ <Snooker/> }/>
                    <Route path='tennis' element={ <Tennis/> }/>
                    <Route path='squash' element={ <Squash/> }/>
                    <Route path='swimming' element={ <Swimming/> }/>
                    <Route path='darts' element={ <Darts/> }/>
                </Routes>
            {/* </BrowserRouter> */}
        </>
    )
}

export default Games