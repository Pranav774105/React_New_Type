import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Student() {

    const {register,handleSubmit}=useForm()
    const nav = useNavigate()

    async function saveData(data){
      await axios.post("http://localhost:5000/Students", data).then((response)=>{
        alert('Data saved successfully')
        nav('/show')
      }).catch((err)=>{
        alert('There is an error')
      })
  }
  return (
    <div className='container'>
        <center><h1>This is Add Page</h1></center>
        <form onSubmit={handleSubmit(saveData)}>
          <div className="row">
            <div className="mb-3">
              <h1 className="text-primary text-center">Register Student</h1>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Firstname" {...register("firstname")}/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Lastname" {...register("lastname")}/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Mobile" {...register("mobile")}/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Email" {...register("email")}/>
                </div>
                <div class="mb-3 text-center">
                  <input type="submit" class="btn btn-success"/>
                </div>
              </div>
            </div>
          </form>
    </div>
  )
}

export default Student