import axios from 'axios';
import { sha256 } from '../utils/encryption';

export const AUTH_TOKEN = '516fb57b-f2c5-4985-95e1-e3e4836d8bd4';

export const doLogin = async (email, password) => {
  // Admin shortcut login
  if (email === 'admin' && password === 'admin') {
    console.log('Login successful');
    localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
    localStorage.setItem('USER_EMAIL', email);
    return true;
  }

  // Normal login via API
  const hashedPassword = await sha256(password);
  const response = await axios.get(
    `http://localhost:4000/users?email=${email}&password=${hashedPassword}`
  );

  if (response.data.length > 0) {
    localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
    localStorage.setItem('USER_EMAIL', response.data[0].email);
    return true;
  } else {
    console.log('Login failed');
    return false;
  }
};
