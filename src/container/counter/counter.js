import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scoreA } from '../score/scoreASlice';
import { scoreB } from '../score/scoreBSlice';
import './counter.css';

export function Counter() {
  const countA = useSelector((state) => state.scoreA.value);
  const countB = useSelector((state) => state.scoreB.value);
  const dispatch = useDispatch();

  const handleShootA = () => {
    dispatch(scoreA());
    alert('Samir scored');
  };

  const handleShootB = () => {
    dispatch(scoreB());
    alert('Ajay scored');
  };

  return (
    <>
    <h1 style={{color: 'red', alignItems: 'center', marginLeft: '600px'}}>Football tournament</h1>
      <div className="Counter">
        <div className="ScoreContainer">

          <button
            aria-label="Shoot A"
            onClick={handleShootA}
          >
            Shoot A
          </button>
          <span>{countA}</span>
        </div>
        <div className="ScoreContainer">
          <button
            aria-label="Shoot B"
            onClick={handleShootB}
          >
            Shoot B
          </button>
          <span>{countB}</span>
        </div>
      </div>
    </>

  );
}
