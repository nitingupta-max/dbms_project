import React from 'react'
import JsonData from './data4.json'
 function JsonDataDisplay4(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.player_id}</td>
                    <td>{info.name}</td>
                    <td>{info.dob}</td>
                    <td>{info.jersey_no}</td>
                    <td>{info.team_id}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th className='clm'>Player_id</th>
                    <th className='clm'>Name</th>
                    <th className='clm'>DOB</th>
                    <th className='clm'>jersey_no</th>
                    <th className='clm'>Team_ID</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay4;