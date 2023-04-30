import React from 'react'
import './Poker.css'

function Poker() {

    var matches = [
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'Finals',
            team2: 'Finals',
            time : '5:00 PM'
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

export default Poker