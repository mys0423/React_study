import React, { useState } from 'react';

// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 동물의 울음소리가 화면에 나오도록 구현하기

const Sound = () => {
  const [sound, setSound] = useState("")

  const dogSound = () => {
    setSound("멍쓰")
  }

  const catSound = () => {
    setSound("야옹쓰")
  }

  const manSound = () => {
    setSound("앙쓰")
  }

  return (
    <div>
      <h1>{sound}</h1>
      <button onClick={dogSound}>강아지버튼</button>
      <button onClick={catSound}>고양이버튼</button>
      <button onClick={manSound}>사람버튼</button>
    </div>
  );
};

export default Sound;