import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./RepositoryDetails.module.css";
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
  }, [user, repo]); // fetch commits met maximaal 20 resultaten
  const filterCommits = () => {
    return commits.filter((commit) =>
      commit.commit.message.toLowerCase().includes(searchInput.toLowerCase())
    ); // zet de commits die je wilt zoeken naar lowercase voor results
  };

  return (
    <div className={styles.background}>
      <h2>
        Commits voor {user}/{repo}
      </h2>
      <input
        type="text"
        placeholder="Filter commits..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {filterCommits().map((commit) => (
          <div key={commit.sha}>-{commit.commit.message} </div>
        ))}
      </ul>
      <Link to="/">Terug naar repositories</Link>
    </div>
  );
};

export default RepositoryDetails;
