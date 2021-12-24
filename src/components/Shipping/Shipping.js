import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = data => {
        console.log(data)
    }
    const {user} = useAuth()
    return (
        <div className="shipping-container">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            
                <input defaultValue={user.displayName} {...register("name")}/>
                <input defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true})} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Your Address" {...register("address", { required: true })} />
                {errors.address && <span className="error">This field is required</span>}
                <input placeholder="Your City" {...register("city", { required: true })} />
                {errors.city && <span className="error">This field is required</span>}
                <input placeholder="Your phone Number" {...register("phone", { required: true })} />
                {errors.phone && <span className="error">This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;