import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const RepositoryDetails = () => {
  const { user, repo } = useParams();
  const [commits, setCommits] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${user}/${repo}/commits`)
      .then((response) => {
        setCommits(response.data.slice(0, 20));
      });
  }, [user, repo]);
  const filterCommits = () => {
    return commits.filter((commit) =>
      commit.commit.message.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div>
      <h2>
        Commits for {user}/{repo}
      </h2>
      <input
        type="text"
        placeholder="Filter commits..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <ul>
        {filterCommits().map((commit) => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>
      <Link to="/">Terug naar repositories</Link>
    </div>
  );
};

export default RepositoryDetails;
