import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import FBOLogo from './fbo_logo.png';

export const Header: React.StatelessComponent<{}> = () => {
    return(
        <Navbar className='header-wrapper' >
            <Navbar.Header className="header">
                <Navbar.Brand>
                    <img src={FBOLogo} height='70'/>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}