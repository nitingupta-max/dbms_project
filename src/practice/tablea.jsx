import React from 'react'
import JsonData from './data1.json'
 function JsonDataDisplay1(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.match_num}</td>
                    <td>{info.referee}</td>
                    <td>{info.assistant_referee_1}</td>
                    <td>{info.assistant_referee_2}</td>
                    <td>{info.fourth_referee}</td>
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
                    <th className='clm'>referee</th>
                    <th className='clm'>assistant_referee_1</th>
                    <th className='clm'>assistant_referee_2</th>
                    <th className='clm'>fourth_referee</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }
 
 export default JsonDataDisplay1;