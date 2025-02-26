import React, { useState } from 'react'
import { RevealOnScroll } from '../RevealOnScroll'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    })

    const SERVICE_ID ='service_bd819in'
    const TEMPLATE_ID='template_tmgohk5'
    const PUBLIC_KEY ='QmZDMZ_UZPZmtKz7X'

    const handleSubmit =(e)=>{
        emailjs.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result)=>{
            alert('Message Sent!')
        }).catch(()=> alert('Oops! Something went wrong!'))
    }

  return (
   <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='px-4 w-150'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center' >Get In Touch</h2>
            <form className='space-y-6'>
                <div className='relative'>
                    <input type="text" id='name' name='name' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Name...'/>
                </div>
                <div className='relative'>
                    <input type="email" id='email' name='email' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='exaample@gmail.com'/>
                </div>
                <div className='relative'>
                    <textarea id='message' name='message' required rows={5} className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' placeholder='Message...'/>
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transiton relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                    Send Message
                </button>
            </form>
        </div>
    </RevealOnScroll>  
   </section>
  )
}

export default Contact