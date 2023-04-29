import React from 'react'
import './Results.css'

function Results() {
  return (
    <>
        <table className='table-results'>
                <tr className='result-match-heading'>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
                <tr className='result-match-data'>
                    <td>1</td>
                    <td>Team 1</td>
                    <td>18
                    </td>
                </tr>
                {/* <tr className='match-heading'>
                    <th>SAT, APR 29 2023</th>
                </tr> */}
                <tr className='result-match-data'>
                    <td>2</td>
                    <td>Team 2</td>
                    <td>18
                    </td>
                </tr>
                {/* <tr className='match-heading'>
                    <th>SAT, APR 29 2023</th>
                </tr> */}
                <tr className='result-match-data'>
                    <td>3</td>
                    <td>Team 3</td>
                    <td>16
                    </td>
                </tr>
                {/* <tr className='match-heading'>
                    <th>SAT, APR 29 2023</th>
                </tr> */}
                <tr className='result-match-data'>
                    <td>4</td>
                    <td>Team 4</td>
                    <td>14
                    </td>
                </tr>
                {/* <tr className='match-heading'>
                    <th>SAT, APR 29 2023</th>
                </tr> */}
                <tr className='result-match-data'>
                    <td>5</td>
                    <td>Team 5</td>
                    <td>13
                    </td>
                </tr>
            </table>
    </>
  )
}

export default Results