import React from 'react'
import {
    Button,
    Col,
  } from 'reactstrap';
  import {useNavigate} from 'react-router';
const HomeScreen = ({navigation}) => {
    const navigate = useNavigate();
  return (
    <Col>
      <Button
        name='Cooks'
        onClick={() => navigate("Cooks",{state:{currentDay:0}})}
      >Cooks </Button>
      <Button
        name='Waiters'
        onClick={() => navigate("Waiters",{state:{currentDay:0}})}
      >Waiters </Button>
    </Col>
  )
}
export default HomeScreen