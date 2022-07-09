import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import '../styles/components/Metronome.css';
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

const click11 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const click22 = "//daveceddia.com/freebies/react-metronome/click2.wav";

const click1 = new Audio(click11);
const click2 = new Audio(click22)

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(85)
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)
  const [intervalId, setIntervalId] = useState(0);
  const [count, setCount] = useState(0)
  // var count = 0
  const myCount = useRef(0)

  const playClick = () => {
    console.log(count);
    if (myCount.current % beatsPerMeasure === 0) {
      click2.play();
    } else {
      click1.play();
    }
    myCount.current = myCount.current + 1
    setCount(prev => prev + 1)

  }

  const handleClick = () => {
    let lapse = (60 / bpm) * 1000
    if (isPlaying) {
      clearInterval(intervalId);
      setIntervalId(0);
      setIsPlaying(!isPlaying)
      return;
    } else {
      const newIntervalId = setInterval(() => {
        playClick()
      }, lapse);
      setIntervalId(newIntervalId);
      // count = 0
      myCount.current = 0
      setIsPlaying(!isPlaying)
    }    
  };

  const handleInputChange = (event) => {
    const target_bpm = event.target ? event.target.value : event;
    let lapse = (60 / bpm) * 1000
    if (isPlaying) {
      clearInterval(intervalId);
      // count = 0
      myCount.current = 0
      setBpm(prevBpm => prevBpm = target_bpm)
      const newIntervalId = setInterval(() => {
        playClick();
      }, lapse);
      setIntervalId(newIntervalId);
    } else {
      setBpm(prevBpm => prevBpm = target_bpm)
    }
  };
  // useEffect(()=> {
  //   setCount(myCount.current)
  // }, [myCount.current])

  useEffect(()=> {
    handleInputChange(bpm)
  }, [bpm])

  return (
    <div className="controls">  
      {myCount.current} {count}
      <div className="tempo">
        <h4>Tempo</h4>
        <div id="tempo">{bpm}</div>
      </div>
      <div className="bpm-slider">
        <input
          type="input"
          value={bpm}
          onChange={handleInputChange}
        />
      </div>
      <div className="bpm-slider">
        <AiFillPlusCircle onClick={()=> setBpm(prevBpm => prevBpm + 1)} />
        <AiOutlineMinusCircle onClick={()=> setBpm(prevBpm => prevBpm - 1)} />
      </div>
      <div className="bpm-slider">
        <input
          type="range"
          min="20"
          max="240"
          value={bpm}
          onChange={handleInputChange}
        />
      </div>
      <button className="playBtn" onClick={handleClick}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
    );
}

export default Metronome;