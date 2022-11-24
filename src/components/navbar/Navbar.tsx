import './navbar.scss';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleTheme } from '../../features/darkThemeSlice';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.darkTheme.darkTheme);
  const user = useAppSelector(state => state.auth.user);
  
  return (
    <div className='navbar'>
      <div className='content'>
        <div className='left'>
          <Link to='/'>
            <span className='logo'>flexsocial</span>
          </Link>
          <HomeIcon />

          {/* theme mode switcher  */}
          {darkTheme ? (
            <LightModeIcon onClick={() => dispatch(toggleTheme())} />
            ) : (
              <DarkModeIcon onClick={() => dispatch(toggleTheme())} />
          )}

          <AppsIcon />
          <div className='search'>
            <SearchIcon />
            <input
              type='text'
              name='seach'
              id='search'
              placeholder='Search...'
            />
          </div>
        </div>
        <div className='right'>
          <div className='right__icon'>
            <MessageIcon />
          </div>
          <div className='right__icon'>
            <NotificationsActiveIcon />
          </div>
          <div className='user'>
            <img
              src={user.profilePicture}
              alt='user-profile'
            />
            <span>{user.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
