import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 5rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;
`;

export const Repository = styled.div`
  margin-right: 4rem;
  margin-bottom: 2rem;
  border-radius: 50px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5rem 5rem;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 146px;
      height: 144px;
      margin-bottom: 0.5rem;
    }

    small,
    strong {
      font-family: inherit;
      color: #676767;
    }

    strong {
      font-size: 3rem;
    }

    small {
      font-size: 1.8rem;
    }
  }

  ul {
    list-style: none;
  }

  li {
    color: #676767;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;

    small {
      font-weight: normal;
      font-style: italic;
    }

    &:nth-child(2n - 1) {
      background-color: #e9e9e9;
    }
  }

  @media screen and (max-width: 45rem) {
    margin: 1rem 0.5rem;

    &:nth-child(2n - 1) {
      margin-right: 1.4rem;
    }

    padding: 2rem 2rem;
    header {
      img {
        width: 7rem;
        height: 7rem;
        margin-bottom: 0.5rem;
      }

      strong {
        font-size: 1.8rem;
      }

      small {
        font-size: 0.9rem;
      }
    }

    ul {
      list-style: none;
    }

    li {
      color: #676767;
      font-weight: bold;
      font-size: 0.9rem;
      padding: 0.5rem 2rem;
    }
  }
`;
