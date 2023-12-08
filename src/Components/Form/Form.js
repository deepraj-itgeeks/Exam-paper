import React, { useState } from 'react'
import './Form.css'
import { useDispatch } from 'react-redux';
import { changeCounter } from '../../redux-app/MasterSlice';
import { Link } from 'react-router-dom';
export default function Form() {
    const [selected, setSelected] = useState('');
    const [input, setInput] = useState([])

    const dispatch = useDispatch([])

    const handleChange = (event) => {
        setSelected(event.target.value);
    }

    const Input = (event) => {
        var type = event.target.id;
        var final = event.target.value;
        var name = event.target.name;
        setInput(input => ({ ...input, [name]: final,type }))

    }

    const GoTOStore = () => {
        dispatch(changeCounter(input))
    }

    var question = input.question
    var first = input.first;
    var second = input.second;
    var third = input.third;
    var four = input.four
    var five = input.five
    return <>
        <div className='container mt-5 div1'>
          <div className='innerdiv'>
          <form typeof="submit">
                <div className="form-group">
                    <div className='textinput'>
                        <label className='label1'>Enter Questions</label>
                        <input type="text" name='question' className="form-control" placeholder="Enter here" onInput={Input} />

                        {
                            selected === "radio" ? <div className='radioinput'>
                                <div style={{ display: "flex" }}><input type='radio' name='radiobutton'  /><input type='text' id='radio' name='first' placeholder='Option'  style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='radio' name='radiobutton'  /><input type='text' id='radio' name='second' placeholder='Option'  style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='radio' name='radiobutton'  /><input type='text' id='radio' name='third' placeholder='Option' style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='radio' name='radiobutton'  /><input type='text' id='radio' name='four' placeholder='Option' style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='text' id='radio' name='five' placeholder='Answer' style={{ marginLeft: "23px", height: "20px", width: "120px" , marginTop:"10px" }} onInput={Input} /></div>
                            </div> : selected === "checkbox" ? <div className='checkboxinput'>
                                <div style={{ display: "flex" }}><input type='checkbox' name='checkboxbutton' /><input type='text' id='checkbox' placeholder='Option' name='first' style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='checkbox' name='checkboxbutton'  /><input type='text' id='checkbox' placeholder='Option' name='second' style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='checkbox' name='checkboxbutton'  /><input type='text' id='checkbox' placeholder='Option' name='third' style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='checkbox' name='checkboxbutton'  /><input type='text' id='checkbox' placeholder='Option' name='four' style={{ marginLeft: "10px", height: "20px", width: "120px" }} onInput={Input} /></div>
                                <div style={{ display: "flex" }}><input type='text' id='checkbox' name='five' placeholder='Answer' style={{ marginLeft: "23px", height: "20px", width: "120px", marginTop:"10px" }} onInput={Input} /></div>
                            </div> : ""
                        }
                    </div>

                    <div className='optioninput'>
                        <label className='label2 form-group'>Select Answer Type</label>
                        <select value={selected} onChange={handleChange} className='form-control'>
                            <option value="">--Choose an option--</option>
                            <option value="radio">Radio</option>
                            <option value="checkbox">CheckBox</option>
                        </select>
                    </div>
                </div>

            </form>


            {
                input == null || input === undefined || input === "" ||
                    input.first == null || input.first === undefined || input.first === "" ||
                    input.second == null || input.second === undefined || input.second === "" ||
                    input.third == null || input.third === undefined || input.third === "" ||
                    input.four == null || input.four === undefined || input.four === "" ||
                    input.five == null || input.five === undefined || input.five === "" ||
                    first === second || first === third || first === four ||
                    second === first || second === third || second === four ||
                    third === first || third === second || third === four ||
                    four === first || four === second || four === third ||
                    question == null || question === undefined || question == "" ? <button disabled={true} className='btn btn-success btn-lg button1' onClick={() => { GoTOStore() }}>submit</button> : <Link to='/table'><button disabled={false} className='btn btn-success btn-lg button1' onClick={() => { GoTOStore() }}>submit</button></Link>
            }
  
          </div>
        </div>
    </>
}
