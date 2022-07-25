import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <section className='w-1/3 mx-auto mt-40'>
            <div>
                <h2 className='text-2xl font-semibold mb-5'>Login Now</h2>
                <form>
                    <div className="relative z-0 w-full mb-6 group">

                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                        
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                        
                    </div>
                    <div className='flex items-between justify-between'>
                        <div>
                            <h1><small>Keep Me logged In</small></h1>
                        </div>
                        <Link to='/reset'><small>Forgot Password?</small></Link>
                    </div>
                   
                    <p className='my-5'><small>New to Dein??</small> <Link to='/register' className='text-purple-800'> <small>Please Register</small></Link> </p>
                    <input type="submit" value="Login" className="text-black uppercase bg-white-500 shadow-lg focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 px-20 text-center " />
                </form>
            </div>
        </section>
        </div>
    );
};

export default Login;