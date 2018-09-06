import * as React from 'react';
import './ControlBar.css';
import PauseIcon from './Icon/PauseIcon';
import PlayIcon from './Icon/PlayIcon';

export interface IProps {
  onPlay: () => void;
  onPause: () => void;
  playing: boolean;
  duration: number;
  currentTime: number;
}
export default class ControlBar extends React.PureComponent<IProps> {
  private static coverTime(sec: number): string {
    const minute = Math.floor(sec / 60);
    const second = Math.floor(sec % 60);
    return `${minute < 10 ? '0' +  minute: minute}:${second < 10 ? '0' +  second: second}`;
  }
  public render() {
    return (
      <div className="control_bar_wrapper">
        <div className="control_bar">

          {
            this.props.playing ?
              <span onClick={this.props.onPause}>
                <PauseIcon />
              </span> :
              <span onClick={this.props.onPlay}>
                <PlayIcon />
              </span>
          }
        {ControlBar.coverTime(this.props.currentTime || 0)} / {ControlBar.coverTime(this.props.duration)}
        </div>
      </div >
    );
  }
}
