import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import "./RegisterationForm.css"

function RegisterationForm(){
    
  
    const registerSchema = yup.object({
        "name": yup.string().required("Name is required"),
        "email": yup.string().email("Invalid email").required("Email is required"),
        "password": yup.string().required("Password is required"),
        "rePassword": yup
            .string()
            .required("Re-Password is required")
            .oneOf([yup.ref("password")], "Passwords must match"),
        
    });
    const {register, handleSubmit, 
        formState: {errors}} = useForm({resolver: yupResolver(registerSchema)});


    const onSubmit = (data)=>{
        console.log("Form submitted" , data);
    }
    return (
        
        <div className={"registeration-form-container p-[2rem] block border-2   border-gray-500 rounded-2xl p-3 "}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor={"name"}>Name:</label>
                <input className={"input-field w-[20rem] border rounded-2xl border-gray-500"}  id={"name"}   type="text" {...register("name" )} />
                <p>{errors.name?.message}</p>

                <label htmlFor={"email"}> Email </label>
                <input  className={" input-field  w-[20rem] border rounded-2xl border-gray-500"} id={"email"} type="text" {...register("email" )} />
                <p>{errors.email?.message}</p>

                <label htmlFor={"password"}>Password</label>
                <input  className={" input-field  w-[20rem] border rounded-2xl border-gray-500"} id={"password"} type="password" {...register("password")} />
                <p>{errors.password?.message}</p>

                <label htmlFor={"rePassword"}>Re type Password</label>
                <input className={" input-field  w-[20rem] border rounded-2xl border-gray-500"} id={"rePassword"} type="password" {...register("rePassword")} />
                <p>{errors.rePassword?.message}</p>
                
                <button className={"w-[20rem] p-2 py-2 bg-green-500  border rounded-2xl border-gray-500"} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterationForm;