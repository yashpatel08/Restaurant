import React from 'react'

const contact = () => {
    return (
        <div className='contact-div'>
            <div className='content-div'>

                <div className="form-left">

                    <p>Reservation  	   :   <a href='mailto:crs@imperialpalace.in'>	crs@imperialpalace.in</a></p>
                    <p>Tel  	   :   	 <a href='tel:+912812480000'>+91-281-248 0000</a></p>
                    <p>e-mail  	   :   <a href='mailto:mail@imperialpalace  .in'>mail@imperialpalace.in</a>
                    </p>
                </div>
                <div className="form-right">

                    <div className="form">

                        <form action="mailto:mail@imperialpalace.in" method="post" encType="text/plain">
                            <input type="text" name="name" placeholder="Name" /><br />
                            <input type="email" name="email" placeholder="Email" /><br />
                            <textarea name="message" placeholder="Enter your enquiry..."></textarea><br />
                            <input type="submit" value="Send Email" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default contact