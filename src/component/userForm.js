import React, { Component } from "react";
export class UserForm extends Component {
    state = { name: null, dep: null, rating: null };
    data = [[1, 2, 3]];

    setName = (event) => {

        this.setState({ name: event.target.value });
    }
    setDep = (event) => {
        this.setState({ dep: event.target.value });
    }
    setRat = (event) => {
        this.setState({ rating: event.target.value });
    }

    check = () => {
        this.props.addDetails(this.state.name, this.state.dep, this.state.rating);

    }

    render() {


        return <div id="form" >
            <h1 style={{ textAlign: "center" }} >EMPLOYEE FEEDBACK FORM</h1>
            <div className="form-div" >
                <span>Name</span> <input id="name" className="inp" onChange={this.setName} placeholder="   enter name" /><br />
                <span>Department</span><input id="dep" className="inp" onChange={this.setDep} placeholder="  enter department" /><br />
                <span>Rating</span><input id="rating" className="inp" onChange={this.setRat} placeholder="  enter rating" />
                <br />
                <input className="submit-btn" onClick={this.check} type="submit" />
            </div>
            <hr className="hr" />

        </div>
    }
}




















// getDetails = () => {
//     // this.data.push("ip");
//     let ip = [];
//     // ip[0] = "";
//     // ip[1] = "";
//     // ip[2] = "";
//     // this.data.push(ip);
//     ip[0] = document.getElementById("name").value;
//     ip[1] = document.getElementById("dep").value;
//     ip[2] = document.getElementById("rating").value;
//     document.getElementById("name").value = "";
//     document.getElementById("dep").value = "";
//     document.getElementById("rating").value = "";
//     this.data.push(ip);
//     // let name = document.getElementById("name").value;
//     // let dep = document.getElementById("dep").value;
//     // let rating = document.getElementById("rating").value;
//     // console.log(ip[0] + " " + ip[1] + " " + ip[2]);
//     // console.log(this.data);
//     this.setState({ name: "hk" });
//     return ip;
// }