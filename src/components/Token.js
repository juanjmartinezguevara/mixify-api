import axios from 'axios';
import qs from 'qs';

const token = async () => {
  const clientId = 'a883635d983743ee8094b764c7b2a45b';
  const clientSecret = '349214dfb47f4d48b6ea6417849d7546';
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};
export default token;