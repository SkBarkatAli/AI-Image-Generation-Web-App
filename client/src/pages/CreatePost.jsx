import React from "react";
import styled from 'styled-components'
import GenerateImageForm from "../components/GenerateImageForm";

const Container = styled.div`
   padding: 30px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8%;
  flex: 1;
  max-width: 1200px;
  height: fit-content;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const CreatePost =()=>{
    return <Container>
        <Wrapper>
            <GenerateImageForm/>
        </Wrapper>
        </Container>
};

export default CreatePost;