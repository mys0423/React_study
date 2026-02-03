import React, { useContext, useState } from 'react';
import { FontSizeContext } from './FontSizeContext';

const ChildInputComponent = () => {
  // Context값 사용!
  // 폰트사이즈를 입력하고, 엔터를 누르면 
  // 입력한 폰트 사이즈로 변경하기!
  const {state, actions} = useContext(FontSizeContext)
  const [fontSize, setFontSize] = useState("")

  const handleValueOnChange = (e) => {
    setFontSize(e.target.value)
  }
  const handleValueOnKeyDown = (e) => {
    if(e.key === 'Enter'){
      actions.setFontSize(fontSize)
    }
  }
  return (
    <div>
      <p style={{fontSize: state.fontSize}}>😎</p>
      <input type="text" placeholder="폰트 사이즈를 입력하세요" onChange={handleValueOnChange} onKeyDown={handleValueOnKeyDown}/>
    </div>
  );
};

export default ChildInputComponent;