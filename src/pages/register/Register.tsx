import { Link } from 'react-router-dom';
import { Button, PrimaryButton } from '../../components/helpers/Button/Button';
import './register.scss';

export default function Register() {
  return (
    <div className='register'>
      <div className='platform'>
        <div className='platform__description'>
          <div className='overlay' />
          <div className='content'>
            <h1>Flex Social Media</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus expedita nobis aut exercitationem minima
              consectetur ex pariatur.
            </p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur voluptates quibusdam</p> */}
            <span>Get connected</span>
            <Link to='/auth/login'>
              <Button _class='' onClick={() => null}>
                login
              </Button>
            </Link>
          </div>
        </div>
        <div className='platform__register'>
          <div className='content'>
            <h1>Register</h1>
            <form>
              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='Firstname'
              />
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Lastname'
              />
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
              />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
              />
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Confirm Password'
              />
              <PrimaryButton onClick={() => null}>Register</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
