import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import DrumPad from './DrumPad/DrumPad.jsx'
import Header from './Header/Header.jsx'
import Display from './Display/Display.jsx'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: ''
        }
        this.play = this.play.bind(this);
        this.currentSound = this.currentSound.bind(this);
    }

    // play the drumpad sound based on the event type.
    play(e, drumpad) {
        switch (e.type) {
            case 'click':
                e.target.lastChild.pause();
                e.target.lastChild.currentTime = 0;
                e.target.lastChild.play();
                this.currentSound(e.target);
            break;
            case 'keydown':
                drumpad.lastChild.pause();
                drumpad.lastChild.currentTime = 0;
                drumpad.lastChild.play();
                this.currentSound(drumpad);
            break;
        }

        
    }

    currentSound(e) {
        this.setState({
            sound: e.id
        });
    }


    componentDidMount() {
        const drumpads = document.querySelectorAll('.drum-pad');

        // play the drumpad if the value of key pressed matches the value inside the drumpad.
        document.addEventListener('keydown', (e) => {
            [...drumpads].map( drumpad => {
                if (e.key.toUpperCase() ===  drumpad.textContent) {
                    this.play(e, drumpad);
                }
            });
        });
    }

    render() {
        return (
            <section  id="drum-machine">
                <Header />
                <Display sound={this.state.sound} />
                <section class="drum-pads">
                    <DrumPad play={this.play} sound="crush-1" DrumPadID="Q" DrumPadClass="clip" audioSrc="../sounds/crush-1.mp3"/>
                    <DrumPad play={this.play} sound="crush-2" DrumPadID="W" DrumPadClass="clip" audioSrc="../sounds/crush-2.mp3"/>
                    <DrumPad play={this.play} sound="cowbell" DrumPadID="E" DrumPadClass="clip" audioSrc="../sounds/cowbell.mp3"/>
                </section>
                <section class="drum-pads">
                    <DrumPad play={this.play} sound="Bdrum" DrumPadID="A" DrumPadClass="clip" audioSrc="../sounds/Bdrum.mp3"/>
                    <DrumPad play={this.play} sound="High-hat-close" DrumPadID="S" DrumPadClass="clip" audioSrc="../sounds/High-hat-close.mp3"/>
                    <DrumPad play={this.play} sound="High-hat-open" DrumPadID="D" DrumPadClass="clip" audioSrc="../sounds/High-hat-open.mp3"/>
                </section>
                <section class="drum-pads">
                    <DrumPad play={this.play} sound="snare" DrumPadID="Z" DrumPadClass="clip" audioSrc="../sounds/snare.mp3"/>
                    <DrumPad play={this.play} sound="Tom-1" DrumPadID="X" DrumPadClass="clip" audioSrc="../sounds/Tom-1.mp3"/>
                    <DrumPad play={this.play} sound="Tom-2" DrumPadID="C" DrumPadClass="clip" audioSrc="../sounds/Tom-2.mp3"/>
                </section>
            </section>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.querySelector('#app'));