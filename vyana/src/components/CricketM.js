import React from 'react'
import './CricketF.css'

function CricketF() {

    var matches = [
        {
            day: 'WED, MAY 3 2023',
            // group: 'Court - 1',
            team1: 'Hindustan Club ',
            team2: 'The Saturday Club ',
            time : '9:30 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'CCFC ',
            team2: 'Calcutta Punjab Club ',
            time : '3:00 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Bengal Rowing Club ',
            team2: 'Calcutta Club ',
            time : '4:00 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Dalhousie Institute ',
            time : '5:00 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Tollygunge Club ',
            team2: 'The Saturday Club ',
            time : '6:00 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Swimming Club ',
            team2: 'CC & FC ',
            time : '7:00 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Hindustan Club ',
            time : '8:00 PM',
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Punjab Club ',
            team2: 'Calcutta Club ',
            time : '9+:00 PM',
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

export default CricketF