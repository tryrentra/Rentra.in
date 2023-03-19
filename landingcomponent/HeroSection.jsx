import React,{useEffect,useState,useRef,useCallback} from 'react'
import {useRouter} from "next/router"
import { Typewriter } from 'react-simple-typewriter'
const HeroSection = () => {
  const router = useRouter()
  const [selected ,setSelected] =useState("")
  const urls = [
    "https://cdnl.iconscout.com/lottie/premium/thumb/bicycle-5015807-4175886.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/laptop-5746172-4789207.gif",
    "https://cdn3d.iconscout.com/3d/premium/thumb/control-6341601-5327298.png?f=webp",
    "https://cdn3d.iconscout.com/3d/premium/thumb/guitar-with-music-notes-5846247-4891144.png?f=webp",
    "https://cdn3d.iconscout.com/3d/premium/thumb/clothes-5167903-4328713.png?f=webp",
    "https://cdnl.iconscout.com/lottie/premium/thumb/bike-5491276-4574322.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/tools-box-6127207-5003373.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/piano-6407655-5349110.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/neckless-6292429-5221909.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/camera-6906006-5650577.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/drill-machine-7347031-6010919.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/woofers-7675860-6159262.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/fire-fighter-ladder-5794995-4881430.gif",
    "https://cdnl.iconscout.com/lottie/premium/thumb/couple-bag-packing-for-tour-3573984-3056983.gif"
      
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randNumber = Math.floor(Math.random() * urls.length);
      const selectedRand = urls[randNumber];
      setSelected(selectedRand);
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col items-center justify-center px-4 py-8 md:p-8">
    <div className="max-w-lg w-full mb-8 lg:mb-0 lg:w-1/2">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={selected === ""? "https://cdn3d.iconscout.com/3d/premium/thumb/bicycle-racing-4976134-4146778.png?f=webp":selected}
      />
    </div>
    <h1 className="title-font text-6xl font-medium text-gray-900 text-center mb-4">
      <span className="lg:text-7xl md:text-6xl sm:text-5xl py-14 font-bold" >Rent Anything!</span>
      {/* <br className=" lg:inline-block" /> */}
      {/* <span className="text-3xl">Rent Anything!</span> */}
    </h1>
    <p className={`inline-block mb-4 text-center`}>
      <Typewriter
        words={['From WorkStations', 'to Games and Console', 'Cloths to Makeups', 'Musical Insturnments to Cars & Bike']}
        loop={6}
        cursor
        typeSpeed={30}
        deleteSpeed={30}
        delaySpeed={500}
      />
    </p>
    <div id="otpless" className="flex justify-center items-center text-white">
      .
    </div>
    {/* <button onClick={()=>{ */}
      {/* router.push("/contact") */}
    {/* }} type="submit" class="py-3  */}
    {/* mt-4 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800  */}
          {/* bg-slate-900 */}
          {/* focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Contact Us</button> */}
  </div>
</section>


  )
}

export default HeroSection