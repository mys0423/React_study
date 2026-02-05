import React, { useContext } from 'react';
import { RouteContext } from '../../context/expert/RouteContext';
import useCountStore from '../../zustand/store/useCountStore';

const Main = () => {
  const {state} = useContext(RouteContext)
  const count = useCountStore((state)=>state.count)

  return (
    <div>
      메인 페이지!😶‍🌫️
      <p>{state.user.userName}님 환영합니다!</p>
      <h1>카운트: {count}</h1>
    </div>
  );
};

export default Main;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Main = () => {

//   const getRandomInt = () => {
//     return Math.floor(Math.random() * 100)
//   }

//   return (
//     <div>
//       메인 페이지!😎
//       <Link style={{display: "block"}} to={"/job"}>직업 페이지로 이동</Link>
//       {/* 
//         Link 태그를 누르면 1~100까지 랜덤한 숫자로 post로 이동
//         ex) /post/2
//         ex) /post/31
//         post 페이지는 랜덤한 숫자의 해당하는 데이터를
//         jsonplace홀더에서 요청 후 화면에 id와 title만 h1태그로 출력(useEffect)
//       */}
//       <Link to={`/post/${getRandomInt()}`}>post로 이동!</Link>
//     </div>
//   );
// };

// export default Main;