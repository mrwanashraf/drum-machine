import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './header.scss';

library.add(faGithub);

export default class Header extends React.Component {
    render() {
        return (
            <header>
                    <h1>Drum Machine - </h1>
                    <a href="https://github.com/mrwanashraf/drum-machine" target="_blank">
                        <FontAwesomeIcon id="github" icon={faGithub} />
                    </a>
            </header>
        );
    }
}