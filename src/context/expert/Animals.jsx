import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  const {state, actions} = useContext(AnimalsContext)
  const {insert, remove} = actions;
  const {animals} = state;

  // 배열의 값을 순서대로 접근해서 버튼으로 바꾼다.
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.
  const animalList = animals.map((animal, i) => (
    // 동물 버튼을 누르면 버튼이 삭제, onClick -> remove
    <button key={i} onClick={()=>remove(i)}>
      {animal}
    </button>
  ))

  // 넘겨줌 -> 받을준비
  return (
    <div>
      <input 
        type="text" placeholder='동물을 입력하세요.'
        onKeyPress={(e) => {
          if(e.key === 'Enter'){
            insert(e.target.value)
          }
        }}
      />
      {animalList}
    </div>
  );
};

export default Animals;


// import React, { useContext, useState } from 'react';
// import { AnimalsContext } from './AnimalsContext';

// const Animals = () => {

//   // Context에 있는 동물 세마리를 버튼으로 출력하시오
//   // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

//   // Context에서 동물 세마리 가져오기
//   const {state, actions} = useContext(AnimalsContext)
//   const [input, setInput] = useState("")

//   // 인풋 내용바뀌면
//   const handleValueOnChange = (e) => {
//     setInput(e.target.value)
//   }

//   // 엔터키 눌리면
//   const handleValueOnKeyDown = (e) => {
//     if(e.key === 'Enter'){
//       actions.insert(input)
//       setInput("")  
//     }
//   }

//   return (
//     <div>
//       <input type="text" placeholder='동물을 입력하세요.' onChange={handleValueOnChange} onKeyDown={handleValueOnKeyDown}/>
//       <div>
//         {state.animals.map((animal, i) => (
//           <button key={i}>
//             {animal}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Animals;

