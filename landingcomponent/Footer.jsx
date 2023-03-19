import React from 'react'
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter()
  return (
<footer className="text-gray-600 body-font">  
  <div className="container px-5 mx-auto ">
    <div className="flex-wrap md:text-left flex justify-center text-center order-first">
      <div className="md:w-1/2 w-full px-4 ">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Quick Links
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a onClick={()=>{
              router.push("/about")
            }} className="text-gray-600 hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a onClick={()=>{
              router.push("/how-it-works")
            }} className="text-gray-600 hover:text-gray-800">How it Works</a>
          </li>
          <li>
            <a onClick={()=>{
              router.push("/faq")
            }} className="text-gray-600 hover:text-gray-800">FAQ</a>
          </li>
          <li>
            <a onClick={()=>{
              router.push("/contact")
            }} className="text-gray-600 hover:text-gray-800">Contact US</a>
          </li>
          <li>
            <a onClick={()=>{
              router.push("/terms-conditions")
            }} className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
          </li>
        </nav>
      </div>
     
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img className={"h-[2.5rem] rounded-3xl"} src="/logo.jpg" alt="" />
        {/* <span className="ml-3 text-xl">Rentra</span> */}
      </a>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        All Rights Reserved © 2023 Rentra
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

        <a href='https://www.instagram.com/tryrentra/' className="ml-3 text-gray-500 flex justify-center items-center ">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
          Instagram
        </a>
        
      </span>
    </div>
  </div>
</footer>

  )
}

export default Footer