import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


function Show() {
    
    const [students, setStudents] = useState([])

    async function getAllStudentData(){
        await axios.get("http://localhost:5000/Students").then((response)=>{
            setStudents(response.data)
        }).catch((err)=>{
            alert('There is an error')
        })
    }

    useEffect(()=>{
        getAllStudentData()
    },[])


  return (
    <div>
        <h1 className='text-primary'>This is Show Page</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody className='table-info'>
                {
                    students.map(stud=>{
                        return(
                            <tr key={stud.id}>
                                <th scope="row">{stud.id}</th>
                                <td>{stud.firstname}</td>
                                <td>{stud.lastname}</td>
                                <td>{stud.mobile}</td>
                                <td>{stud.email}</td>
                                <td><NavLink to={`/update/${stud.id}`}><i class="bi bi-pencil-square text-primary"></i></NavLink></td>
                                <td><NavLink to={`/delete/${stud.id}`}><i class="bi bi-trash text-danger"></i></NavLink></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Show