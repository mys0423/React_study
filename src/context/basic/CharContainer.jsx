import React, { useState } from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
  const [style, setStyle] = useState({color: "blue", fontSize: "30px"});

  const fontSizeUP = () => {
    setStyle((size) => ({...size, fontSize: "100px"}))
  }

  return (
    <CharContext.Provider value={{...style, fontSizeUP}}>
      <A />
    </CharContext.Provider>
  );
};

export default CharContainer;