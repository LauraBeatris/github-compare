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

        <List repositories={this.state.repositories} />
      </Container>
    );
  }
}
