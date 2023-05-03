import React from 'react'
import './Swimming.css'

function Swimming() {
    var matches = [
        {
            day: 'SUN, APR 30 2023',
            // group: 'Court - 1',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Dalhousie Institute ',
            time : '5:00 PM',
            winner : ' DI'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'Court - 1',
            team1: 'Tollygunge Club ',
            team2: 'CC & FC ',
            time : '6:30 PM',
            winner : ' TOLLY'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'Court - 1',
            team1: 'The Saturday Club ',
            team2: 'Hindustan Club ',
            time : '6:30 PM',
            winner : ' HC'
        },
        {
            day: 'SUN, APR 30 2023',
            // group: 'Court - 1',
            team1: 'Calcutta Swimmming Club ',
            team2: 'Calcutta Club ',
            time : '6:30 PM',
            winner : ' CC'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'Court - 1',
            team1: 'Dalhousie Institute ',
            team2: 'Calcutta Punjab CLub ',
            time : '6:30 PM',
            winner : ' DI'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'Court - 2',
            team1: 'Bengal Rowing Club ',
            team2: 'Hindustan Club ',
            time : '6:30 PM',
            winner : ' BRC'
        },
        {
            day: 'MON, MAY 1 2023',
            // group: 'Group - B',
            team1: 'The Saturday Club ',
            team2: 'Tollygunge Club',
            time : '8:30 PM',
            winner : ' TOLLY'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'Group - B',
            team1: 'The Saturday Club ',
            team2: 'CC & FC',
            time : '6:30 PM',
            winner : ' SATC'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'Group - B',
            team1: 'Dalhousie Institute ',
            team2: 'Calcutta Club',
            time : '7:30 PM',
            winner : ' DI'
        },
        {
            day: 'TUE, MAY 2 2023',
            // group: 'Group - B',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Swimming Club',
            time : '8:30 PM',
            winner : ' CSC'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Group - B',
            team1: 'CC & FC ',
            team2: 'Hindustan Club ',
            time : '5:30 PM',
            winner : ' TBD'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Group - B',
            team1: 'Bengal Rowing Club ',
            team2: 'Tollygunge Club ',
            time : '6:30 PM',
            winner : ' TBD'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Group - B',
            team1: 'Calcutta Punjab Club ',
            team2: 'Calcutta Club ',
            time : '7:30 PM',
            winner : ' TBD'
        },
        {
            day: 'WED, MAY 3 2023',
            // group: 'Group - B',
            team1: 'Calcutta Swimming Club ',
            team2: 'Dalhousie Institute ',
            time : '8:30 PM',
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

export default Swimming