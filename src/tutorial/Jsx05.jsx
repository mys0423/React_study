import React from 'react';
import PassComponent from './PassComponent';
import NonpassComponent from './NonpassComponent';

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

const Jsx05 = () => {
  const age = 6;
  return (
    <div>
      {age >= 19 ? <PassComponent /> : <NonpassComponent />}
      {age % 2 === 0 && <p>당첨</p>}
    </div>
  );
};

export default Jsx05;

// import React from 'react';
// import PassComponent from './PassComponent';

// // age 상수로 나이를 설정한다(임의)
// // 19세 이상 성인이라면 "입장 가능"
// // 성인이 아니라면 "입장 불가"
// // 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

// const Jsx05 = () => {
//   const [age, notPass, lucky, unLucky] = [10, "입장 불가", "당첨", "꽝"]
//   const isAdult = age >= 19;
//   const isEven = age % 2 === 0;

//   const enter = isAdult ? <PassComponent /> : (<p>{notPass}</p>)
//   const win = isEven ? (<p>{lucky}</p>) : (<p>{unLucky}</p>)
//   const result = (
//     <div>
//       <p>당신의 나이는 {age}이므로,</p>
//       {enter}
//       {win}
//     </div>
//   )
//   return (
//     <>
//       {result}
//     </>
//   );
// };

// export default Jsx05;