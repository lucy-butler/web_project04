import React, {useState} from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Content slides={SliderData} />
    </>
  );
}

export default App;
