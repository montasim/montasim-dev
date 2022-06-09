import React from 'react';

const ContactMe = () => {
    return (
        <div id='contact' class="hero min-h-screen bg-gray-900">
            <div class="hero-content flex-col lg:flex-row-reverse justify-between">
                <div class="text-center lg:text-left lg:w-5/12">
                    <h1 class="text-5xl font-bold">Get in Touch</h1>
                    <p class="py-6">If you have any query want to ask me or want to give me any important message, you can send me a message at any time and yes, I will try to reply to your message in your email.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-gray-700">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="your name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea placeholder="your message" class="input input-bordered h-48" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;