import logo from './logo.svg';
import './index.css';
import { useState } from 'react';
// componets
import Header from './componets/Header';
import ImageGrid from './componets/ImageGrid';
import { ImageProvider } from './context/imageContext';


function App() {

  return (
    <ImageProvider>
      <div className="h-auto w-screen">
        <Header  />
        <ImageGrid />
     </div>
    </ImageProvider>
  );
}

export default App;
