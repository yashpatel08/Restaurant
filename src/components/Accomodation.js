import React from 'react'
import a1 from '../images/a1.jpg';
import a2 from '../images/a2.jpg';
import a3 from '../images/a3.jpg';
import a4 from '../images/a4.jpg';

const Accomodation = () => {
  return (
    <div id='accomo'>
      <h3>Imperial Palace Hotel Rajkot - Rooms & Suites</h3>
      <div className='accomo-div'>
        <div className="left" id='accomo-left'>
          <p>Imperial Palace Hotel Rajkot offers the most spacious rooms & suites for that extra comfort and luxury. All rooms and suites are furnished to the very highest standards of luxury with complete amenities. Rooms are designed not only for their comfort and style, but also for maximum convenience, including advanced technology. All rooms open in a beautiful central atrium and combine contemporary elegance with facilities beyond expectations. Privacy, tranquility and personal attention ensures business travelers and pleasure seekers both are drawn back to the Imperial Palace experience time and time again.</p>

          <h4>Facilities & Amenities provided on complementary basis</h4>
          <ul>
            <li>Water Bottle</li>
            <li>Slippers</li>
            <li>Tea / Coffee Sachet</li>
            <li>Left Luggage Facility</li>
          </ul>

          <h4>Room Features</h4>

          <ul>
            <li>Complimentary Internet</li>

            <li>Daily Newspaper</li>
            <li>Minibar</li>
            <li>Magazines & Periodicals</li>
          </ul>
        </div>

        <div className="right">
          <p>Imperial Palace offers rooms in following categories to fit your varied needs</p>
          <h4>Rooms</h4>
          <ul>
            <li><a href='#standard-room'>Standard Rooms </a></li>
            <li><a href='#superior-room'>Superior Rooms</a></li>
          </ul>

          <h4>Suites</h4>
          <ul>
            <li><a href="#presidental-room">Presidential Suite</a></li>
            <li><a href="#imperial-room">Imperial Suite</a></li>

          </ul>
        </div>
      </div>

      <div className='standard' id='standard-room'>
        <div className='img-div'>
          <img src={a1} alt="!" className='main-img' />
        </div>
        <h3>Standard Room</h3>
        <p>These elegantly appointed rooms are comfortable and gracious, putting you at your ease for the duration of your stay.</p>
        <h4>Room Features</h4>
        <ul>
          <li>Complimentary Internet Access</li>
          <li>
            Some Rooms with Connecting DoorsQueen </li><li> Twin BedIn Room Tea </li><li> Coffee MakerShower</li><li>Tub Combination</li>
        </ul>
      </div>

      <div className='superior' id='superior-room'>
        <div className='img-div'>
          <img src={a2} alt="!" className='main-img' />
        </div>

        <h3>Superior Room</h3>
        <p>Elegantly appointed superior rooms feature a functional design and a contemporary feel with subtle tones of neutral colors, soft & discrete lighting and a classic decor.</p>
        <h4>Room Features</h4>
        <ul>
          <li>Laptop Compatible Digital Safe</li>
          <li>24 hour Room service</li>
          <li>Satellite TV Channels</li>
          <li>Shower/Tub Combination</li>
          <li>Bedside Light Controls</li>
        </ul>
      </div>

      <div className='superior' id='presidental-room'>
        <div className='img-div'>
          <img src={a3} alt="!" className='main-img' />
        </div>

        <h3>Presidential Suite</h3>
        <p>The presidential suite at Imperial Palace Hotel Rajkot features a beautifully appointed master bedroom with ensuite spa-style bathroom with deep-soaking Jacuzzi, a dining area, living room with couches, sofas and LCD television, and a refrigerated private bar.</p>
        <h4>Room Features</h4>
        <ul>
          <li>Laptop Compatible Digital Safe</li>
          <li>24 hour Room service</li>
          <li>Satellite TV Channels</li>
          <li>Shower/Tub Combination</li>
          <li>Bedside Light Controls</li>
          <li>Complimentary Internet</li>
          <li>Daily Newspaper</li>
          <li>Minibar</li>
          <li>Magazines & Periodicals</li>
          <li>Separate Living Room & Bedroom</li>
          <li>Multiple Flat Screen LCD Televisions</li>
          <li>Complimentary Internet Access</li>
          <li>Carpet Flooring</li>
          <li>Jacuzzi</li>
          <li>Personal Fax</li>
          <li>Full Fledged Music System</li>
          <li>Private Library</li>
        </ul>
      </div>
      <div className='superior' id='imperial-room'>
        <div className='img-div'>
          <img src={a4} alt="!" className='main-img' />
        </div>

        <h3>Imperial Suite</h3>
        <p>The Imperial Suite provide the ultimate five-star comfort, complementing unique design with unparalleled service. The suite comes with a master bedroom, guest bedroom, living room, dining room, guest powder room, personal library, spa-style bathroom with deep-soaking Jacuzzi and a private office equipped with Computer, printer and fax.</p>
        <h4>Room Features</h4>
        <ul>
        <li>Carpet Flooring</li>
          <li>Jacuzzi</li>
          <li>Personal Fax</li>
          <li>Full Fledged Music System</li>
          <li>Private Library</li>
          <li>Laptop Compatible Digital Safe</li>
          <li>24 hour Room service</li>
          <li>Satellite TV Channels</li>
          <li>Shower/Tub Combination</li>
          <li>Bedside Light Controls</li>
          <li>Complimentary Internet</li>
          <li>Daily Newspaper</li>
          <li>Minibar</li>
          <li>Magazines & Periodicals</li>
          <li>Separate Living Room & Bedroom</li>
          <li>Multiple Flat Screen LCD Televisions</li>
          <li>Complimentary Internet Access</li>
          
        </ul>
      </div>

    </div>
  )
}

export default Accomodation