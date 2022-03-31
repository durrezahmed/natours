/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async (name, email) => {
  try {
    const res = await axios.patch('/api/v1/users/updateMe', {
      name,
      email,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Data updated successfully!');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
