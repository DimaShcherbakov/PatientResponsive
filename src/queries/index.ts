import axios from '../utils/axios';

interface IData{
  email: string;
  password: string;
}

interface IDatas{
  email: string;
  password: string;
}

export const checkData = async (data:IData) => {
  try {
    const res = await axios.post('/patient/login', {
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch(err) {
    throw new Error (err.response.data.message);
  }
};

export const addNote = async (data:IDatas) => {
  try {
    const res = await axios.post('/patient/diary', data);
    return res.data;
  } catch(err) {
    throw new Error (err.response.data.message);
  }
}
