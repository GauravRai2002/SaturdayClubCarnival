import React from 'react'
import './CricketF.css'

function CricketF() {

    var matches = [
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 1',
            team1: 'The Saturday Club ',
            team2: 'Dalhousie Institute ',
            time : '5:00 PM',
            winner : ' SATC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 1',
            team1: 'CC & FC ',
            team2: 'Calcutta Punjab Club ',
            time : '5:50 PM',
            winner : ' CCFC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 1',
            team1: 'The Saturday Club ',
            team2: 'Calcutta Club ',
            time : '6:40 PM',
            winner : ' SATC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'CC & FC ',
            time : '7:30 PM',
            winner : ' CCFC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Club ',
            team2: 'Dalhousie Institute ',
            time : '8:20 PM',
            winner : ' CC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 2',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Punjab Club ',
            time : '9:10 PM',
            winner : ' CPC'
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
                        <td> Winner :{match.winner}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default CricketF