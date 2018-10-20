import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../assets/wildfire.jpg';


const LandingPage = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9
`

const Title = styled.h1`
  color: #e25822;
  font-family: 'Orbitron', sans-serif;
  font-size: 100px;
`

const Button = styled.button`
  width: 400px;
  height: 150px;
  border: none;
  border-radius: 20px;
  background-color: #e25822;
  color: #A8AFB5;
  font-family: 'Orbitron', sans-serif;
  font-size: 40px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
`

const Landing = () => {
  return (
    <LandingPage>
      <Title className='app-title'>FIRE!!!</Title>
      <Link to='/report'><Button>Report a Fire</Button></Link>
      <Link to='fire-map'><Button>Find a Fire</Button></Link>
    </LandingPage>
  )

}

export default Landing