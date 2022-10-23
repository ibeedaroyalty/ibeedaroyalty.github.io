import React from "react";
import {
  Background
} from './styles'
export const EnterSite = ({setLockedOut}) => {
  return <Background>
    <button onClick={() => {setLockedOut(false)}}>Enter Studio</button>
  </Background>
}