import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function User() {
  let { userName } = useParams();
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((result) => {
        console.log("repo:", result);
      });
  });
  return (
    <>
        <h3>User</h3>
        <div>

        </div>
    </>
  )
}
