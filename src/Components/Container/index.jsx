import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../LIst";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Contenido = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <Wrapper>
      <Title>Smart Bank</Title>
      <Contenido>
        <Account />
        <List />
      </Contenido>
    </Wrapper>
  );
};

export default Container;
