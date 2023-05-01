import React from 'react'
import './Squash.css'

function Squash() {

    var matches = [
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 1',
            team1: 'Calcutta Punjab CLub ',
            team2: 'Tollygunge Club ',
            time : '5:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 2',
            team1: 'Bengal Rowing Club ',
            team2: 'CC & FC',
            time : '5:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 1',
            team1: 'Saturday Club ',
            team2: 'Calcutta Swimming Club',
            time : '6:30 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Court - 2',
            team1: 'Hindustan Club ',
            team2: 'Dalhousie Institute ',
            time : '6:30 PM'
        }
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
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Squash