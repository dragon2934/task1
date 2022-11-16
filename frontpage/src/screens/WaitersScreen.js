import React, {useEffect, useCallback, useState} from 'react';
import {
    Button,
    Col,
    Label,
    Row,
} from 'reactstrap';
import {useNavigate, useLocation} from 'react-router';
import { getWaiters } from '../api/API';
import { getWorkDay } from '../utils/utils';
const WaitersScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
      document.title = "Waiters"
  }, []);

  const [Waiters,setWaiters] = useState(null);

  useEffect(() => {
    getWaiters().then(resp=>{
      setWaiters(resp.data.data.data);
    })
  }, []);

 const [selectedDate,setSelectedDate] = useState(state.currentDay);
 const [prevBtnEnable, setPrevBtnEnable ] = useState(false);
 const [nextBtnEnable, setNextBtnEnable ] = useState(true);
 

 const getWaitersForToday = (today) =>{
    const todayName = getWorkDay(today);
    const WaitersForToday = Waiters !== null && Waiters !== undefined ? Waiters[todayName] : null;
    return WaitersForToday;
 }
 const onPrevButtonClick = useCallback(() => {
    const currentDate = selectedDate;
    const workDay = getWorkDay (currentDate - 1);
    if( workDay === "-1"){
      setPrevBtnEnable(false);
    }else{
      setSelectedDate(currentDate - 1);
    }

 });
 const onNextButtonClick = useCallback(() => {
  const currentDate = selectedDate;
  const workDay = getWorkDay (currentDate + 1);
  if( workDay === "1"){
    setNextBtnEnable(false);
  }else{
    setSelectedDate(currentDate + 1);
  }

});
  return (
    
    <Col>
      <Row>
        <Col>
          <Label> Waiters Screen </Label>
        </Col>
      </Row>

      <Row>
        <Col xs="4">
          <Label> Work Date </Label>
       </Col>
       <Col xs="8">
          { getWorkDay(selectedDate) }
        </Col>
      </Row>

      <Row>
        <Col xs="4">
          <Label> Today's Waiters </Label>
        </Col>
        <Col xs="8">
          {  getWaitersForToday(selectedDate) !== null && getWaitersForToday(selectedDate) !== undefined && getWaitersForToday(selectedDate).length >0 ? getWaitersForToday(selectedDate).map(item => (
          <>
          <div>
          {item}
          </div>
          </>         
          )):null }
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            active = { prevBtnEnable }
            onClick={() => onPrevButtonClick()}
          >Prev </Button>
          <Button
            active = { nextBtnEnable }
            onClick={() => onNextButtonClick() }
          >Next </Button>
         </Col>
      </Row>

      <Row>
        <Col>
          <Button
            active = { prevBtnEnable }
            onClick={() => navigate("/Cooks",{state:{currentDay:selectedDate}})}
          >Cooks </Button>
      
        </Col>
      </Row>
    </Col>
  )
}
export default WaitersScreen;