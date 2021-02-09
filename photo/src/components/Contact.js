import React from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pvsvusp', 'template_t7vauce', e.target, 'user_TTEMdxk5M5HLGIPbi4lWP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <div className="style-form">
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea rows="8" cols="30" name="message" />
                <input className="button" type="submit" value="Send" />
            </div>
        </form>
    );
}





