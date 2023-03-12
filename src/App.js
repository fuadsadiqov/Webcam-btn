import Webcam from 'react-webcam'

function App() {

  const WebcamComponent = () => <Webcam />

  return (
    <div className='app'>
      <div className='btn-div'>
        <Webcam 
          // width={200}
          height={140}
          className='webcam'/>
        <button>Button</button>
      </div>
    </div>
  );
}

export default App;
