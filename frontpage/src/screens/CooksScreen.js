import React, {useEffect, useCallback, useState} from 'react';
import {
  Button,
  Col,
  Label,
  Row,
} from 'reactstrap';
import { getCooks } from '../api/API';
import { getWorkDay } from '../utils/utils';
import {useNavigate, useLocation} from 'react-router';
const CookesScreen = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
      document.title = "Cooks"
  }, []);

  const [cooks,setCooks] = useState(null);

  useEffect(() => {
    getCooks().then(resp=>{
      setCooks(resp.data.data.data);
    })
  }, []);

 const [selectedDate,setSelectedDate] = useState(state.currentDay);
 const [prevBtnEnable, setPrevBtnEnable ] = useState(false);
 const [nextBtnEnable, setNextBtnEnable ] = useState(true);
 

 const getCookForToday = (today) =>{
    const todayName = getWorkDay(today);
    const cooksForToday = cooks !== null && cooks !== undefined ? cooks[todayName] : null;
    return cooksForToday;
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
          <Label> Cooks Screen </Label>
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
          <Label> Today's Cook </Label>
        </Col>
        <Col xs="8">
          {  getCookForToday(selectedDate) !== null && getCookForToday(selectedDate) !== undefined && getCookForToday(selectedDate).length >0 ? getCookForToday(selectedDate).map(item => (
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
            name='Cooks'
            active = { prevBtnEnable }
            onClick={() => onPrevButtonClick()}
          >Prev </Button>
          <Button
            name='Waiters'
            active = { nextBtnEnable }
            onClick={() => onNextButtonClick() }
          >Next </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            name='Cooks'
            active = { prevBtnEnable }
            onClick={() => navigate("/Waiters",{state:{currentDay:selectedDate}})}
          >Waiters </Button>
        </Col>
      </Row>
    </Col>
  )
}
export default CookesScreen;