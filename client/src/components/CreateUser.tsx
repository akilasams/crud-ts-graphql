import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutations";

function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div className="create-user">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUserame(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createUser({ variables: { name, username, password } });
        }}
      >
        Create User
      </button>
    </div>
  );
}

export default CreateUser;
