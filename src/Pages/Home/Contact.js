import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import MobileSocial from '../../Components/MobileSocial';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Gmail', 'template_q3cc4jr', form.current, `${process.env.React_App_YOUR_PUBLIC_KEY}`)
            .then((result) => {
                toast.success(`Email send successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (error) => {
                toast.error(`Error: ${error}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <section id='contact' className='grid place-items-center mt-4'>
            <div className='max-w-xl text-center mb-16'>
                <h6 className='lg:text-lg md:text-lg text-md text-primary'>What’s Next?</h6>
                <h3 className="lg:text-4xl md:text-3xl text-2xl text-[#ccd6f6] font-bold my-6" > Get In Touch</h3 >
                <p> I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p >
            </div>

            <MobileSocial />

            <div className="card w-full max-w-xl shadow-2xl bg-gray-800" >
                <form ref={form} onSubmit={sendEmail} className="card-body" >
                    <div className="form-control" >
                        <label className="label" >
                            <span className="label-text" > Your Name</span >
                        </label >
                        <input name="user_name" type="text" placeholder="your name" className="input input-bordered" />
                    </div >
                    <div className="form-control" >
                        <label className="label" >
                            <span className="label-text" > Email</span >
                        </label >
                        <input name="user_email" type="text" placeholder="your email" className="input input-bordered" />
                    </div >
                    <div className="form-control" >
                        <label className="label" >
                            <span className="label-text" > Message</span >
                        </label >
                        <textarea name="message" placeholder="your message" className="input input-bordered h-48" />
                    </div >
                    <div className="form-control mt-6" >
                        <button type="submit" value="Send" className="btn btn-primary" > Say Hello</button >
                    </div >
                </form >
            </div >
        </section >
    );
};

export default Contact;