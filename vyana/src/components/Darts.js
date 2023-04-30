import React from 'react'
import './Darts.css'

function Darts() {
    var matches = [
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'CC & FC',
            team2: 'Hindustan Club',
            time : '6:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T2',
            team1: 'Tollygunge Club',
            team2: 'Calcutta Club',
            time : '6:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'Tollygunge Club',
            team2: 'CC & FC',
            time : '8:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T2',
            team1: 'Hindustan Club',
            team2: 'Calcutta Punjab Club',
            time : '8:00 PM'
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

export default Darts