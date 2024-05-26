import React from 'react'
import w1 from '../images/w1.jpg';

const weddings = () => {
  return (
    <div className='wed-main'>
      <div className='standard' id='standard-room'>
        <div className='img-div'>
          <img src={w1} alt="!" className='main-img' />
        </div>
        <h3>Weddings</h3>
        <p>Begin your journey to "happily ever after" with an elegant wedding set in the midst of richly adorned halls at the Imperial Palace Rajkot. This exquisite venue charms guests with opulent details serving as the perfect canvas for your picture-perfect union. Our dedicated Events team specialises in planning, customising and supervising every event from start to finish. We are sure of meeting your specifications and even exceeding your expectations.</p>
        <p>We offer a full scale of services such as creative setups, authentic cuisines, exotic menus and high standards of service that is intensely personal and handled with flawless professional expertise; to make it the most memorable day of your life. You'll enjoy only the best to complete your big day such precision photography, videotaping, breathtaking floral arrangements and more…</p>
        <p>Traditional Indian Weddings is our speciality as well as our passion. Please allow us to roll out the red carpet to welcome your big day with a touch of glamour - certainly a signature of your style, with the following:</p>
        <h4>Facilities include</h4>
        <ul>
          <li>Groom / Bridal Makeover</li>
          <li>Hall Decoration</li>
          <li>Floral Arrangement</li>
          <li>Musical Arrangement</li>
          <li>Lunch / Dinner</li>
          <li>Photography / Videography</li>
          <li>Special Accommodation for the First Night Together</li>
        </ul>
      </div>
    </div>
  )
}

export default weddings