
import { useState } from "react";
import styled from "styled-components";
import Controller from "./Controller";

const UpdateBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10vh 0;
`

const MainPanel = styled.div`
  box-sizing: content-box;
  width: 45vw;
  height: 100%;
  background: rgb(255, 255, 255);
  border: 0.05rem solid rgb(223, 245, 61);
  border-radius: 0.3rem;
`

const Input = styled.div`
  width: 45vw;
  height: 54vh;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  background-color: rgb(0, 0, 0, 0.8);
`

const NavRow = styled.ul`
  list-style-type: none;
  width: 45vw;
  height: 6vh;
  margin: 0;
  padding: 0;
`

const Tab = styled.li`
  display: inline-block;
  width: 15vw;
  height: 6vh;
  padding: 0 1.5vw;
  line-height: 6vh;
  font-size: 0.9rem;
  color: rgb(223, 245, 61);
  background-color: ${props => props.active ? "rgb(0, 0, 0, 0.8)" : "rgb(0, 0, 0, 0.9)"};
  cursor: ${props => props.active ? "default" : "pointer"};
  text-shadow: ${props => props.active ? "0.05rem 0.05rem 0.08rem rgb(223, 245, 61, 0.5)" : "0"};

  &:hover {
    background-color: ${props => props.active ? "rgb(0, 0, 0, 0.8)" : "rgb(223, 245, 61, 0.9)"};
    color: ${props => props.active ? "rgb(223, 245, 61)" : "rgb(0, 0, 0, 0.9)"};
  }

  &:nth-child(1) {
    border-top-left-radius: 0.3rem;
  }

  &:nth-child(3) {
    border-top-right-radius: 0.3rem;
  }
`


export default function UpdateBox() {

  const [ activeTab, setActiveTab ] = useState(0);

  return (
    <UpdateBoxContainer>
      <MainPanel>
        <NavRow>
          <Tab onClick={() => setActiveTab(0)} active={activeTab === 0}>Deposits</Tab>
          <Tab onClick={() => setActiveTab(1)} active={activeTab === 1}>Debt</Tab>
          <Tab onClick={() => setActiveTab(2)} active={activeTab === 2}>Interest</Tab>
        </NavRow>
        <Input>
          <Controller tab={activeTab} />
        </Input>
      </MainPanel>
    </UpdateBoxContainer>
  );
}