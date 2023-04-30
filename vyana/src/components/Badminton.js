import React from 'react'
import './Badminton.css'

function Badminton() {

    var matches = [
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing Club ',
            team2: 'Royal Calcutta Golf Club',
            time : '4:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - A',
            team1: 'CC & FC ',
            team2: 'Hindustan Club',
            time : '5:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'Bengal Rowing Club ',
            team2: 'Calcutta Club',
            time : '6:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - A',
            team1: 'CC & FC',
            team2: 'Calcutta Swimming Club ',
            time : '7:00 PM'
        },
        {
            day: 'SUN, APR 30 2023',
            group: 'Group - B',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Club',
            time : '8:00 PM'
        },
    ]


    return (<>

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

export default Badminton