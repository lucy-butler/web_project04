import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Content slides={SliderData} />
    </>
  );
}

export default App;
