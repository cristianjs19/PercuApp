import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import '../styles/components/Metronome.css';
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import Sound1 from '../assets/sounds/sound1.mp3';
import Sound2 from '../assets/sounds/sound2.mp3';

const click11 = Sound1;
const click22 = Sound2;

const click1 = new Audio(click11);
const click2 = new Audio(click22)

const Metronome = ({subdivision}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [bpm, setBpm] = useState(60)
  // const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)
  const [intervalId, setIntervalId] = useState(0);
  const [count, setCount] = useState(0)
  const [subdv, setSubdv] = useState(subdivision)
  const myCount = useRef(0)
  const beatsPerMeasure = useRef(1)
  const ref1 = useRef(true);
  const ref2 = useRef(true);

  const playClick = () => {
    if (myCount.current % beatsPerMeasure.current === 0) {
      click1.play();
    } else {
      click2.play();
    }
    myCount.current = myCount.current + 1
    setCount(prev => prev + 1)
  }

  const handleClick = () => {
    console.log("call");
    let lapse = (60 / bpm) * 1000
    switch (subdv) {
      case 1:
          beatsPerMeasure.current = 1
          break
      case 2:
          lapse = lapse / 2
          beatsPerMeasure.current = 2
          break
      case 3:
        lapse = lapse / 3
        beatsPerMeasure.current = 3
        break
      case 4:
        lapse = lapse / 4
        beatsPerMeasure.current = 4
        break
      default:
    }
    console.log(lapse);
    if (!isPlaying) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    } else {
      const newIntervalId = setInterval(() => {
        playClick()
      }, lapse);
      setIntervalId(newIntervalId);
      myCount.current = 0
    }    
  };

  const handleInputChange = (event) => {
    const target_bpm = event.target ? event.target.value : event;
    let lapse = (60 / bpm) * 1000
    switch (subdv) {
      case 1:
          beatsPerMeasure.current = 1
          break
      case 2:
          lapse = lapse / 2
          beatsPerMeasure.current = 2
          break
      case 3:
        lapse = lapse / 3
        beatsPerMeasure.current = 3
        break
      case 4:
        lapse = lapse / 4
        beatsPerMeasure.current = 4
        break
      default:
    }
    console.log(lapse);
    if (isPlaying) {
      clearInterval(intervalId);
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

  useEffect(()=> {
    if (ref1.current) {
      ref1.current = false;
    } else {
      setSubdv(subdivision)
      clearInterval(intervalId)
    }
  }, [subdivision])

  useEffect(()=> {
    if (ref2.current) {
      ref2.current = false;
    } else {
      handleClick()
    }
  }, [subdv, isPlaying])

  useEffect(()=> {
    clearInterval(intervalId)
    handleInputChange(bpm)
  }, [bpm])

  return (
    <div className="controls">  
      <div>
        <div>
          {myCount.current} {count}
        </div>
        <div>
          {subdv} {isPlaying + ' '}
        </div>
      </div>
      <div className="tempo">
        <h4>Tempo</h4>
        <div id="tempo">{bpm}</div>
      </div>
      <div className="bpm-slider">
        <input
          type="input"
          value={bpm}
          onChange={(handleInputChange)}
        />
      </div>
      <div className="bpm-slider">
        <AiFillPlusCircle onClick={()=> setBpm(prevBpm => prevBpm = prevBpm + 1)} />
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
      <button className="playBtn" onClick={()=> setIsPlaying(!isPlaying)}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
    );
}

export default Metronome;