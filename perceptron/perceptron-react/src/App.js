import logo from './logo.svg';
import './App.css';
import { Canvas } from './components/Canvas';


function App() {

  function draw(ctx) {
    const x = 100;
    const y = 100;
    const w = 10;
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(x, y, w, 0, 2*Math.PI)
    ctx.fill()
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //const x = 0;
    //const y = Math.floor(0-3);
    //const w = 10;
    //ctx.beginPath();
    //ctx.fillStyle = "rgb(200,0,0)";
    //ctx.arc(x, y, w/2, 0, 2 * Math.PI, false);
    //ctx.fill();

    //ctx.font = '8pt Calibri';
    //ctx.fillStyle = 'white';
    //ctx.textAlign = 'center';
    //ctx.fillText('0', x, y+3);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <button>Start</button><br/>
        <Canvas draw={draw} />
      </body>
    </div>
  );
}

export default App;
