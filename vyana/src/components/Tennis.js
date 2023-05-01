import React from 'react'
import './Tennis.css'

function Tennis() {
    var matches = [
        {
            day: 'MON, MAY 1 2023',
            // group: 'T1',
            team1: 'Tollygunge Club',
            team2: 'Calcutta Swimming Club',
            time : '5:00 PM',
            winner : ' TOLLY'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'T2',
            team1: 'The Saturday Club',
            team2: 'CC & FC',
            time : '6:30 PM',
            winner : ' --'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'T2',
            team1: 'Tollygunge Club',
            team2: 'CC & FC',
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
                        {/* <td>{match.group}</td> */}
                        <td>{match.time}</td>
                        <td> Winner :{match.winner}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Tennis