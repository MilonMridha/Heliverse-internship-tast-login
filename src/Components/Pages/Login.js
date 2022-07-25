import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import email from '../../img/download.png'
import logo from '../../img/Dein logo.PNG'
import lock from '../../img/lock.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const loginUser = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value;
        const user = { email, password };
        console.log(user)
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),

        })
            .then(response => response.json())
            .then(data => {

                if (data.token) {
                    const accessToken = data.token;
                    console.log(accessToken)
                    localStorage.setItem('accessToken', accessToken);

                    toast.success('Logged In Successful')
                    navigate('/success');
                }
                else {
                    console.log(data)
                    toast.error(data.message)
                    e.target.reset()
                }

            })
    }
    return (
        <div>
            <div className='w-1/3 mx-auto mt-40'>
                <img src={logo} alt="" />
                <div className='mt-10'>

                    <form onSubmit={loginUser}>
                    <div className="relative z-0 mb-6 w-full group">
                    <div className='flex justify-start'>
                    <FontAwesomeIcon className="absolute top-0 ml-0 left-0 mt-3.5" icon={faEnvelope} ></FontAwesomeIcon>
                    </div>
                    <input  type="email" name="floating_email" className="block  px-5 w-full text-sm text-gray-900 pl-5 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    
                    
                </div>
                <div className="relative z-0 mb-6 w-full group">
                <div className='flex justify-start'>
                <FontAwesomeIcon className="absolute top-10 left-10 mt-3.5" icon={faLock} ></FontAwesomeIcon>

                </div>
                    <input  type="password" name="floating_password" id="floating_password" className="block pl-5  px-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                   
                            
                    
                    
                    
                </div>
                        <div className='flex items-between justify-between'>
                            <div>
                                <div className="flex items-start mb-6">
                                    <div className=" h-5">
                                        
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600  dark:ring-offset-gray-800"
                                            required
                                        />
                                    </div>

                                    <label className=" ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                        <small>Keep Me Logged In</small>
                                    </label>
                                </div>
                            </div>
                            <Link to='/reset'><small>Forgot Password?</small></Link>
                        </div>

                        <p className='my-5'><small>New to Dein??</small> <Link to='/register' className='text-purple-800'> <small>Please Register</small></Link> </p>

                        <input type="submit" value="Login" className="text-black uppercase bg-white-500 shadow-lg focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 px-20 text-center " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;