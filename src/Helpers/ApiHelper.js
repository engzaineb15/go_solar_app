import axios from './api';
import utils from '../utils';
export const POST = async (path, data) => {
  try {
    let fetch = await axios.post(`${path}`, data);
    if (fetch.status == 200) {
      let res = fetch.data;
      if (res.status == 'success') {
        return res.message;
      } else {
        utils.toastAlert('error', res.message);
        
        return null;
      }
    } else {
      utils.toastAlert('error', 'Something went wrong');
     
      return null;
    }
  } catch (error) {
    utils.toastAlert('error', 'Something went wrong');


  }
};

export const GET = async path => {
  try {
    let fetch = await axios.post(`${path}`);

    if (fetch.status == 200) {
      let res = fetch.data;
      if (res.status == 'success') {
        return res.message;
      } else {
        utils.toastAlert('error', res.message);
       
        return null;
      }
    } else {
      utils.toastAlert('error', 'Something went wrong');
    
      return null;
    }
  } catch (error) {
    utils.toastAlert('error', 'Something went wrong');

  }
};
