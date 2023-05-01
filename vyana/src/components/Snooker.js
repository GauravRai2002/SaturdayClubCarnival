import React from 'react'
import './Snooker.css'
function Snooker() {

    var matches = [
        {
            day: 'MON, MAY 1 2023',
            group: 'T1',
            team1: 'The Saturday CLub',
            team2: 'Hindustan Club',
            time : '5:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T2',
            team1: 'Calcutta Swimming Club',
            team2: 'Calcutta Punjab Club',
            time : '5:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T1',
            team1: 'Dalhousie Institute',
            team2: 'CC & FC',
            time : '7:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T2',
            team1: 'Tollygunge Club',
            team2: 'Bengal Rowing Club',
            time : '7:00 PM'
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
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Snooker