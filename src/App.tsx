import * as React from 'react';
import './App.css';

import ReactAsciiVideo from './components/ReactAsciiVideo/ReactAsciiVideo';

class App extends React.Component {
  
  public render() {
    return (
      <div>
        <div className="video_wrapper">
          <ReactAsciiVideo height={400} volume={1} src={require('./assets/video_demo.mp4')}/>
        </div>
      </div>
    );
  }
}

export default App;
