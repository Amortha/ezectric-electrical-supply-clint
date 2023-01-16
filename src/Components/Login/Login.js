import React from 'react';
import Loding from '../Shared/Loding';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let signInError;
  const navigate =useNavigate();
  const location =useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loding></Loding>
  }

  if (error || gError) {
    signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  }
  return (
    <div className={`w-full bg-cover h-auto bg-[url('https://i.ibb.co/kM3ttgx/istockphoto-1323143709-612x612.jpg')]`}>
      <div className='w-3/5 grid lg:grid-cols-2  lg:mx-auto shadow-7xl card-body '>
        <div className=' w-80 bg-gradient-to-r from-[#022079] to-[#00bfff] '>
          <img className=' lg:mx-auto ' src='https://i.ibb.co/BtvStn5/gadgets.png' alt='' />
        </div>
        <div className=''>
          <h2 className='text-center text-2xl font-bold text-blue-900'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold font-black">Email</span>
              </label>
              <input type="email"
                placeholder="your Email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-semibold font-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full "
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                  }
                })}
              />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

              </label>
            </div>

            {signInError}
            <input className='btn text-white w-full mt-3  bg-gradient-to-r from-[#022079] to-[#00bfff]' type="submit" value="Login" />
          </form>
          <p className='mt-4'>New to ezectric-electrical-supply ?<Link className=' text-blue-800 font-semibold' to="/signup">Create New Account</Link> </p>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className='w-full btn btn-outline hover:bg-gradient-to-r from-[#022079] to-[#00bfff]'
          ><FcGoogle className='mx-2' size={20}></FcGoogle> Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;