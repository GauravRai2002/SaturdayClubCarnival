import React from 'react'
import './GamesList.css'
import { Link } from 'react-router-dom'

function GamesList() {

    // var gameToggle = document.getElementsByClassName('game')
    var i
    setTimeout(() => {
        for (i = 0; i < 7; i++) {
            document.getElementsByClassName('game')[i].addEventListener('click', event => {
                document.getElementsByClassName('active')[0].classList.remove('active');
                event.target.parentElement.classList.add('active')
            }, 500);
        }
    })


    return (
        <>
            <ul className='games-list'>
                <li className='game active' >  <Link to='badminton' className='link'> Badminton</Link></li>
                <li className='game' >  <Link to='tabletennis' className='link'>Table Tennis</Link></li>
                <li className='game' > <Link to='snooker' className='link'>Snooker</Link></li>
                <li className='game' > <Link to='tennis' className='link'>Tennis -Finals</Link></li>
                <li className='game' > <Link to='squash' className='link'>Squash</Link></li>
                <li className='game' > <Link to='swimming' className='link'>Swimming</Link></li>
                <li className='game' > <Link to='darts' className='link'>Darts</Link></li>
            </ul>
        </>
    )
}

export default GamesList