import React, { Component } from 'react';
import "../styles/navbar.sass"
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/styles"

const styles = {
    btn: {
        width: "100%",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.2)"
    }
}

class NavBar extends Component {
    render() {
        const { classes } = this.props
        return (
            <nav>
                <h2 className="title">navigation</h2>

                <ul>
                    <h4>Head Constable</h4>
                    <Button className={classes.btn} >view</Button>
                    <Button className={classes.btn} >edit</Button>
                    <Button className={classes.btn} >delete</Button>
                </ul>
                <ul>
                    <h4>Sub-Constable</h4>
                    <Button className={classes.btn} >view</Button>
                    <Button className={classes.btn} >edit</Button>
                    <Button className={classes.btn} >delete</Button>
                </ul>
                <ul>
                    <h4>My Account</h4>
                    <Button className={classes.btn} >view</Button>
                    <Button className={classes.btn} >edit</Button>
                    <Button className={classes.btn} >delete</Button>
                </ul>
            </nav>
        )
    }
}

export default  withStyles(styles)(NavBar)