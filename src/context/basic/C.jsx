import React from 'react';
import CharContext from './CharContext';

const C = () => {
  return (
    <div>
      <CharContext.Consumer>
        {({color, fontSize, fontSizeUP}) => (
          <>
            <p style={{color, fontSize}}>리액트 My Context!😎</p>
            <button onClick={fontSizeUP}>글자 100px 크기 변경!</button>
          </>
        )}
      </CharContext.Consumer>
    </div>
  );
};

export default C;