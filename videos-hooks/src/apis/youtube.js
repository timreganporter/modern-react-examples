import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

/* remove params from above hash due to bug in axios 0.19 (apparently not in 0.18.1)
//const KEY = 'AIzaSyC0Wj4XVLR87l63rKJS4nrEcwiZ7-TQrro';
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
*/