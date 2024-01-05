import React from 'react';
import { BackgroundLayout } from '../../layout';
import { login } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { name, handleChange } = useForm({
    name: ''
  });
  const navigate = useNavigate();
    
  const handleLogin = () => {
    dispatch(login(name));
    navigate('/home', { replace: true })
  };
  return (
    <BackgroundLayout>
      <div className={styles.containerSing}>
        <h1>To create activities for countries you must log in with a user name. Enter any name you want</h1>
        <form className={ `${styles.form} animate__animated animate__zoomIn` }>
          <div>
            <label className={ styles.label } htmlFor='name'>Name:</label>
            <input 
              name='name'
              value={ name }
              onChange={ handleChange }
              className={ styles.input }
              placeholder='User name'
              type='text' 
            />
          </div>
          <button className={ styles.buttonLogin } onClick={ handleLogin }>Login</button>
        </form>
      </div>
    </BackgroundLayout>
  )
}
