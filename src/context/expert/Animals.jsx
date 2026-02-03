import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

  // Context에서 동물 세마리 가져오기
  const {state, actions} = useContext(AnimalsContext)
  const [input, setInput] = useState("")

  // 인풋 내용바뀌면
  const handleValueOnChange = (e) => {
    setInput(e.target.value)
  }

  // 엔터키 눌리면
  const handleValueOnKeyDown = (e) => {
    if(e.key === 'Enter'){
      actions.insert(input)
      setInput("")  
    }
  }

  return (
    <div>
      <input type="text" placeholder='동물을 입력하세요.' onChange={handleValueOnChange} onKeyDown={handleValueOnKeyDown}/>
      <div>

      </div>
    </div>
  );
};

export default Animals;