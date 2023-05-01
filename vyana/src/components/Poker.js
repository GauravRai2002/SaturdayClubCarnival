import React from 'react'
import './Poker.css'

function Poker() {

    var matches = [
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Club',
            team2: 'Calcutta Swimming Club',
            time : '6:40 PM',
            winner : ' TBD'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Club',
            team2: 'Royal Calcutta Golf Club',
            time : '7:30 PM',
            winner : ' TBD'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Dalhousie Institute ',
            team2: 'Hindustan Club',
            time : '5:50 PM',
            winner : ' TBD'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing Club ',
            team2: 'CC & FC ',
            time : '6:40 PM',
            winner : ' TBD'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Calcutta Swimming Club ',
            team2: 'Tollygunge Club ',
            time : '7:30 PM',
            winner : ' TBD'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Calcutta Club ',
            team2: 'Calcutta Pubjab Club ',
            time : '8:20 PM',
            winner : ' TBD'
        },
    ]

  return (
    <>
        <table className='table-games'>
            {matches.map((match) => (
                <>
                    <tr className='match-heading'>
                        <th>{match.day}</th>
                    </tr>
                    <tr className='match-data'>
                        <td><strong>{match.team1}</strong> Vs <strong>{match.team2}</strong></td>
                        <td>{match.group}</td>
                        <td>{match.time}</td>
                        <td> Winner :{match.winner}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Poker