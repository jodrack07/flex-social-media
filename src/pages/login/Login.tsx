import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { PrimaryButton, Button } from '../../components/helpers/Button/Button';
import './login.scss';
import React, { useRef } from 'react';
import { login } from '../../features/authSlice';

export default function Login() {
  const inputUsernameRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsernameRef.current?.value && inputPasswordRef.current?.value) {
      dispatch(
        login({
          username: inputUsernameRef.current.value,
          password: inputPasswordRef.current?.value,
        })
        );
    }
  };

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
            <form onSubmit={handleSubmit}>
              <input
                ref={inputUsernameRef}
                type='text'
                name='username'
                id='username'
                placeholder='Username'
              />
              <input
                ref={inputPasswordRef}
                type='password'
                name='password'
                id='password'
                placeholder='Password'
              />

              <PrimaryButton _type='submit' onClick={handleSubmit}>
                Login
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
