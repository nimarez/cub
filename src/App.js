import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
      <div className="Container">
        <ConfessionBox />
      </div>
  );
}

function Spinner() {
    return (
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

function ConfessionBox(props) {
  const [text, setText] = useState("Click the button to generate a confession");
  const [loading, setLoading] = useState(false);

  const fetchConfession = () => {
      setLoading(true);
      axios.get("https://cub-21-7-19.appspot.com/api").then(res => {
          setText(res.data.text);
          setLoading(false);
      }).catch(reason => setText(reason));
  };

  return (
      <div className="Box">
        <p>
            {loading ? <Spinner /> : text}
        </p>
        <button className="Button" onClick={fetchConfession}>Another one!</button>
      </div>
  )
}

export default App;
