import React from 'react'
import './Squash.css'

function Squash() {

    var matches = [
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 1',
            team1: 'Calcutta Punjab CLub ',
            team2: 'Tollygunge Club ',
            time : '5:00 PM',
            winner : ' CANCELLED'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 2',
            team1: 'Bengal Rowing Club ',
            team2: 'CC & FC',
            time : '5:00 PM',
            winner : ' CANCELLED'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 1',
            team1: 'Saturday Club ',
            team2: 'Calcutta Swimming Club',
            time : '6:30 PM',
            winner : ' SATC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 2',
            team1: 'Hindustan Club ',
            team2: 'Dalhousie Institute ',
            time : '6:30 PM',
            winner : ' CANCELLED'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Court - 1',
            team1: 'Calcutta Pubjab Club ',
            team2: 'Calcuttla Swimming Club ',
            time : '5:00 PM',
            winner : ' WALKOVER'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Court - 2',
            team1: 'Hindustan Club ',
            team2: 'CC & FC ',
            time : '5:00 PM',
            winner : ' TBD'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Court - 1',
            team1: 'The Saturday Club ',
            team2: 'Tollygunge Club ',
            time : '6:30 PM',
            winner : ' TOLLY'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Court - 2',
            team1: 'Bengal Rowing Club ',
            team2: 'Dalhousie Institute ',
            time : '5:00 PM',
            winner : ' WALKOVER'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Semi-Final',
            team1: 'Tollygunge Club ',
            team2: 'Hindustan Club ',
            time : '6:00 PM',
            winner : ' TBD'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Semi-Final',
            team1: 'The Saturday Club ',
            team2: 'Bengal Rowing Club ',
            time : '6:00 PM',
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

export default Squash