import React from 'react';
import { Carousel } from 'antd';
import './style.scss';

// The data show on page
const listData = [
  {
    title: 'xPhone', // Title
    desc: 'Lots to love. Less to spend.', // Description
    price: ' Starting at $399.', // Price
    iconUrl: require('assets/icon_iphone.png'), // Icon path
  },
  {
    title: 'Tablet',
    desc: 'Just the right amount of everything.',
    iconUrl: require('assets/icon_tablet.png'),

  },
  {
    title: 'Buy a Tablet or xPhone for college. Get arPods.',
    iconUrl: require('assets/icon_airpods.png'),
  }
]

const Home: React.FC = () => (
  <Carousel autoplay>
    {
      listData.map((item, index) => {
        return <div className={"item item_" + (index + 1)} key={index}>
          <div className='top'>
            <div className='title'>{item.title}</div>
            <div className='text'>{item.desc}</div>
            <div className='text'>{item.price}</div>
          </div>
          <div className='bottom'>
            <div className='img-box'>
              <img className='img' src={item.iconUrl} alt={item.title} />
            </div>
          </div>
        </div >
      })
    }
  </Carousel >

);

export default Home;