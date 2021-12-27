import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../user/user.css";

export default function User() {
  let { userName } = useParams();
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((results) => results.json())
      .then((data) => {
        setRepos(data);
      });

    fetch(`https://api.github.com/users/${userName}`)
      .then((results) => results.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);

  return (
    <>
      <h3>User</h3>
      <div className="repo">
        <div className="user-repo">
          {repos.map((item) => (
            <div className="repo-item" key={item.id}>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.update_at}</div>
              <div>
                <span>{item.forks_count} Fork</span>
                <span>{item.stargazers_count} Star</span>
              </div>
            </div>
          ))}
        </div>
        <div className="user-info">
          <div className="user-avatar">
            <img src={userInfo.avatar_url} />
          </div>
          <div className="info-item">{userInfo.name}</div>
          <div className="info-item">{userInfo.bio}</div>
          <div className="info-item">
            <span>{userInfo.public_repos}</span>
            <span>{userInfo.following}</span>
            <span>{userInfo.followers}</span>
          </div>
        </div>
      </div>
    </>
  );
}
