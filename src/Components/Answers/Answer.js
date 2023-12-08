import React from 'react'
import './Answers.css'
export default function Answer(props) {
    const {state} = props
    
  return <>
     <div className='container mt-5'>
      <table className='table' >
        <thead className='table-success'>
           <tr>
              <th>Questions</th>
              <th>Answers</th>
           </tr>
        </thead>
        <tbody>
            {
              state.map((itm)=>{
                return<>
                  <tr>
                    <td>{itm.question}</td>
                    <td>{itm.five}</td>
                  </tr>
                </>
              })
            }
        </tbody>
      </table>
     </div>
  </>
}
