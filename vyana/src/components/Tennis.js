import React from 'react'
import './Tennis.css'

function Tennis() {
    var matches = [
        {
            day: 'SUN, APR 30 2023',
            // group: 'T1',
            team1: 'Group A-1',
            team2: 'Group B-2',
            time : '5:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'T2',
            team1: 'Group B-1',
            team2: 'Group A-2',
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
                        {/* <td>{match.group}</td> */}
                        <td>{match.time}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Tennis