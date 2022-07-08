import React, { useState } from "react";
import '../styles/components/Metronome.css';
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

const click11 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const click22 = "//daveceddia.com/freebies/react-metronome/click2.wav";

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const [bpm, setBpm] = useState(60)
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)

  const click1 = new Audio(click11);
  const click2 = new Audio(click22);

  const playClick = () => {
    // const { count, beatsPerMeasure } = this.state;

    // alternate click sounds
    if (count % beatsPerMeasure === 0) {
      click2.play();
    } else {
      click1.play();
    }

    // keep track of which beat we're on
    // this.setState(state => ({
    //   count: (state.count + 1) % state.beatsPerMeasure
    // }));
    setCount((count + 1) % beatsPerMeasure)
  };

  const handleInputChange = event => {
    const target_bpm = event.target.value;

    if (isPlaying) {
      // stop old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(playClick(), (60 / bpm) * 1000);

      // set the new bpm
      // and reset the beat counter
      setCount(0)
      setBpm(target_bpm)
    } else {
      // otherwise, just update the bpm
      setBpm(target_bpm)
    }
  };

  const startStop = () => {
    console.log("here");
    let lapse = (60 / bpm) * 1000
    console.log(lapse);
    let timer
    if (isPlaying) {
      // stop the timer
      clearInterval(timer);
      setIsPlaying(!isPlaying)
    } else {
      // start a timer with current bpm
      timer = setInterval(playClick(), lapse)
      setCount(0)
      setIsPlaying(!isPlaying)
      playClick()
    }
  };

  return (
    <div className="controls">  
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
          <AiFillPlusCircle onClick={()=> setBpm(bpm + 1)} />
          <AiOutlineMinusCircle onClick={()=> setBpm(bpm - 1)} />
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
        <button className="playBtn" onClick={startStop}>{isPlaying ? "Stop" : "Start"}</button>
    </div>
    );
}

export default Metronome;


{/* <div className="controls">
        <div className="tempoDown">
            <button className="tempoDownBtn">-</button>
        </div>
        <div className="centro">
            <div className="tempo">
                <h4>Tempo</h4>
                <div id="tempo">60</div>
            </div>
            <button className="playBtn">Play</button>
        </div>
        <div className="tempoUp">
            <button className="tempoUpBtn">+</button>
        </div>
    </div> */}