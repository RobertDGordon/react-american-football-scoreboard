//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { reset } from "ansi-colors";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, sethomeScore] = useState (0)
const [awayScore, setawayScore] = useState (0)
const [quarter, setQuarter] = useState (1)
const [down, setDown] = useState (1)
const [togo, setTogo] = useState (50)
const [ballon, setBallon] = useState (10)
const increaseQ = () => {
  setQuarter(currentValue => currentValue + 1)
}
const increaseD = () => {
  setDown(currentValue => currentValue + 1)
}
const increaseT = () => {
  setTogo(currentValue => currentValue - 5)
}
const increaseB = () => {
  setBallon(currentValue => currentValue + 1)
}
const reset = () => {
  sethomeScore(0)
  setawayScore(0)
  setQuarter(1)
  setDown(1)
  setTogo(50)
  setBallon(10)
}
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} togo={togo} ballon={ballon} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {()=> sethomeScore(currentScore => currentScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {()=> sethomeScore(currentScore => currentScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {()=> setawayScore(currentScore => currentScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {()=> setawayScore(currentScore => currentScore + 3)}>Away Field Goal</button>
        </div>

      </section>
      <section className="buttons">
        <div className="stretchButtons">
            <ValueChanger valueChange={increaseD} label='Down' />
            <ValueChanger valueChange={increaseT} label='To Go' />
            <ValueChanger valueChange={increaseB} label='Ball On' />
            <ValueChanger valueChange={increaseQ} label='Quarter' />
            <ResetAll reset={reset} />
          </div>
      </section>
    </div>
  );
}

function ValueChanger(props){
  const { valueChange, label } = props;
  return <button className="quarterButton" onClick= {valueChange}>{label}</button>
}

function ResetAll(props){
  const { reset } = props;
  return <button className="quarterButton" onClick = {reset}>ResetAll</button>
}

export default App;