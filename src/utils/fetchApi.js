const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export default function fetchApi(path) {
  return fetch(`${API_URL}${path}`);
}
