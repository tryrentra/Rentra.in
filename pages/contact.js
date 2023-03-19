import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
function contact() {
    const router = useRouter()
    const [details,setDetails] = useState({
        email:"",
        subject:"",
        message:""
    })
    const handleClickEvent = () => {
        axios.post("https://busy-blue-gosling-suit.cyclic.app/api/enquery",details).then(()=>{
            router.push("/")
            // alert("Enquery has Been Sent")
        })
        console.log(details)
    }
  return (
    <section class="bg-white">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-semibold text-center text-black sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
              <input onChange={(e)=>{
                setDetails({...details,email:e.target.value})
              }} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@company.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input onChange={(e)=>{
                setDetails({...details,subject:e.target.value})
              }} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea onChange={(e)=>{
                setDetails({...details,message:e.target.value})
              }} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className="flex justify-center" >
          <button onClick={handleClickEvent} type="button" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 
          bg-slate-900
          focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </div>
      </form>
  </div>
</section>
  )
}

export default contact
