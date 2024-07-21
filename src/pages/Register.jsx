import React from 'react'

function Register() {
    return (
        <>
            <div className=' max-w-screen mx-auto my-16'>
                <div className='container flex flex-col justify-center items-center'>

                    <div className="w-[90%] max-w-screen-sm p-4 text-black bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-yellow-100 dark:border-gray-700">
                        <div className='m-2 flex flex-col justify-center items-center'>
                            <img className='w-[100px] h-[100px]' src='/images/login1.png' alt='' />
                        </div>
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-black text-center dark:text-black">Sign Up to our platform</h5>
                            <div className='md:flex flex-row flex-wrap space-x-5 space-y-5'>
                                <br />
                                <div className='md:w-[40%]'>
                                    <label for="Full Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name</label>
                                    <input type="Full Name" name="fname" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-yellow-50 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Full Name" required />
                                </div>
                                <div className='md:w-[40%]'>
                                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone Number</label>
                                    <input type="phone" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-yellow-50 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="XXXXXXXXXX" required />
                                </div>
                                <div className='md:w-[40%]'>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-yellow-50 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                </div>
                                <div className='md:w-[40%]'>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-yellow-50 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                                </div>
                                <div className='md:w-[40%]'>
                                    <label for="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                                    <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-yellow-50 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" required />
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-black">Remember me</label>
                                </div>
                                {/* <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a> 
                            </div> */}
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-black">
                                Have An Account? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
