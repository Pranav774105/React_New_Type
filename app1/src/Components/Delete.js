import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function Delete() {
  const { student, setStudent } = useState([])
  const { sid } = useParams()
  const nav = useNavigate()
  
  async function getStudentToDelete(){
    await axios.get(`http://localhost:5000/Students/${sid}`).then((response)=>{
      setStudent(response.data)
    }).catch(()=>{
      console.log('There is an error')
    })
  }

  async function deleteStudent(){
    await axios.delete(`http://localhost:5000/Students/${sid}`).then((response)=>{
      alert('Delete Succesfully')
      nav('/show')
    }).catch((err)=>{
      alert('There is an error')
    })
  }

  useEffect(()=>{
    getStudentToDelete()
  })

  return (
    <div className='container'>
        <h1>This is Delete Page</h1>
      <h1>Are You Sure You Want to Delete <span>{student}</span>???</h1>
      <button type='button' onClick={deleteStudent} className='btn btn-outline-danger col-sm-5'>Yes</button>
      <NavLink to={`/show`} className={'btn btn-outline-warning col-sm-5 float-end'}>No</NavLink>
    </div>
  )
}

export default Delete