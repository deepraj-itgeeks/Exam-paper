
import { Link } from 'react-router-dom'
import './Table.css'
import { useEffect, useState } from 'react'
export default function Table(props) {
    const [type,setType] = useState('no')
    const [id,setId] = useState()
    const { state } = props
    
    const handleChange =(event)=>{
        setType(event.target.value)
        setId(event.target.id)
    }
    return <>

        {
            <div className='container maindiv'>
                <h4 className='Exampaper'>Exam Paper</h4> { type === 'yes' || id === 'checked' ? <Link to="/answer"><button disabled={false} className='btn btn-success'>Check Answers</button></Link>: <button disabled={true} className='btn btn-success'>Check Answers</button>}
                {state.map((data) => {
                    return <>
                        <div className='container mt-3'>
                            <div style={{ display: "flex", justifyContent: "space-between" }}><h4 style={{ marginTop: "20px" }}>Q. {data.question}   </h4><p style={{ fontWeight: "bold", marginTop: "20px" }}>1 Marks</p></div>
                            {
                                data.type === "radio" ? <>  <div className='div first' style={{ display: "flex", flexDirection: "row" }}><input type='radio'value='yes'  onClick={handleChange} name='radiobutton' />
                                    <p style={{ marginLeft: "10px", marginTop: "15px"}}>A. {data.first}</p></div>

                                    <div className='div second' style={{ display: "flex", flexDirection: "row" }}><input type='radio' value='yes'  onClick={handleChange} name='radiobutton' />
                                        <p style={{ marginLeft: "10px", marginTop: "15px", }}>B. {data.second}</p></div>

                                    <div className='div third' style={{ display: "flex", flexDirection: "row" }}><input type='radio' value='yes'  onClick={handleChange} name='radiobutton' />
                                        <p style={{ marginLeft: "10px", marginTop: "15px"}}>C. {data.third}</p></div>

                                    <div className='div four' style={{ display: "flex", flexDirection: "row" }}><input type='radio' value='yes'  onClick={handleChange} name='radiobutton' />
                                        <p style={{ marginLeft: "10px", marginTop: "15px"}}>D. {data.four}</p></div></> : data.type === "checkbox" ?


                                    <> <div className='div first' style={{ display: "flex", flexDirection: "row" }}><input type='checkbox' id='checked' value='yes' onClick={handleChange} name='checkboxbutton' />
                                        <p style={{ marginLeft: "10px", marginTop: "15px" }}>A. {data.first}</p></div>

                                        <div className='div second' style={{ display: "flex", flexDirection: "row" }}><input type='checkbox' id='checked' value='yes' onClick={handleChange} name='checkboxbutton' />
                                            <p style={{ marginLeft: "10px", marginTop: "15px" }}>B. {data.second}</p></div>

                                        <div className='div third' style={{ display: "flex", flexDirection: "row" }}><input type='checkbox' id='checked' value='yes' onClick={handleChange} name='checkboxbutton' />
                                            <p style={{ marginLeft: "10px", marginTop: "15px" }}>C. {data.third}</p></div>

                                        <div className='div four' style={{ display: "flex", flexDirection: "row" }}><input type='checkbox' id='checked' value='yes' onClick={handleChange} name='checkboxbutton' />
                                            <p style={{ marginLeft: "10px", marginTop: "15px" }}>D. {data.four}</p></div></> : ""
                            }


                        </div>
                    </>
                })}
            </div>
        }
        <Link to="/Form"><button className='btn btn-secondary bottombtn'>Go Back</button></Link>
    </>
}
