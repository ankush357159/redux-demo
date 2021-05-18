import React from "react";
import "./User.css";

const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>User Component</h1>
      <h4>
        Welcome <span className='red'>{data.name}</span> <br />
        Your age is <span className='red'>{data.age}</span>
      </h4>
    </div>
  );
};

export default User;
