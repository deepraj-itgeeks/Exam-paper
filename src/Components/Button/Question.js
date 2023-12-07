import React from 'react'
import './Question.css'
import { Modal } from 'bootstrap'
import { Link } from 'react-router-dom'
export default function Question() {
    return <>
        {/* Trigger The Modal With Button */}
        <Link to="/Form"><button type="button" class="btn btn-success btn-lg button1">Open Question Paper Generater</button></Link>

    </>
}
