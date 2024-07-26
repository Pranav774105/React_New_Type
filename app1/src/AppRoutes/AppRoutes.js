import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Student from '../Components/Student'
import Show from '../Components/Show'
import Update from '../Components/Update'
import Delete from '../Components/Delete'

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'student/'}/>}/>
        <Route path='/student' element={<Student/>} />
        <Route path='/show' element={<Show/>} />
        <Route path='/update/:sid' element={<Update/>} />
        <Route path='/delete/:sid' element={<Delete/>} />
    </Routes>
  )
}

export default AppRoutes