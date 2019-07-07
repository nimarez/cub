import React from 'react';
import './App.css';

function App() {
  return (
      <div className="Container">
        <ConfessionBox />
      </div>
  );
}

function ConfessionBox(props) {
  return (
      <div className="Box">
        <p>
          My boyfriend and I both have physical disabilities that we feared would keep us from ever being in a relationship or finding love. However, we're both currently the happiest we've ever been, and celebrating our anniversary quite soon. Just a reminder that you are not unlovable, and there is someone out there for you!
        </p>
        <button className="Button">Generate a confession!</button>
      </div>
  )
}


export default App;
