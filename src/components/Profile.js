import { useEffect, useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    //Api calls
    getUserInfo();
    const timer = setInterval(() => {
      console.log("time interval function");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/NikitaDew");
    const json = await data.json();
  }
  return (
    <div>
      <h2>Profile Funtional Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default Profile;
