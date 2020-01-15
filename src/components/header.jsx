import React, { Component } from 'react';
import "../styles/header.sass"
import { Person, NotificationsActive, Update } from "@material-ui/icons"

class Header extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li><Update/> updates</li>
                    <li><NotificationsActive/> notification</li>
                    <li><Person/> login</li>
                </ul>
            </header>
        )
    }
}

export default Header