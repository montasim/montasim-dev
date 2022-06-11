import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

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
        <section data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='1500' id='contact' class="hero min-h-screen bg-gray-900">
            <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                <div class="text-center lg:text-left lg:w-5/12">
                    <h1 class="text-5xl font-bold">Get in Touch</h1>
                    <p class="py-6">If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
                    <div class="flex gap-4 text-3xl mt-4">
                        <a href='https://www.linkedin.com/in/montasim' target='_blank' rel='noreferrer'><BsLinkedin /></a>
                        <a href='https://github.com/montasim' target='_blank' rel='noreferrer'><BsGithub /></a>
                        <a href='https://www.facebook.com/montasimmamun/' target='_blank' rel='noreferrer'><BsFacebook /></a>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-gray-700">
                    <form ref={form} onSubmit={sendEmail} class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input name="user_name" type="text" placeholder="your name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input name="user_email" type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea name="message" placeholder="your message" class="input input-bordered h-48" />
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" value="Send" class="btn btn-primary">Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;