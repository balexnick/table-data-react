import React from "react";
import styled from "styled-components";

const ErrorComponent = ({ errorMessage }) => {
  return <Div>{errorMessage}</Div>;
};

export default ErrorComponent;
const Div = styled.div`
  margin: 30px 50px;
  background: #dc3545;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  border: 3px solid #942828;
`;
