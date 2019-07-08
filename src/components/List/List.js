import React from "react";
import PropTypes from "prop-types";
import { Container, Repository } from "./styles";
import remove from "../../assets/delete.svg";
import refresh from "../../assets/sync-alt-solid.svg";

const List = ({ repositories, handleRefreshRepo, handleRemoveRepo }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img
            id="icon"
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
          <div className="repository_buttons">
            <img
              onClick={e => {
                handleRemoveRepo(repository.id);
              }}
              id="remove"
              src={remove}
              alt="remove-button"
            />
            <img
              onClick={handleRefreshRepo}
              id="refresh"
              src={refresh}
              alt="refresh-button"
            />
          </div>
        </header>

        <ul>
          <li>
            {" "}
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {" "}
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {" "}
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {" "}
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

// Setting the propTypes
List.propTypes = {
  // Repositories is a array of objects
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      // Informations that we use from the each repository (that is a object)
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string
    })
  ).isRequired
};

export default List;
