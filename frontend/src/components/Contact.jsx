import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form>
                <input type='text' placeholder='FullName' required />
                <input type='email' placeholder='Email' required/>
                <textarea placeholder='Message'></textarea>
                <input type='submit' value='Send' />
            </form>

        </div>
    );
}

export default Contact;