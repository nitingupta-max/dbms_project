import React from 'react'
import JsonData from './data3.json'
 function JsonDataDisplay3(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.mgr_id}</td>
                    <td>{info.name}</td>
                    <td>{info.dob}</td>
                    <td>{info.team_id}</td>
                    <td>{info.since}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th className='clm'>mgr_id</th>
                    <th className='clm'>Name</th>
                    <th className='clm'>DOB</th>
                    <th className='clm'>Team_ID</th>
                    <th className='clm'>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay3;