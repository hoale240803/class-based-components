import { Component } from "react";
import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler = () => {
    // setShowUsers((curState) => !curState);
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers,
      };
    });
  };
  componentDidUpdate() {
    try {
      if (this.props.users.length === 0) {
        throw new Error("No users provided!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users &&
          this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
