import React from 'react';
import './Display.scss';

export default class Display extends React.Component {
    render() {
        return (
             <section id="display">
                    <p> 
                        {this.props.sound}
                    </p>
            </section>
        );
    }
}