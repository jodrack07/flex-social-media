import { useAppSelector } from '../../app/hooks';
import Menu from '../menuItem/MenuItem';
import './leftBar.scss';

export default function LeftBar() {
  const user = useAppSelector(state => state.auth.user);
  
  const menu_1 = [
    {
      title: user.username,
      img: user.profilePicture ? user.profilePicture : '',
      altText: 'user',
    },
    {
      title: 'friends',
      img: '/images/friends.png',
      altText: 'friends',
    },
    {
      title: 'groups',
      img: '/images/groups.png',
      altText: 'groups',
    },
    {
      title: 'marketplace',
      img: '/images/marketplace.png',
      altText: 'marketplace',
    },
    {
      title: 'watch',
      img: '/images/watch.png',
      altText: 'watch',
    },
    {
      title: 'memories',
      img: '/images/memories.png',
      altText: 'memories',
    },
  ];

  const menu_2 = [
    {
      title: 'events',
      img: '/images/events.png',
      altText: 'events',
    },
    {
      title: 'gaming',
      img: '/images/gaming.png',
      altText: 'gaming',
    },
    {
      title: 'gallery',
      img: '/images/gallery.png',
      altText: 'gallery',
    },
    {
      title: 'videos',
      img: '/images/videos.png',
      altText: 'videos',
    },
    {
      title: 'messages',
      img: '/images/messages.png',
      altText: 'messages',
    }
  ];

  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          {menu_1.map((menu, index) => (
            <Menu key={index} title={menu.title} img={menu.img} altText={menu.altText} />
          ))}
        </div>
        <hr />
        <div className='menu'>
          <p>Your shortcuts</p>
          {menu_2.map((menu, index) => (
            <Menu key={index} title={menu.title} img={menu.img} altText={menu.altText} />
          ))}
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
}
