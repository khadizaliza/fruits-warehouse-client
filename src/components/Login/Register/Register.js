import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
         const email = event.target.email.value;
         const password = event.target.password.value;
         createUserWithEmailAndPassword(email, password, name);
    }
    return (
        <div className='register'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder="Your Name"/>
            
            <input type="email" name="email" id="" placeholder="Email Address" required/>
            
            <input type="password" name="password" id="" placeholder="password" required/>
            <input type="submit" value="Register"/>
             </form>
             <p>Already have an account <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
             <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;