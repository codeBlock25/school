import React, { Component } from 'react';
import { Person, MenuBook, PermContactCalendar, ExitToApp } from '@material-ui/icons';
import "../styles/header.sass"
import { addStaffAction, addStudentAction, setExamAction } from '../redux/actions/navigation';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"


class Header extends Component {
    constructor(props) {
        super(props) 
        this.state={
            status: "staff"
        }
    }
    async componentDidMount(){
        let status = await localStorage.getItem("status")
        this.setState({status: status})
    }
    render() {
        return (
            <header style={
                this.props.match.path === "/register" || this.props.match.path === "/login" || this.props.match.path === "/question"?{display: "none"}
                : {display: "flex"}
            }>
                <h2 className="title">{this.state.status === "admin" ? "Admin": "Teacher"}</h2>
                <ul>
                    <li onClick={this.props.setExam}><MenuBook/> Set question</li>
                    <li onClick={this.props.addStudent}><Person/> Add student</li>
                    {
                        this.state.status === "admin" ? 
                        <li onClick={this.props.addStaff}><PermContactCalendar/> Add staff</li>
                        : ""
                    }
                    <li onClick={()=>{
                        localStorage.setItem("token", null)
                        localStorage.setItem("status", null)
                        this.props.history.push("/login")
                        }}><ExitToApp/> logout</li>
                </ul>
            </header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAddStaff: state.nav.add_staff_open,
        isAddStudent: state.nav.add_student_open,
        isExamStaff: state.nav.add_exam_open
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addStaff: () => {
            dispatch(addStaffAction())
        },
        addStudent: () => {
            dispatch(addStudentAction())
        },
        setExam: () => {
            dispatch(setExamAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))