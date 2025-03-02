/*
import React from "react";
import Link from "next/link";
import GetLink from "../sharedComponent/dynamicRoute";

function MyComponent(){
    return(
    <div>
    <GetLink title='Page 1'></GetLink>
    <GetLink title='Page 2'></GetLink>
    <GetLink title='Page 3'></GetLink>
    </div>
    );
    }
    export default MyComponent;
    */
import React from "react"; 
import axios from "axios"; 


export default class GitHubUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      username: "", // Controlled input state
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const res = await axios.get("https://api.github.com/users");
      this.setState({ data: res.data, error: null });
    } catch (e) {
      this.setState({ error: e });
    }
  };

  GetUser = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${this.state.username}`
      );
      this.setState({ data: [res.data], error: null });
    } catch (e) {
      this.setState({ data: [], error: e });
    }
  };

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Github Users</h1>
        <br />
        <div className="center">
          <input
            id="inputTextbox"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.GetUser}>
            Get User
          </button>
        </div>
        <br />

        {this.state.error ? (
          <p className="error">Error: {this.state.error.message}</p>
        ) : (
          this.state.data.map((item, index) => (
            <div key={index} className="UserBlock">
              <img src={item.avatar_url} alt="User Icon" />
              <div className="UserDetails">
                <p>Username: {item.login}</p>
                <p>ID: {item.id}</p>
                <p>
                  <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}
