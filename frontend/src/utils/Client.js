const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

class Client {
  static async retrieveAll(services) {
    try {
      return await axiosInstance.get('/api/v1/general/' + services);
    } catch (e) {
      console.log(e);
    }
  }

  static async saveOne(services, data) {
    try {
      return await axiosInstance.post('/api/v1/general/' + services, data);
    } catch (e) {
      console.log(e);
    }
  }

  static async getUser(email, password) {
    try {
      return await axiosInstance.post('/api/v1/auth/', {
        email: email,
        password: password
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Client;