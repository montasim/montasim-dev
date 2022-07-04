import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import MobileSocial from '../../Components/MobileSocial';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`)
            .then((result) => {
                toast.success(`Email send successfully`);

                document.getElementById('contact-form').reset();
            }, (error) => {
                toast.error(`Email sent unsuccessful. Contact montasimmamun@gmail.com`);
            });
    };

    return (
        <section id='contact' className='grid place-items-center mt-24'>
            <div className='max-w-xl text-center mb-16'>
                <h6 className='lg:text-lg md:text-lg text-md text-primary'>What’s Next?</h6>
                <h3 className="lg:text-4xl md:text-3xl text-2xl text-senary font-bold my-6" > Get In Touch</h3 >
                <p> I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p >
            </div>

            <MobileSocial />

            <div className="w-full max-w-xl shadow-2xl bg-gray-800 lg:rounded-xl md:rounded:lg rounded-md lg:p-8 md:p-6 p-4">
                <form id='contact-form' ref={form} onSubmit={sendEmail}>
                    <div className="form-control" >
                        <label className="label" >
                            <span className="label-text" > Your Name</span >
                        </label >
                        <input name="user_name" type="text" placeholder="your name" required className="input input-bordered" />
                    </div >
                    <div className="form-control" >
                        <label className="label" >
                            <span className="label-text" > Email</span >
                        </label >
                        <input name="user_email" type="text" placeholder="your email" required className="input input-bordered" />
                    </div >
                    <div className="form-control" >
                        <label className="label" >
                            <span className="label-text" > Message</span >
                        </label >
                        <textarea name="message" placeholder="your message" required className="input input-bordered h-48" />
                    </div >
                    <div className="form-control mt-6" >
                        <button className="btn rounded-xs border-primary text-primary px-10 capitalize text-md hover:bg-primary hover:opacity-70 hover:text-black" type="submit" value="Send"> Say Hello</button >
                    </div >
                </form >
            </div >
        </section >
    );
};

export default Contact;