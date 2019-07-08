import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.18);
  background-color: #3678d9;
  padding: 1rem 3rem;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 15rem;
  }

  #user-input {
    border-radius: 15px;
    padding: 1rem 1rem;
    width: 32rem;
    margin-right: 1rem;
    background-color: #ffffff;
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
    color: #676767;
    font-family: inherit;
    box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.18);

    border: ${props =>
      props.withError ? "solid 2px tomato" : "solid 2px #c5d6ef"};
  }

  #user-input::placeholder {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: normal;
    text-align: left;
    color: #676767;
  }

  #add-user {
    width: 80px;
    padding: 0 1rem;
    border-radius: 10px;
    background-color: tomato;
    font-size: 1.3rem;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    font-family: inherit;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.18);
    transition: all 0.25s;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.18);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.18);
    }
  }

  form {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 45rem) {
    img {
      width: 9rem;
      margin-right: 2rem;
    }
    #user-input {
      width: 17rem;
      font-size: 0.8rem;
    }

    #user-input::placeholder {
      font-size: 0.9rem;
    }

    #add-user {
      padding: 0 0.5rem;
      font-size: 1rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
