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
            winner : ' SATC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'CCFC ',
            team2: 'Calcutta Punjab Club ',
            time : '3:00 PM',
            winner : ' CPC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Bengal Rowing Club ',
            team2: 'Calcutta Club ',
            time : '4:00 PM',
            winner : ' BRC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Dalhousie Institute ',
            time : '5:00 PM',
            winner : ' DI'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Tollygunge Club ',
            team2: 'The Saturday Club ',
            time : '6:00 PM',
            winner : ' SATC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Swimming Club ',
            team2: 'CC & FC ',
            time : '7:00 PM',
            winner : ' CCFC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Hindustan Club ',
            time : '8:00 PM',
            winner : ' HC'
        },
        {
            day: 'THU, MAY 4 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Punjab Club ',
            team2: 'Calcutta Club ',
            time : '9:00 PM',
            winner : ' CPC'
        },
        // {
        //     day: 'FRI, MAY 5 2023',
        //     // group: 'Court - 1',
        //     team1: 'Calcutta Punjab Club ',
        //     team2: 'Calcutta Swimming Club ',
        //     time : '5:00 PM',
        //     winner : ' CSC'
        // },
        // {
        //     day: 'FRI, MAY 5 2023',
        //     // group: 'Court - 1',
        //     team1: 'Hindustan Club ',
        //     team2: 'Dalhousie Institute ',
        //     time : '5:30 PM',
        //     winner : ' HC'
        // },
        // {
        //     day: 'FRI, MAY 5 2023',
        //     // group: 'Court - 1',
        //     team1: 'Royal Calcutta Golf Club ',
        //     team2: 'Tollygunge Club ',
        //     time : '6:00 PM',
        //     winner : ' HC'
        // },
        // {
        //     day: 'FRI, MAY 5 2023',
        //     // group: 'Court - 1',
        //     team1: 'Calcutta Punjab Club ',
        //     team2: 'Bengal Rowing Club ',
        //     time : '6:00 PM',
        //     winner : ' HC'
        // },
        // {
        //     day: 'FRI, MAY 5 2023',
        //     // group: 'Court - 1',
        //     team1: 'CC & FC ',
        //     team2: 'Bengal Rowing Club ',
        //     time : '6:30 AM',
        //     winner : ' HC'
        // },
        {
            day: 'FRI, MAY 5 2023',
            // group: 'Court - 1',
            team1: 'Dalhousie Institute ',
            team2: 'The Saturday Club ',
            time : '7:00 AM',
            winner : ' TBD'
        },
        {
            day: 'FRI, MAY 5 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Club ',
            team2: 'Calcutta Swimming Club ',
            time : '8:00 AM',
            winner : ' TBD'
        },
        {
            day: 'FRI, MAY 5 2023',
            // group: 'Court - 1',
            team1: 'Hindustan Club ',
            team2: 'Tollygunge Club ',
            time : '9:00 AM',
            winner : ' TBD'
        },
        {
            day: 'SAT, MAY 6 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Club ',
            team2: 'CC & FC ',
            time : '7:00 AM',
            winner : ' TBD'
        },
        {
            day: 'SAT, MAY 6 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '8:00 AM',
            winner : ' TBD'
        },
        {
            day: 'SAT, MAY 6 2023',
            // group: 'Court - 1',
            team1: 'The Saturday Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '9:00 AM',
            winner : ' TBD'
        },
        {
            day: 'SAT, MAY 6 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Swimming Club ',
            team2: 'Bengal Rowing Club ',
            time : '10:00 AM',
            winner : ' TBD'
        },
        {
            day: 'SAT, MAY 6 2023',
            // group: 'Court - 1',
            team1: 'Dalhousie Institute ',
            team2: 'Tollygunge Club ',
            time : '11:00 AM',
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