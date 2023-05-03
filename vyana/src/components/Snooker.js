import React from 'react'
import './Snooker.css'
function Snooker() {

    var matches = [
        {
            day: 'SUN, APR 30 2023',
            group: 'T1',
            team1: 'Bengal Rowing Club',
            team2: 'CC & FC',
            time : '5:00 PM',
            winner : ' BRC'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'T2',
            team1: 'Tollygunge Club',
            team2: 'Calcutta Club',
            time : '5:00 PM',
            winner : ' TOLLY'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'T1',
            team1: 'Calcutta Swimming Club',
            team2: 'Royal Calcutta Golf Club',
            time : '7:30 PM',
            winner : ' CSC'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'T2',
            team1: 'The Saturday Club',
            team2: 'Calcutta Punjab Club',
            time : '7:30 PM',
            winner : ' CSC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T1',
            team1: 'The Saturday CLub',
            team2: 'Hindustan Club',
            time : '5:00 PM',
            winner : ' HC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T2',
            team1: 'Calcutta Swimming Club',
            team2: 'Calcutta Punjab Club',
            time : '5:00 PM',
            winner : ' CPC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T1',
            team1: 'Dalhousie Institute',
            team2: 'CC & FC',
            time : '7:00 PM',
            winner : ' DI'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'T2',
            team1: 'Tollygunge Club',
            team2: 'Bengal Rowing Club',
            time : '7:00 PM',
            winner : ' TOLLY'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'T1',
            team1: 'Tollygunge Club',
            team2: 'CC & FC',
            time : '5:00 PM',
            winner : ' TC'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'T2',
            team1: 'Dalhousie Institute',
            team2: 'Calcutta Club',
            time : '5:00 PM',
            winner : ' DI'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'T1',
            team1: 'Calcutta Swimming CLub',
            team2: 'Hindustan Club',
            time : '7:30 PM',
            winner : ' HC'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'T2',
            team1: 'Royal Calcutta Golf CLub',
            team2: 'Calcutta Punjab Club',
            time : '7:30 PM',
            winner : ' CPC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'T1',
            team1: 'A1 ',
            team2: 'B2 ',
            time : '6:00 PM',
            winner : ' TBD'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'T2',
            team1: 'B1 ',
            team2: 'A2 ',
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
                        <td>{match.group}</td>
                        <td>{match.time}</td>
                        <td> Winner :{match.winner}</td>
                    </tr>
                </>
            ))}
            
        </table>
    </>
  )
}

export default Snooker