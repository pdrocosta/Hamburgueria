import styled from "styled-components";

const StyledHeader = styled.header`
  header {
    box-sizing: border-box;

    height: 10%;
    display: flex;
    color: var(--color-grey-1);
    background-color: var(--color-grey-4);
    align-content: center;

    align-items: center;
    padding-right: 8%;
    padding-left: 4%;
    padding-top: 1%;
    padding-bottom: 1%;
    justify-content: space-between;
  }
  span {
    color: var(--color-secondary);
    font-size: bold;
  }
  .div_header_input {
    display: flex;
    background-color: white;
    border-radius: var(--border-default);
    border: 2px solid var(--color-grey-3);
    justify-content: space-between;

  }
  #btn_search {
    background-color: var(--color-primary);
    font-size: 16px;
    padding: 6%;
    width: 40%;
    border: none;
    border-radius: var(--border-default);
    color: white;
  }
  form {
    display: flex;
    width: 400px;
  }
  #inputSearch {
    background-color: transparent;
    color: var(--color-grey-2);
    border: none;
    width: 60%;
    padding: 0.5%;
  }
  @media (max-width: 900px) {
    header {
      flex-direction: column;
      width: 100%;
    }
    .div_header_input {
      margin-top: 10%;
      width: 90%;
    }
  }
`;
export default StyledHeader;
