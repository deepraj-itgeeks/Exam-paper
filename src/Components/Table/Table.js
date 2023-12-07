import React from 'react'
import './Table.css'
export default function Table(props) {
    const { state } = props
    return <>
        <div className='container maindiv'>
        <h4 className='Exampaper'>Exam Paper</h4>
            {state.map((data) => {
                return <>
                    <div className='container mt-3'>
                        <div style={{display:"flex",justifyContent:"space-between"}}><h4 style={{marginTop:"20px"}}>Q. {data.question}</h4><p style={{fontWeight:"bold",marginTop:"20px"}}>1 Marks</p></div>
                        <div className='div first' style={{ display: "flex", flexDirection: "row" }}><input type='radio' name='radiobutton' /> 
                        <p style={{ marginLeft: "10px", marginTop:"15px" }}>A. {data.first}</p></div>

                        <div className='div second' style={{ display: "flex", flexDirection: "row" }}><input type='radio' name='radiobutton' /> 
                        <p style={{ marginLeft: "10px", marginTop:"15px" }}>B. {data.second}</p></div>

                        <div className='div third' style={{ display: "flex", flexDirection: "row" }}><input type='radio' name='radiobutton' />
                         <p style={{ marginLeft: "10px", marginTop:"15px" }}>C. {data.third}</p></div>
                         
                        <div className='div four' style={{ display: "flex", flexDirection: "row" }}><input type='radio' name='radiobutton' />
                         <p style={{ marginLeft: "10px", marginTop:"15px" }}>D. {data.four}</p></div>

                         <button className='btn btn-success'>Check Answers</button>

                    </div>
                </>
            })}
        </div>
    </>
}
