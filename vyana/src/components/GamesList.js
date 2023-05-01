import React from 'react'
import './GamesList.css'
import { Link } from 'react-router-dom'

function GamesList() {
    return (
        <>
            <ul className='games-list'>
                <li className='game'>  <Link to='badminton' className='link'> Badminton</Link></li>
                <li className='game'>  <Link to='tabletennis' className='link'>Table Tennis</Link></li>
                <li className='game'> <Link to='snooker' className='link'>Snooker</Link></li>
                <li className='game'> <Link to='tennis' className='link'>Tennis - Semi-Finals</Link></li>
                <li className='game'> <Link to='squash' className='link'>Squash</Link></li>
                <li className='game'> <Link to='swimming' className='link'>Swimming</Link></li>
                <li className='game'> <Link to='darts' className='link'>Darts</Link></li>
            </ul>
        </>
    )
}

export default GamesList