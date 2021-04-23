import React from 'react';

function ContactForm(){
    //JSX
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" name="name" />
                </div>
                <div>
                    <lable htmlFor="email">Email address:</lable>
                    <input type="email" name="email" />
                </div>
                <div>
                    <lable htmlFor="message">Message:</lable>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;