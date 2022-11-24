import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import './profile.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import Posts from '../../components/posts/Posts';

export default function Profile() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className='profile'>
      <div className='images'>
        <img
          className='cover'
          src='https://images.unsplash.com/photo-1520564816385-4f9d711941aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='coverpicture'
        />
        <img
          className='profile'
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
      <div className='profileContainer'>
        <div className='content'>
          <p className='username'>{user.username}</p>
          <div className='details'>
            <div className='socialsMedia'>
              <Link to=''>
                <FacebookIcon className='icon' />
              </Link>
              <Link to=''>
                <InstagramIcon className='icon' />
              </Link>
              <Link to=''>
                <LinkedInIcon className='icon' />
              </Link>
              <Link to=''>
                <PinterestIcon className='icon' />
              </Link>
            </div>
            <div className='local'>
              <div className='top'>
                <div>
                  <LocationOnIcon className='icon' />
                  <p>congo, DRC</p>
                </div>
                <div>
                  <LanguageIcon className='icon' />
                  <Link to='/'>
                    {user.username.concat('.com').split(' ').join('')}
                  </Link>
                </div>
              </div>
            </div>
            <div className='more'>
              <MailOutlineIcon className='icon' />
              <MoreHorizIcon className='icon' />
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}
