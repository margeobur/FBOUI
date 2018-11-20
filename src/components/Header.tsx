import * as React from 'react';
import { Navbar } from 'react-bootstrap';

import FBOLogo from './fbo_logo.png';
import 'src/css/Header.css';

export const Header: React.StatelessComponent<{}> = () => {
    return(
        <Navbar className='header-wrapper' >
            <Navbar.Header className="header">
                <Navbar.Brand>
                    <a href="#"><img src={FBOLogo} height="80"/></a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}