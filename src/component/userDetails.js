import React, { Component } from "react";

export class UserDetails extends Component {

    showDetails = () => {
        document.getElementById("form").style.display = "block"
        document.getElementById("details").style.display = "none"
    }

    render() {
        console.log(this.props.details);
        return (
            <div id="details" className="details" >


                {this.props.details.map((val, key) => {
                    return <div className="user" key={key} >
                        Name : {val.name} |
                        Department : {val.dep} |
                        Rating : {val.rating}
                    </div>

                })}
                <center className="submit-btn" onclick={this.showDetails} >Back</center>
            </div>
        );

    }
}


