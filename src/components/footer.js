import React from 'react'

const footer = () => {
  return (
    <div className='main-footer'>
      <div className='foot1'>
        <h3>City Organisers Private Limited
          Unit: The Imperial Palace</h3>
        <p>Dr. Yagnik Road, Rajkot 360001 INDIA
        </p>

        <p>Reservation  	   :   <a href='mailto:crs@imperialpalace.in'>	crs@imperialpalace.in</a></p>
        <p>Tel  	   :   	 <a href='tel:+912812480000'>+91-281-248 0000</a></p>
        <p>e-mail  	   :   <a href='mailto:mail@imperialpalace  .in'>mail@imperialpalace.in</a>
        </p>
      </div>

      <div className="foot2">
        <h4>Links</h4>
        <div className='lin'>
          <a href='#home' className='link'>Home</a>
          <a href='#services' className='link'>Accomodation</a>
          <a href='#insight' className='link'>Meetings & Events</a>
          <a href='#about' className='link'>Weddings</a>
          <a href='#contact' className='link'>Contact Us</a>
        </div>
      </div>

      <div className="foot3">
        <a href='https://www.facebook.com/hotelimperialpalace'>Join us on Facebook</a>
        <a href='https://twitter.com/imperial_rajkot'>Follow us on Twitter</a>
        <a href='https://plus.google.com/117992803351659094027/about?gl=IN&hl=en-IN'>Circle us on Google+</a>
        <a href='http://www.pinterest.com/ImperialRajkot/'>View us on Pinterest</a>
      </div>

    </div>
  )
}

export default footer