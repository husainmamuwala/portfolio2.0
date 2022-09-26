import React from 'react'
import{EnvelopeIcon, MapIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {}

type Inputs = {
    name:String;
    email:String;
    subject:String;
    message:String;
  };

export default function Contact({}: Props) {

    const { register, 
            handleSubmit,  
            } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

  return (


    <div className='h-screen relative flex overflow-hidden flex-col md:text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center text-center z-0 '>
        <h3 className='absolute top-24 uppercase text-gray-500 font-semibold tracking-[20px] text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl text-center font-semibold'>I have got just what you need.{" "}
            <span className='underline decoration-[#1f9aec]'>Lets Talk</span></h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center '>
                    <PhoneIcon className='text-[#1f9aec] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+91-7977195572</p>
                </div>
                <div className='flex items-center space-x-5 justify-center '>
                    <EnvelopeIcon className='text-[#1f9aec] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>techyencoders@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center '>
                    <MapPinIcon className='text-[#1f9aec] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Mumbai , INDIA</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input placeholder='Name' className='contactinput' type="text" />
                    <input placeholder='Surname' className='contactinput' type="text"/>
                </div>
                <input  placeholder="Email" className='contactinput' type="email"/>
                <textarea placeholder='Message' className='contactinput' />
                <button className='bg-[#1f9aec] px-18 py-5 rounded-md font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}