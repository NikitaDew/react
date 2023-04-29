import React from "react";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Parent - constructor");
  }
  async componentDidMount() {
    //Api calls
    const data = await fetch("https://api.github.com/users/NikitaDew");
    const json = await data.json();
    // this.setState({ userInfo: json });
    // this.setState({ details: { area: "keshkal", hobbies: "dance" } });
    // console.log("this.state.userInfo", this.state);

    // this.timer = setInterval(() => {
    //   console.log("time interval");
    // }, 1000);
    console.log("Parent - componentDidMount");
  }
  // componentDidMount() {
  //   // this.timer = setInterval(() => {
  //   //  // console.log("time interval");
  //   // }, 1000);
  //   console.log("Parent - componentDidMount");
  // }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Parent - componentWillUnmount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      //code
    }
    console.log("Parent - componentDidUpdate");
  }
  render() {
    console.log("Parent - render()");
    return (
      <>
        <h1>About Us Page</h1>
        {/* <ProfileFunctionalComponent name="Nikita " /> */}
        <Profile name="Nikita Class" />
      </>
    );
  }
}
export default About;

/*  Parent - constructor
    Parent - render()
      Child - constructor
      Child - render()
    Parent - componentDidMount
      Child - componentDidMount
      Child- render()
      Child - componentDidUpdate
*/
// import { Outlet } from "react-router-dom";
// import Profile from "./ProfileClass";
// import ProfileFunctionalComponent from "./Profile";
// const About = () => {
//   return (
//     <>
//       <h1>About Us Page</h1>
//       <ProfileFunctionalComponent name="Nikita " />
//       <Profile name="Nikita Class" />
//     </>
//   );
// };
// export default About;
