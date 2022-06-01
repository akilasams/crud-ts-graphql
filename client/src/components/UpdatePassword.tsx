import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Current Password"
        onChange={(e) => {
          setCurrentPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="New Password"
        onChange={(e) => {
          setNewPassword(e.target.value);
        }}
      />

      <button
        onClick={() =>
          updatePassword({
            variables: { username, oldPassword: currentPassword, newPassword },
          })
        }
      >
        Update Password
      </button>
    </div>
  );
}

export default UpdatePassword;
