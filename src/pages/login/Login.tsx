import { Link } from 'react-router-dom';
import { PrimaryButton, Button } from '../../components/helpers/Button/Button';
import './login.scss';

export default function Login() {
  return (
    <div className='login'>
      <div className='platform'>
        <div className='platform__description'>
          <div className='overlay' />
          <div className='__description'>
            <h1>Flex Social Media</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus expedita nobis aut exercitationem minima
              consectetur ex pariatur.
            </p>
            <span>Do not have an account?</span>
            <Link to='/auth/register'>
              <Button _class='' onClick={() => null}>
                Register
              </Button>
            </Link>
          </div>
        </div>
        <div className='platform__login-form'>
          <div className='content'>
            <h1>Login</h1>
            <form>
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

              <PrimaryButton onClick={() => null}>Login</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
