import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  input {
    padding: 10px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-weight: 500;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background-color: #ccc;
    color: #000;
    cursor: pointer;
    font-weight: bold;
  }

  &:hover > button {
    background-color: #aaa;
  }
`;
