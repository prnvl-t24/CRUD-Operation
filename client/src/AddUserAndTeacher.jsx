// AddUserAndTeacher.js
import React from "react";
import AddUser from "./adduser/AddUser";
import AddTeacher from "./AddTeacher";

const AddUserAndTeacher = () => {
  return (
    <div className="add-user-teacher-page">
      <h2>Add User</h2>
      <AddUser />
      <hr />
      <h2>Add Teacher</h2>
      <AddTeacher />
    </div>
  );
};

export default AddUserAndTeacher;
