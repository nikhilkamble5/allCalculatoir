import React from 'react'
import AllCalculators from '../components/AllCalculators'

function Home() {
    return (
        <>
            <div className=' max-w-screen mx-auto my-5'>
                <div className='container '>

                    <div className='flex flex-col justify-center items-center my-16 space-x-3 md:flex-row '>
                        <div className='space-y-2 w-[100%] md:w-[50%] flex flex-col items-center order-2 md:order-1'>
                            <h1 className='font-bold text-center text-2xl lg:text-3xl mt-3'>All In One Calculator</h1>
                            <p>Used Various Types Of Famous Calculators.</p>
                            <p className='px-10'> Your daily source of motivation and wisdom! Each day, we bring you a selection of inspiring quotes from renowned figures and contemporary voices. Whether you need a boost of encouragement, a moment of reflection, or a spark of creativity.</p>
                            <a href='/login'>  <button className='bg-blue-500 w-[200px] px-2 py-2 '>Get Quotes</button></a>
                        </div>
                        <div className=' order-1 md:order-2 flex justify-center items-center w-[300px] h-[300px] md:w-[400px] md:h-[350px]'>
                            <img src='images/calculator-bg-1.jpg' className=' rounded-xl' alt=''></img>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center my-16 space-x-3 md:flex-row '>
                        <div className='space-y-2 w-[100%] md:w-[50%] flex flex-col items-center order-2 md:order-2'>
                            <h1 className='font-bold text-center text-2xl lg:text-3xl mt-3'>Our Features</h1>
                            <p>Used Various Types Of Famous Calculators.</p>
                            <p className='px-10'> Your daily source of motivation and wisdom! Each day, we bring you a selection of inspiring quotes from renowned figures and contemporary voices. Whether you need a boost of encouragement, a moment of reflection, or a spark of creativity.</p>
                            <a href='/login'>  <button className='bg-blue-500 w-[200px] px-2 py-2 '>Get Quotes</button></a>
                        </div>
                        <div className=' order-1 md:order-1 flex justify-center items-center w-[300px] h-[300px] md:w-[400px] md:h-[350px]'>
                            <img src='images/calculator-bg-2.jpg' className=' rounded-xl' alt=''></img>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-center font-bold text-3xl underline'>All Available Calculators</h1>
                        <AllCalculators />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
