import React from 'react'
import './Darts.css'

function Darts() {
    var matches = [
        {
            day: 'MON, MAY 1 2023',
            // group: 'T1',
            team1: 'Bengal Rowing Club',
            team2: 'Calcutta Club',
            time : '6:00 PM',
            live : false
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T2',
            team1: 'Dalhousie Institute',
            team2: 'Calcutta Swimming Club',
            time : '6:00 PM',
            live : false
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T1',
            team1: 'The Saturday Club',
            team2: 'Clacutta Club',
            time : '8:00 PM',
            live : false
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T2',
            team1: 'Bengal Rowing Club',
            team2: 'Calcutta Swimming Club',
            time : '8:00 PM',
            live : false
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