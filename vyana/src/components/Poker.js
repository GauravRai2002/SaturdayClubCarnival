import React from 'react'
import './Poker.css'

function Poker() {

    var matches = [
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Club',
            team2: 'Calcutta Swimming Club',
            time : '6:40 PM',
            winner : ' CSC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Club',
            team2: 'Royal Calcutta Golf Club',
            time : '7:30 PM',
            winner : ' RCGC'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Dalhousie Institute ',
            team2: 'Hindustan Club',
            time : '5:50 PM',
            winner : ' DI'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing Club ',
            team2: 'CC & FC ',
            time : '6:40 PM',
            winner : ' BRC'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Calcutta Swimming Club ',
            team2: 'Tollygunge Club ',
            time : '7:30 PM',
            winner : ' CSC'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Calcutta Club ',
            team2: 'Calcutta Pubjab Club ',
            time : '8:20 PM',
            winner : ' CPC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - B',
            team1: 'Tollygunge Club ',
            team2: 'Calcutta Pubjab Club ',
            time : '5:50 PM',
            winner : ' TOLLY'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - B',
            team1: 'Calcutta Pubjab Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '6:40 PM',
            winner : ' CPC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - A',
            team1: 'Dalhousie Institute ',
            team2: 'Bengal Rowing Club ',
            time : '7:30 PM',
            winner : ' BRC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - A',
            team1: 'Hindustan Club ',
            team2: 'CC & FC ',
            time : '8:20 PM',
            winner : ' CCFC'
        },
        {
            day: 'THU, MAY 4 2023',
            group: 'Group - B',
            team1: 'CC & FC ',
            team2: 'Dalhousie Institute ',
            time : '5:00 PM',
            winner : ' DI'
        },
        {
            day: 'THU, MAY 4 2023',
            group: 'Group - B',
            team1: 'Calcutta Swimming Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '5:50 PM',
            winner : ' CSC'
        },
        {
            day: 'THU, MAY 4 2023',
            group: 'Group - A',
            team1: 'The Saturday Club ',
            team2: 'Hindustan Club ',
            time : '6:40 PM',
            winner : ' SATC'
        },
        {
            day: 'THU, MAY 4 2023',
            group: 'Group - A',
            team1: 'Bengal Rowing Club ',
            team2: 'The Saturday Club ',
            time : '7:30 PM',
            winner : ' SATC'
        },
        {
            day: 'THU, MAY 4 2023',
            group: 'Group - A',
            team1: 'Tollygunge Club ',
            team2: 'Calcutta Club ',
            time : '8:20 PM',
            winner : ' TOLLY'
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

export default Poker