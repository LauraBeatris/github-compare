import React, { Component } from "react";
import moment from "moment";
import { HeaderStyled, Container } from "./styles";
import "font-awesome/css/font-awesome.css";
import List from "../../components/List/List";
import Logo from "../../assets/logo.png";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  // Updating the value of the repositoryInput
  handleChange = event => {
    this.setState({ repositoryInput: event.target.value });
  };

  // Searching informations about the repository
  // Asynchronous event
  handleAddRepository = async event => {
    event.preventDefault();

    // Beggining --> Setting the loading to true
    this.setState({ loading: true });

    try {
      // Getting the data from api

      // Destructuring the response and getting the data
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      // Creating a new field with the format date
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      // Updating the state with the new repository data
      this.setState({
        repositoryInput: "",
        repositoryError: false,
        repositories: [...this.state.repositories, repository]
      });
    } catch (err) {
      // Showing errors
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  // Removing individual repositories
  handleRemoveRepo = async id => {
    // Filtering comparing with the id
    this.setState(prevState => ({
      repositories: prevState.repositories.filter(
        repository => id !== repository.id
      )
    }));

    // Setting the new array of repositories on local storage
    localStorage.setItem(
      "repositories",
      JSON.stringify(this.state.repositories)
    );
  };

  // Updating the data of individual repositories
  handleRefreshRepo = id => {
    const { repositories } = this.state;

    // Getting the repository of the target
    const repository = repositories.find(repo => repo.id === id);

    try {
      const { data } = api.get(`/repos/${repository.full_name}`);

      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: "",
        // If the repo is equal to the target, we'll replace on the currently array
        repositories: repositories.map(repo =>
          repo.id === data.id ? data : repo
        )
      });
    } catch {
      this.setState({ repositoryError: true });
    }
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("repositories");
      // Turning the json into objects
      const repositories = JSON.parse(json);

      // Checking if isn't null
      if (repositories) {
        // Setting the state to the currently array of repositories
        this.setState({ repositories });
      }
    } catch (err) {
      //Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // First step --> Verifying if the data real changed
    if (prevState.repositories.length !== this.state.repositories.length) {
      // Turning the objects into json
      const json = JSON.stringify(this.state.repositories);
      localStorage.setItem("repositories", json);
    }
  }

  render() {
    return (
      <Container>
        <HeaderStyled withError={this.state.repositoryError}>
          <img src={Logo} alt="logo" className="logo" />

          <form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              name="user"
              id="user-input"
              placeholder="github user/repository"
              value={this.state.repositoryInput}
              onChange={this.handleChange}
            />
            <button type="submit" id="add-user">
              {" "}
              {this.state.loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                "Search"
              )}{" "}
            </button>
          </form>
        </HeaderStyled>

        <List
          repositories={this.state.repositories}
          handleRefreshRepo={this.handleRefreshRepo}
          handleRemoveRepo={this.handleRemoveRepo}
        />
      </Container>
    );
  }
}
