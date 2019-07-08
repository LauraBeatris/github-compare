import React, { Component } from "react";
import List from "../../components/List/List";
import Logo from "../../assets/logo.png";
import api from "../../services/api";
import { HeaderStyled, Container } from "./styles";

export default class Main extends Component {
  state = {
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

    try {
      // Getting the data from api
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, response.data]
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <HeaderStyled>
          <img src={Logo} alt="logo" className="logo" />
          <form onSubmit={this.handleAddRepository}>
            <input
              type="text"
              name="user"
              id="user-input"
              placeholder="type a github user"
              value={this.state.repositoryInput}
              onChange={this.handleChange}
            />
            <button type="submit" id="add-user">
              {" "}
              Search{" "}
            </button>
          </form>
        </HeaderStyled>

        <List repositories={this.state.repositories} />
      </Container>
    );
  }
}
