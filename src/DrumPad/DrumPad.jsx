import React from 'react';
import './DrumPad.scss';

export default class DrumPad extends React.Component {
    render() {
        return (
            <div onClick={this.props.play} id={this.props.sound} className="drum-pad">
                {this.props.DrumPadID}
                <audio id={this.props.DrumPadID} className={this.props.DrumPadClass} src={this.props.audioSrc}></audio>
            </div>
        );
    }
}