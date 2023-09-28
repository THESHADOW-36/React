import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

function StyledComponents(){
  const router = useNavigate()
  const Button = styled.button`
    border-radius: 8px;
    color : black;
    background-color : red;
    font-size:24px;
    font-weight: 800;
    padding: 10px
  `
  return(
    <div style={{backgroundColor: 'orange',height: '200px'}}>
      <h1>Styled Components</h1>
      <br />
      <Button onClick={()=>router('/')}>Homepage</Button>
    </div>
  )
}

export default StyledComponents