import * as React from 'react';
import './App.css';

import ReactAsciiVideo from './components/ReactAsciiVideo/ReactAsciiVideo';
interface IState {
  src: string,
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      src: require('./assets/video_demo.mp4')
    };
  }
  public render() {
    return (
      <div className="app">
        <div className="video_wrapper">
          <ReactAsciiVideo height={400} volume={1} src={this.state.src} />
        </div>
        <div className="btn_group">
          <button className="btn">
            替换视频
            <input accept="video/mp4" onChange={this.onReplaceVide} type="file" />
          </button>
          <button onClick={this.onUseWebCam} className="btn">使用WebCam</button>
        </div>
      </div>
    );
  }
  private onReplaceVide: (e: React.ChangeEvent<HTMLInputElement>) => void 
    = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { files } } = e;
    if (files && files.length > 0) {
      this.setState({
        src: window.URL.createObjectURL(files[0])
      });
    }
    e.target.value = '';
  }

  private onUseWebCam: () => void = () => {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    }).then(stream => {
      this.setState({
        src: window.URL.createObjectURL(stream)
      });
    });
  }
}

export default App;
