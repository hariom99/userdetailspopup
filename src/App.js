import { Component } from 'react';
import './App.css';
import { UserForm } from "./component/userForm";
import { UserDetails } from "./component/userDetails";
class App extends Component {
  state = {

    userInfo: {
      name: "",
      dep: "",
      rating: ""
    },

    details: []
  };
  // setState({ details: [] })
  addDetails = (name, dep, rat) => {
    let newObj = { name: name, dep: dep, rating: rat };
    // console.log(newObj);
    let arr = [...this.state.details, newObj];
    this.setState({ details: arr });
    // console.log(arr);
  }

  render() {

    return (
      <div className="App">
        {/* <button onClick={this.check} >tap here</button> */}
        <UserForm addDetails={this.addDetails} />
        <UserDetails details={this.state.details} />
      </div>
    );
  }
}

export default App;










// <div>
//           {this.state.details.map((data) => {
//             return <p> {data.name} </p>
//           })}
//  </div>