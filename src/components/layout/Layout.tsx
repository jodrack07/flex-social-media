import { Outlet } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';
import Navbar from '../navbar/Navbar';
import RightBar from '../rightBar/RightBar';
import './layout.scss';
import '../../styles.scss';
import { useAppSelector } from '../../app/hooks';

export default function Layout() {
  const darkTheme = useAppSelector(state => state.darkTheme.darkTheme)
  return (
    <div className={`theme-${darkTheme ? 'dark' : 'light'}`}>
      <div className='layout'>
        <Navbar />
        <div className='container'>
          <LeftBar />
          <div className='outlet'>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </div>
  );
}
