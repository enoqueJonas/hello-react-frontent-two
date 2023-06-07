import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getGreetings from '../redux/greeting-api';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <h1>{greetingState.message}</h1>
  );
};

export default Greeting;
