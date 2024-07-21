import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    const [isMenuOpen, setisMenuOpen] = useState(false)

    return (
        <>
            <div className=' max-w-screen   py-3 bg-yellow-100 mx-auto '>
                <div className=' container  flex  justify-around items-center'>
                    <div className=''>
                        <Link to='/' >  <h1 className='font-bold text-center md:text-left text-xl lg:text-3xl'>All In One Calculator</h1></Link>
                    </div>
                    <div className='hidden lg:flex'>
                        <Link to='/' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Home</button> </Link>
                        <Link to='/calculators' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Calculators</button> </Link>
                        <Link to='/login' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Contact Us</button> </Link>
                        <Link to='/about-us' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >About Us</button> </Link>
                        <Link to='/login' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Login</button> </Link>
                        <Link to='/register' > <button className='py-2 px-3 mx-3 bg-yellow-300 border-slate-950 hover:bg-yellow-600 font-semibold  rounded-lg md:text-xl' >Register</button> </Link>
                    </div>
                    <div className='flex lg:hidden'>
                        <img src='/images/calculator-bg-1.jpg' className='w-[30px] h-[30px]' onClick={() => {
                            setisMenuOpen(!isMenuOpen)
                        }} alt="" />

                    </div>

                </div>
            </div>
            <div className={`${isMenuOpen === true ? null : 'hidden'} bg-yellow-100`}>
                <ul className={`${isMenuOpen === true ? null : 'hidden'} text-center py-4 lg:hidden`}>
                    <li className='py-1 font-semibold hover:scale-110 cursor-pointer hover:text-blue-700'>Home</li>
                    <li className='py-1 font-semibold hover:scale-110 cursor-pointer hover:text-blue-700'>Home</li>
                    <li className='py-1 font-semibold hover:scale-110 cursor-pointer hover:text-blue-700'>Home</li>
                    <li className='py-1 font-semibold hover:scale-110 cursor-pointer hover:text-blue-700'>Home</li>
                </ul>
            </div>
        </>
    )
}

export default NavBar
