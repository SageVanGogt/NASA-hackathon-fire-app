import React, { Component } from 'react';
import styled from 'styled-components';
import img from '..assets/wildfire.jpg';
import phone from '..assets/phone-256.png';

const InTheEvent = styled.div`
  box-sizing: border-box;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Orbitron', sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
`

const Call = styled.a`
  text-decoration: none;
  font-size: 40px;
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
  cursor: pointer;
`

const ListTitle = styled.ul`
  color: #e25822;
  font-family: 'Orbitron', sans-serif;
  font-size: 40px;
  list-style: none;
`

const List = styled.li`
  color: #e25822;
  font-family: 'Orbitron', sans-serif;
  font-size: 50px;
`

const InTheEventOfAFire = () => {
  return (
    <InTheEvent>
      <ListTitle>What to do if you find a forest fire:
        <List>If you see smoke, fire, or suspicious activities, note the location as best you can and report it to authorities</List>
        <List>Do NOT attempt to contact suspicious people or try to put out a fire by yourself</List>
        <List>Do NOT try to outrun the blaze. Instead, look for a body of water such as a pond or river to crouch in if you cannot escape the flames.</List>
        <List>Embers can jump canyons. Head for home or a safe space </List>
      </ListTitle>
      <Button>
        <Call  href=`tel:911`><img src='../assets/phone-256.png'/>Emergency Services (911)</Call>
      </Button>
      <Button>
        <Call  href=`tel:2083843400`><img src='../assets/phone-256.png'/>National Interagency Fire Center</Call>
      </Button>
    </InTheEvent>

    )
}

export default InTheEventOfAFire;

