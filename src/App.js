import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [watch, setWatch] = useState(0);
  const watchRef = useRef();
  const formatWatch = () => {
    const getSecond = `0${watch % 60}`.slice(-2);
    const minute = Math.floor(watch / 60);
    const getMinute = `0${minute % 60}`.slice(-2);
    const getHour = `0${Math.floor(watch / 3600)}`.slice(-2);
    return `${getHour}:${getMinute}:${getSecond}`;
  };
  const handleStart = () => {
    watchRef.current = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(watchRef.current);
    setWatch(0);
  };

  const handleStop = () => {
    clearInterval(watchRef.current);
  };
  const handleResume = () => {
    watchRef.current = setInterval(() => {
      setWatch((prev) => prev + 1);
    }, 1000);
  };
  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <h2>{formatWatch()}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
