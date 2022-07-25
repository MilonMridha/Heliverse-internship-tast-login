import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
    const navigate = useNavigate()
    const resetPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const newPassword = {password};
    console.log(newPassword)
    fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(newPassword),

        })
            .then(res =>res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success("Reset successful");
                    navigate('/login')
                    event.target.reset()
                    
                }
            })
    }
    return (
        <section className='w-1/3 mx-auto mt-40'>
        <div>
            <h2 className='text-2xl font-semibold mb-5'>Reset Now</h2>
            <form onSubmit={resetPassword} >
                <div className="relative z-0 w-full mb-6 group">

                    <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                
                
                <input type="submit" value="Reset" className="text-black uppercase bg-white-500 shadow-lg focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 px-20 text-center " />
            </form>
        </div>
    </section>
    );
};

export default ResetPassword;