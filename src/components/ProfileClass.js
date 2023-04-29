import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: this.props.name,
        location: "",
      },
      details: {
        area: "",
        hobbies: "",
      },
    };
    console.log("Child - constructor");
  }
  async componentDidMount() {
    //Api calls
    const data = await fetch("https://api.github.com/users/NikitaDew");
    const json = await data.json();
    this.setState({ userInfo: json });
    this.setState({ details: { area: "keshkal", hobbies: "dance" } });
    // console.log("this.state.userInfo", this.state);

    // this.timer = setInterval(() => {
    //   console.log("time interval");
    // }, 1000);
    console.log("Child - componentDidMount");
  }
  componentWillUnmount() {
    //  clearInterval(this.timer);
    console.log("Child - componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo !== prevState.userInfo) {
      //code
    }
    if (this.state.details !== prevState.details) {
      //code
    }
    console.log("Child - componentDidUpdate");
  }
  render() {
    const { userInfo } = this.state;
    console.log("Child - render()");
    return (
      <div>
        <h2>Profile Class Based component</h2>
        <h3>Name: {userInfo.name}</h3>
        <img src={userInfo.avatar_url} />
        <h3>Location: {userInfo.location}</h3>
      </div>
    );
  }
}

export default Profile;
