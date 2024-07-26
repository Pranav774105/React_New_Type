import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Update() {
    const {sid}=useParams()
    

    const {register, setValue, handleSubmit} = useForm()
    const navi = useNavigate()

    async function saveData(data){
        await axios.put(`http://localhost:5000/Students/${sid}`, data).then((response)=>{
            alert('data saved succesfully')
            navi('/show')
        }).catch((err)=>{
            alert('There is an error')
        })
    }

    async function getUpdatedData(){
        await axios.get(`http://localhost:5000/Students/${sid}`).then((response)=>{
            setValue("id", response.data.id)
            setValue("firstname", response.data.firstname)
            setValue("lastname", response.data.lastname)
            setValue("mobile", response.data.mobile)
            setValue("email", response.data.email)
        }).catch((err)=>{
            alert('There is an error')
        })
    }

    useEffect(()=>{
        getUpdatedData()
    })


  return (
    <div className='row'>
        <h1 className='text-primary mt-3'>This is Upadte Page</h1>
        <div className='col-md-3'>
            <form onSubmit={handleSubmit(saveData)}>
                <div>
                    <input type="text"{...register("id")} />
                </div>
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
                    <input type="submit" class="btn btn-outline-success" value="Update"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Update