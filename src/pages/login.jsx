import React, { Component } from 'react';
import "../styles/account.sass"
import { Button, TextField, FormControlLabel, Checkbox } from "@material-ui/core"
import { ArrowForward } from "@material-ui/icons"
import { withStyles } from "@material-ui/styles"
import { ClipLoader } from "react-spinners"
import Axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const styles = {
    textfield: {
        width: "100%",
        margin: "10px 0",
        "& .MuiFormLabel-root.Mui-focused": {
            color: "rgb(245, 0, 87)",
            fontSize: "15px"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#a8a8a8"
        }
    },
    btn: {
        width: "50%",
        minWidth: "200px",
        height: "50px",
        backgroundColor: "#101010",
        color: "white",
        "&:hover": {
            backgroundColor: "#333"
        }
    }
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            loading: false
        }
        this.handleCheckChange = this.handleCheckChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleCheckChange(){
        this.setState({policy: !this.state.policy})
    }
    handleChange(e){
        this.setState({[e.target.id]: e.target.value})
        document.querySelector("form .error").classList.remove("active")
    }
    async handleSubmit(e){
        e.preventDefault()
        this.setState({loading: true})
        if (this.state.first_name === "") {
            this.setState({loading: false})
            document.querySelector("form .error").classList.add("active")
            document.querySelector("form .error").innerHTML ="please provide your first name"
        } else if(this.state.email === ""){
            this.setState({loading: false})
            document.querySelector("form .error").classList.add("active")
            document.querySelector("form .error").innerHTML ="please provide your email"
        } else if(this.state.password === ""){
            this.setState({loading: false})
            document.querySelector("form .error").classList.add("active")
            document.querySelector("form .error").innerHTML ="please provide your password"
        } else {
            document.querySelector("form .error").classList.remove("active")
            console.log("passed")
            await Axios({
                url: "http://localhost:1100/api/admin/add",
                method: "POST",
                data: {
                    first_name: this.state.first_name,
                    email: this.state.email,
                    password: this.state.password
                }
            }).then(()=>{
                toast.success("user added please login")
                setTimeout(() => {
                    this.setState({loading: false})
                    this.props.history.push("/login")
                }, 1500);
            }).catch(()=>{ 
                toast(err=>{
                    toast.error("communition with school server broken")
                    setTimeout(() => {
                        this.setState({loading: false})
                    }, 500);
                    console.log(err)
                })
            })
        }
    }
    render() {
        const { classes } = this.props
        return (
            <section className="account">
                <ToastContainer/>
                <div className="wrapper">
                    <h3>welcome back officer {this.state.first_name} </h3>
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="error">
                            error
                        </div>
                        <TextField
                            variant="outlined"
                            label="First Name"
                            id="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                            className={classes.textfield}
                        />
                        <TextField
                            variant="outlined"
                            label="Email"
                            id="email"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                            className={classes.textfield}
                        />
                        <TextField
                            variant="outlined"
                            label="password"
                            type="password"
                            id="password"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className={classes.textfield}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox checked={this.state.policy} onChange={this.handleCheckChange} value="checkedA" />
                          }
                          label="I here by accept and agree to the terms of use"
                          style={{display: "block"}}
                        />
                        <Button type="submit" className={classes.btn}>{this.state.loading? <ClipLoader color="white" size="25" sizeUnit="px" />: <span>register<ArrowForward style={{transform: "translate(30%, 23%)"}}/></span>}  </Button>
                    </form>
                </div>
            </section>
        )
    }
}

export default withStyles(styles)(Login)