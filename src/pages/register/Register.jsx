import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { NavLink } from "react-router";
import registerSchema from "./schemas/register-schema";
import { useForm } from "react-hook-form";

const Register = () => {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  return <div className="flex w-full items-center justify-center">
    <div className="card card-border card-md min-w-md">
      <div className="cardbody">
        <h2 className="card-title">Selamat Datang</h2>
        <p>Silahkan lengkapi form dibawah ini</p>

        <form onSubmit={handleSubmit(console.log)}className="space-y-5">
          <label className="floating-label">
            <span>Full Name</span>
           <input type="text" placeholder="Masukkan nama kamu" className="input input-md"  {...register('name')}/>
          </label>  
          <label className="floating-label">
            <span>Full Name</span>
           <input type="text" placeholder="Masukkan email" className="input input-md" {...register('name')}/>
          </label> 
          <label className="floating-label">
            <span>Full Name</span>
           <input 
           type="text" 
           placeholder="Masukkan password" 
           className="input input-md"
           {...register('name')}
           />
          </label>

          <button type="submit" className="btn btn-primary" >
            Buat Akun
          </button>

        </form>
      </div>
    </div>
  </div>
}

export default Register;
