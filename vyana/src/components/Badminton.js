import React from 'react'
import './Badminton.css'

function Badminton() {

    var matches = [
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Club ',
            time : '4:30 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Punjab Club ',
            team2: 'Calcutta Club',
            time : '5:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Royal Calcutta Golf Club ',
            team2: 'Calcutta Punjab Club',
            time : '6:00 PM'
        },
        {
            day: 'MON, MAY 1 2023',
            group: 'Group - B',
            team1: 'Calcutta Club',
            team2: 'Dalhousie Club ',
            time : '7:00 PM'
        }
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