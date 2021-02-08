import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyC0Wj4XVLR87l63rKJS4nrEcwiZ7-TQrro';

class App extends React.Component {
  state = { 
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit('ruby on rails');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;