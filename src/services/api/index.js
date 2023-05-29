import axios from 'axios';
import { getToken } from 'services/utils';
import { baseAuth } from 'services/constants';

const fetchFromApiServer = (requestType, url, data, options) => {
  return fetchApiWrapper(url, requestType, data, options);
};

function getHeaderConfig(requestType, options) {
  const token = getToken();
  const config = {
    headers: {
      'Content-Type':
        requestType === 'MULTIPART'
          ? 'multipart/form-data'
          : 'application/json',
      authorization: 'Bearer ' + (token || baseAuth),
      Accept: '*/*',
    },
    params: { ...options },
    timeout: 60 * 10 * 1000,
  };
  return config;
}

const fetchApiWrapper = (uri, requestType, data, options = {}) => {
  const url = process.env.REACT_APP_API_URL + uri;
  const config = getHeaderConfig(requestType, options);

  if (requestType === 'GET') {
    return axios({ url, method: 'get', ...config });
  } else if (requestType === 'POST') {
    return axios({ url, method: 'post', data, ...config });
  } else if (requestType === 'DELETE') {
    return axios({ url, method: 'delete', data, ...config });
  } else if (requestType === 'PUT') {
    return axios({ url, method: 'put', data, ...config });
  } else if (requestType === 'PATCH') {
    return axios({ url, method: 'patch', data, ...config });
  } else if (requestType === 'MULTIPART') {
    return axios({ url, method: 'post', data, ...config });
  }
};

export default fetchFromApiServer;
