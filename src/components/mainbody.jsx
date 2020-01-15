import React, { Component } from 'react';
import "../styles/mainbody.sass"

class MainBody extends Component {
    render() {
        return (
        <section className="mainBody">
            {this.props.children}
        </section>
        )
    }
}
export default MainBody