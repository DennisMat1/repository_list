import React, { useState } from "react";
import axios from "axios";

const GitHubAPIExample = () => {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${user}/repos`).then((response) => {
      setRepositories(response.data);
    });
  };

  return (
    <div>
      <h1>Openbare GitHub-repositories</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Kies een gebruiker: 
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}, ⭐ {repo.stargazers_count}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubAPIExample;
