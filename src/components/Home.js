import React from 'react'
import main from '../images/main.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';
import main4 from '../images/main4.jpg';

const Index = () => {
  return (
    <div className='home'>
      <h2>Imperial Palace</h2>
      <div className='img-div'>
      <img src={main} alt="!" className='main-img' />
      </div>
      <div className='food'>

        <h3>Food & Beverages</h3>
        <p>For palates accustomed to refined tastes, The Imperial Palace Rajkot offers a whole new culinary dimension. A trip to Rajkot wouldn't be complete without at least one memorable meal at The Imperial Palace. The options at Imperial Palace are sure to liven up your experience of dining in Rajkot.

        </p>
        <p>The Courtyard, a multi cuisine fine dining restaurant is the finest restaurants in Rajkot, which offer a unique fine dining experience to suit any occassion. Senso - the 24 hour coffee shop serves authentic regional fast food along with refreshing hot & cold beverages and some of the best dessert recipes. Delicacy the pastry shop delights you with mouth watering and highly tempting pastries & cakes. For your convenience, we provide in-room dining, offering outstanding cuisine in the privacy of your room round the clock.</p>
      </div>
      <div className='img-div'>
      <img src={main2} alt="!" className='main-img' />
      </div>
      <div className='senso'>

        <div className='left'>
          <h3>
            Senso
          </h3>

          <p>Senso - the only 24-hour coffee shop in Rajkot, offering a choice of cuisines to satiate every palate is a cool spot for quick meals and delicious snacks round the clock. It also offers sumptuous buffet breakfast in the morning. Authentic regional fast food is the major attraction at Senso.</p>
          <p>The interiors with dark teak paneling and flooring gives it a periodic feel and offers a cozy and intimate ambience. Senso in known for serving the authentic regional fast food along with refreshing hot & cold beverages and some of the best dessert recipes.</p>
          <p>Reservations can be made by calling +91-281-2480000.</p>
        </div>

        <div className='right'>
          <div className='right-sub'>
            <h3>Hours of Operation</h3>
            <p>
              Breakfast     	7:00 am to 11:00 am
            </p>
            <p>
              Snacks & Beverages     	24 hours
            </p>

          </div>

          <div className='right-sub'>
            <h3>Cuisine</h3>
            <p>
              multi cuisine
            </p>
          </div>

          <div className='right-sub'>
            <h3>Location</h3>

            <p>
              Lobby Level
            </p>
          </div>
        </div>
      </div>
      <div className='img-div'>
      <img src={main3} alt="!" className='main-img' />
      </div>
      <div className='courtyard'>
        <div className='left'>

          <h3>the Courtyard</h3>
          <p>the Courtyard, a multi cuisine fine dining restaurant is regarded as finest and most elegant of restaurants in Rajkot. The exhilirating interiors & lighting with a beautiful courtyard view create a gracious backdrop for exemplary service & tantalising gourmet cuisine, providing you with the most glamorous dining experience.</p>
          <p>
            A must visit when in Rajkot, the Courtyard is a perfect place for entertaining clients, colleagues, family or friends.
          </p>
          <p>
            Reservations can be made by calling +91-281-2480000.
          </p>
        </div>
        <div className='right'>
          <div className='right-sub'>
            <h3>Hours of Operation</h3>
            <p>
              Lunch     	12:00 pm to 3:00 pm
            </p>
            <p>
              Dinner     	7:30 pm to 11:30 pm
            </p>

          </div>

          <div className='right-sub'>
            <h3>Cuisine</h3>
            <p>
              Indian, Chinese, Continental
            </p>
          </div>

          <div className='right-sub'>
            <h3>Location</h3>

            <p>
              Lobby Level
            </p>
          </div>

        </div>
      </div>
      <div className='img-div'>
      <img src={main4} alt="!" className='main-img' />
      </div> 
      <div className="delicacy">
        <div className='left'>

          <h3>Delicacy</h3>
          <p>The most popular cake shop in Rajkot - Delicacy, frequented by hotel and local guests alike, offers a wide selection of special breads, delectable cakes, mouth watering & highly tempting pastries and desserts with most impressive presentations.</p>
          <p>
            Delicacy is renowned locally for special birthday & wedding cakes and for a variety of cookies & hand made chocolates it offers.
          </p>
        </div>

        <div className='right'>
          <div className='right-sub'>
            <h3>Hours of Operation</h3>
            <p>10:00 am to 11:00 pm
            </p>
          </div>

          <div className='right-sub'>
            <h3>Speciality</h3>
            <p>
              Bread, cookies, pastries, birthday & wedding cakes
            </p>
          </div>

          <div className='right-sub'>
            <h3>Location</h3>

            <p>
              Main Lounge
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Index