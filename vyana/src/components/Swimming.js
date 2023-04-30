import React from 'react'
import './Swimming.css'

function Swimming() {
    var matches = [
        {
            day: 'SUN, APR 30 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Dalhousie Institute',
            time : '5:30 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'Court - 2',
            team1: 'Tollygunge Club',
            team2: 'CC & FC',
            time : '6:30 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'Group - B',
            team1: 'Saturday Club ',
            team2: 'Hindustan Club',
            time : '8:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'Group - A',
            team1: 'Calcutta Swimming Club',
            team2: 'Calcutta Club',
            time : '8:30 PM'
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
                        {/* <td>{match.group}</td> */}
                        <td>{match.time}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Swimming