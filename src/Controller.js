
import { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "./styles/index.css";

// red ...  rgb(255, 51, 133)
// yellow ...  rgb(223, 245, 61)
// green ...  rgb(140, 255, 26)

const ControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45vw;
  height: 54vh;
`

const ActionSpacer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`

const Action = styled.div`
  display: inline-block;
  width: 30%;
  height: 9vh;
  border: 0.01rem solid rgb(223, 245, 61, 0.8);
  border-right: ${props => props.action === "add" ? "0" : "0.1rem solid rgb(223, 245, 61, 0.8)"};
  border-left: ${props => props.action === "add" ? "0.1rem solid rgb(223, 245, 61, 0.8)" : "0"};
  font-size: 1.2rem;
  text-align: center;
  line-height: 9vh;
  background-color: ${props => props.active ? "rgb(0, 0, 0, 0.3)" : "rgb(0, 0, 0, 0.6)"};
  color: ${props => props.active ? "rgb(223, 245, 61, 1)" : "rgb(223, 245, 61, 0.3)"};
  text-shadow: ${props => props.active ? "0.05rem 0.05rem 0.08rem rgb(223, 245, 61, 0.5)" : "0"};
  cursor: pointer;
  &:nth-child(1) {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  &:nth-child(2) {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
`



const InputSpacer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`

const Input = styled.input`
  width: 80%;
  height: 9vh;
  margin: 0;
  padding: 0 1rem;
  font-size: 2.3rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  background-color: rgb(242, 242, 242);
`



const SliderSpacer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`

const SliderContainer = styled.div`
  width: 75%;
`



const ConfirmSpacer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`

const Confirm = styled.div`
  width: 70%;
  height: 9vh;
  text-align: center;
  line-height: 9vh;
  font-size: 1.2rem;
  border: 0.01rem solid rgb(223, 245, 61, 0.8);
  border-radius: 0.3rem;
  background-color: ${props => props.active ? "rgb(0, 0, 0, 0.3)" : "rgb(0, 0, 0, 0.6)"};
  color: ${props => props.active ? "rgb(223, 245, 61, 1)" : "rgb(223, 245, 61, 0.3)"};
  text-shadow: ${props => props.active ? "0.05rem 0.05rem 0.08rem rgb(223, 245, 61, 0.5)" : "0"};
  cursor: ${props => props.active ? "pointer" : "default"};
`


export default function Controller({ tab }) {

  const [ active, setActive ] = useState(0);
  const [ input, setInput ] = useState();

  if(tab === 2) return []
  else return (
    <ControllerContainer>
      <ActionSpacer>
        <Action action={"add"} active={active === 0} onClick={() => setActive(0)}>
          Add
        </Action>
        <Action action={"remove"} active={active === 1} onClick={() => setActive(1)}>
          Remove
        </Action>
      </ActionSpacer>
      <InputSpacer>
        <Input type="number" value={input} onChange={e => setInput(e.target.value)} />
      </InputSpacer>
      <SliderSpacer>
        <SliderContainer>
          <Slider min={0} max={100} step={1} value={input} onChange={value => setInput(value)} />
        </SliderContainer>
      </SliderSpacer>
      <ConfirmSpacer>
        <Confirm active={input ? true : false}>
          Confirm
        </Confirm>
      </ConfirmSpacer>
    </ControllerContainer>
  );
}