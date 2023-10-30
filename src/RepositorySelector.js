import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./RepositorySelector.module.css";

const RepositorySelector = () => {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${user}/repos`).then((response) => {
      setRepositories(response.data); // response met gebruiker zijn repositories
    });
  };

  return (
    <div className={styles.background}>
      <h1>Openbare GitHub-repositories</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Kies een gebruiker "
          />
        </label>
        <input type="submit" />
      </form>
      <ul>
        {repositories.map((repo) => (
          <div>
            <Link to={`/repos/${user}/${repo.name}`}>{repo.name}</Link>, ⭐{" "}
            {repo.stargazers_count}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RepositorySelector;
