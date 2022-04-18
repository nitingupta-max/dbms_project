import React from 'react'
import JsonData from './data2.json'
 function JsonDataDisplay2(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.referee_id}</td>
                    <td>{info.name}</td>
                    <td>{info.dob}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th className='clm'>referee_id</th>
                    <th className='clm'>Name</th>
                    <th className='clm'>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay2;