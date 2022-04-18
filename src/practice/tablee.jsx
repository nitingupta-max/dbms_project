import React from 'react'
import JsonData from './data5.json'
 function JsonDataDisplay5(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.match_num}</td>
                    <td>{info.match_date}</td>
                    <td>{info.host_team_id}</td>
                    <td>{info.guest_team_id}</td>
                    <td>{info.host_team_score}</td>
                    <td>{info.guest_team_score}</td>

                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th className='clm'>match_num</th>
                    <th className='clm'>match_date</th>
                    <th className='clm'>host_team_id</th>
                    <th className='clm'>guest_team_id</th>
                    <th className='clm'>host_team_score</th>
                    <th className='clm'>guest_team_score</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay5;