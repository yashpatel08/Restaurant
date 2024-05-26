import React from 'react'
import m1 from '../images/m1.jpg';
import m2 from '../images/m2.jpg';

const meetings = () => {
    return (
        <div className='meet-main'>

            <div className='standard' id='standard-room'>
                <div className='img-div'>
                    <img src={m1} alt="!" className='main-img' />
                </div>
                <h3>Ambience</h3>
                <p>Whether you are planning a meeting for upto 16 business executives, a general session for upto 35 people, Ambience provides a compact & cozy setting. Our highly skilled convention staff can handle all of your arrangements in a style that will reflect positively on you and your company.</p>
                <h4>Facilities include</h4>
                <ul>
                    <li>Complimentary Internet Access</li>
                    <li>Computer System </li>
                    <li>
                        LCD Projector</li>
                    <li>Tripod Screen</li>
                </ul>
            </div>
            <div className='standard' id='standard-room'>
                <div className='img-div'>
                    <img src={m2} alt="!" className='main-img' />
                </div>
                <h3>The Regent Room</h3>
                <p>An elegant room located on the ground floor, it symbolises sophistication and grandeur. With beautiful decor, exquisite chandeliers and capacities of up to 500 guests. This space is ideal for banquets, weddings, product launches and large conferences. This Hall has a private dining room attached. You can also take advantage of the exclusive access to the pre-function area during the event.

                </p><p>The Room allows itself to be easily transformed with different configurations and whatever theme you have in mind.</p>
                <h4>Facilities include</h4>
                <ul>

                    <li>Private Dining Room</li>
                    <li>Carpet Flooring</li>
                    <li>High Speed Internet Access</li>
                    <li>LCD Projector</li>
                    <li>Dimmer Lighting</li>
                    <li>Ceiling Hung Projection Screen</li>
                    <li>Computer System</li>
                    <li>Background Music System</li>
                </ul>
            </div>

        </div>
    )
}

export default meetings