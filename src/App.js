import { useState } from 'react';
import './App.css';
import Popup from './PopUpLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="app">
      <button className="btn btn-light" onClick={togglePopup}>Login</button>
      {isOpen && <Popup handleClose={togglePopup}/>}
    </div>
  );
}

export default App;
