import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import{menu, close, logo} from '../component/assets';
import Navbar from './Navbar';
import  css  from "./Nav.css";

const Nav = () => {  
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)
  return (
    <>
    <div className='relative hidden lg:flex bg-gray-900 h-11'>
            <h1 className='text-gray-100 pl-[7.2rem] text-4xl'>Lautech University</h1>

            <div className="absolute w-[500px] right-[130px]  ">

                <input
                    type="text"
                    placeholder="Enter Keywords"
                    className="bg-[#800000] w-full h-[44px] px-10 py-2 text-white  "
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white absolute top-1/2 right-0 transform -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m-2 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </div>
        </div>


    <div className='w-full  z-10 bg-[white]  drop-shadow-lg relative  '>

        <h1 className='pl-[7.2rem] text-5xl mt-4 mb-4 hidden lg:block'>
            Software Engineering Institute
        </h1>
    
        <div className=' w-full lg:h-full lg:h-6 h-12 bg-[#800000] '>
        <h1 className='text-gray-100 top-0  ml-4 lg:hidden text-3xl'>Lautech University</h1>


                {/* <div className='flex items-center'>
                    <img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' />
                </div> */}
                <div className='hidden lg:flex justify-center items-center bg-white  h-[50px]'>
                    <div className='w-[900px] flex justify-center items-center'>
                    <ul className='hidden md:flex  '>
                        <li className='border-2   justify-center items-center  flex h-[35px] px-[85px]  md:px-14 '>
                            {/* <Link to='/'>Home</Link> */} <a href='#'>Home</a>
                            <ul className="ul">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                        </li>
                        {/* <ul role="list">
                            <li class="group/item hover:bg-slate-100 ...">
                            <img src="{person.imageUrl}" alt="" />
                            <div>
                                <a href="{person.url}">text</a>
                                <p>the software</p>
                            </div>
                            <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="#">
                                <span class="group-hover/edit:text-gray-700 ...">Call</span>
                                <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
                                </svg>
                            </a>
                            </li>
                        </ul> */}
                        <li className='border-y-2   justify-center items-center  flex px-[85px]  md:px-14 '>
                            {/* <Link to='/news'>News</Link> */} News
                            <ul className="ul">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                        </li>
                        <li className='border-2   justify-center items-center  flex px-[85px]  md:px-14 '>
                            {/* <Link to='/contact'>Contact</Link> */} Contact
                            <ul className="ul">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                        </li>
                        <li className='border-y-2   justify-center items-center  flex px-[85px]  md:px-14 '>
                            {/* <Link to='/contact'>Contact</Link> */} Contact
                            <ul className="ul">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                        </li>
                        <li className='border-2   justify-center items-center  flex px-[85px]  md:px-14 '>
                            {/* <Link to='/contact'>Contact</Link> */} Contact
                            <ul className="ul">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                        </li>
                        {/* <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                        <li>Pricing</li> */}
                    </ul>
                    </div>
                </div>
                <div className='lg:hidden absolute right-[1.1rem] top-2 cursor-pointer' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[38px] h-[38px] object-contain mr-0 transition-all duration-500' />
                </div>
              

        </div>
                <div className='justify-center items-center   flex bg-[#800000]  block lg:hidden'>
                <div className="relative w-11/12 bg-[#800000] mb-2">
                <input
                    type="text"
                    placeholder="Enter Keywords"
                    className="bg-black w-full h-11 px-10 py-2 text-white "
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white absolute top-1/2 right-0 transform -translate-y-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m-2 0a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </div>

                </div>
                <h1 className='pl-[0.80rem] md:w-[500px] w-[200px]   text-5xl mt-4  lg:hidden block'>
            Software Engineering Institute
        </h1>
    </div>
        <ul className={toggle?'fixed bg-white w-64 right-0 border   top-0 h-screen z-[100000] px-8 md:hidden transition-all duration-500 cursor-pointer':'hidden h-full'}>

        <div className='md:hidden cursor-pointer' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[38px] h-[38px] ml-44  mt-4 object-contain mr-0' />
                </div>
                       
                       <Navbar/>
        </ul>
 
    </>
  )
}

export default Nav