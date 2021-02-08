import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID doZXsXQYIhlTdaAWH-BcV39VIT3k0LEiy5bW2nkejLI'
  }

});