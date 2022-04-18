import React from 'react'
import JsonData from './data.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.team_id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                    <td>{info.playground}</td>
                    <td>{info.jersey_home_color}</td>
                    <td>{info.jersey_away_color}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th className='clm'>Team ID</th>
                    <th className='clm'>Name</th>
                    <th className='clm'>City</th>
                    <th className='clm'>playground</th>
                    <th className='clm'>jersey_home_color</th>
                    <th className='clm'>jersey_away_color</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay;