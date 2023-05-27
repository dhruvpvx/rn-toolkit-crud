import axios from 'axios';
import EndPoints from './EndPoints';

const BASE_URL = 'https://gorest.co.in/public/v2';

const TOKEN =
  '1ddfb648b490e1bfaa088c6642e6fc3cb3fae1d420cb212a639895aa72d56fde';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

class ApiManager {
  static getUsers = () => {
    return api.get(EndPoints.USERS);
  };

  static getUser = (id) => {
    return api.get(EndPoints.USER(id));
  };

  static addUser = (data) => {
    return api.post(EndPoints.USERS, data);
  };

  static editUser = (id, data) => {
    return api.put(EndPoints.USER(id), data);
  };

  static deleteUser = (id) => {
    return api.delete(EndPoints.USER(id));
  };

  static getRandomImage = (gender) => {
    return axios.get(EndPoints.RANDOM_IMAGE(gender));
  };
}

export default ApiManager;
