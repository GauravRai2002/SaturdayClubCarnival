import React from 'react'
import './Swimming.css'

function Swimming() {
    var matches = [
        {
            day: 'MON, MAY 1 2023',
            // group: 'Court - 1',
            team1: 'Dalhousie Institute ',
            team2: 'Calcutta Punjab CLub ',
            time : '6:30 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'Court - 2',
            team1: 'Bengal Rowing Club ',
            team2: 'Hindustan Club ',
            time : '6:30 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'Group - B',
            team1: 'The Saturday Club ',
            team2: 'Tollygunge Club',
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