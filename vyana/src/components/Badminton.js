import React from 'react'
import './Badminton.css'

function Badminton() {

    var matches = [
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'Hindustan Club ',
            team2: 'Calcutta Swimming Club ',
            time : '4:30 PM',
            live : false,
            winner : ' CSC'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing CLub ',
            team2: 'Calcutta Club ',
            time : '5:00 PM',
            live : false,
            winner : ' BRC'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'CC & FC ',
            team2: 'Hindustan Club ',
            time : '5:00 PM',
            live : false,
            winner : ' CC & FC'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'CC & FC ',
            team2: 'Calcutta Swimming Club ',
            time : '5:00 PM',
            live : false,
            winner : ' CC & FC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Club ',
            time : '4:30 PM',
            live : false,
            winner : ' CC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Punjab Club ',
            team2: 'Calcutta Club',
            time : '5:00 PM',
            live : false,
            winner : ' CPC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Punjab Club',
            time : '6:00 PM',
            live : false,
            winner : ' CPC'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Club',
            team2: 'Dalhousie Club ',
            time : '7:00 PM',
            live : false,
            winner : ' DI'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing Club',
            team2: 'Calcutta Punjab Club ',
            time : '6:00 PM',
            live : false,
            winner : ' BRC'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Royal Calcutta Golf Club',
            team2: 'Dalhousie Institute ',
            time : '7:00 PM',
            live : false,
            winner : ' DI'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Dalhousie Institute ',
            team2: 'Calcutta Punjab Club ',
            time : '8:00 PM',
            live : false,
            winner : ' DI'
        },
        {
            day: 'TUE, MAY 2 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing Club ',
            team2: 'Royal Calcutta Golf Club ',
            time : '9:00 PM',
            live : false,
            winner : ' BRC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - B',
            team1: 'Tollygunge Club ',
            team2: 'Hindustan Club ',
            time : '6:00 PM',
            live : false,
            winner : ' TOLLY'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - B',
            team1: 'The Saturday Club ',
            team2: 'Hindustan Club ',
            time : '7:00 PM',
            live : false,
            winner : ' SATC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - B',
            team1: 'The Saturday Club ',
            team2: 'Tollygunge Club ',
            time : '8:00 PM',
            live : false,
            winner : ' SATC'
        },
        {
            day: 'WED, MAY 3 2023',
            group: 'Group - B',
            team1: 'Tollygunge Club ',
            team2: 'CC & FC ',
            time : '9:00 PM',
            live : false,
            winner : ' TOLLY'
        },
        {
            day: 'THU, MAY 4 2023',
            group: ' ',
            team1: 'Bengal Rowing Club ',
            team2: 'Dalhousie Institute ',
            time : '6:00 PM',
            live : false,
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            group: ' ',
            team1: 'The Saturday Club ',
            team2: 'CC & FC ',
            time : '7:00 PM',
            live : false,
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            group: ' ',
            team1: 'The Saturday Club ',
            team2: 'Calcutta Swimming Club ',
            time : '8:00 PM',
            live : false,
            winner : ' TBD'
        },
        {
            day: 'THU, MAY 4 2023',
            group: ' ',
            team1: 'Tollygunge Club ',
            team2: 'Calcutta Swimming Club ',
            time : '9:00 PM',
            live : false,
            winner : ' TBD'
        },
    ]


    return (<>

        <table className='table-games'>
            {matches.map((match) => (
                <>
                    <tr className='match-heading'>
                        <th>{match.day} <span className={match.live?'live':'not-live'}></span> </th>
                        
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

export default Badminton