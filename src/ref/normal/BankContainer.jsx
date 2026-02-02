import React, { useRef } from 'react';

const BankContainer = () => {
  // 지폐: [50000, 10000, 5000, 1000, 500, 100, 50, 10]
  // 최소 지폐 거슬러주기
  // 사용자가 값을 입력하면 52100
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10]

  const inputRef = useRef()
  const resultRef = useRef([])

  const handleButtonOnClick = () => {
    let money = Number(inputRef.current.value)

    moneyType.forEach((type, i) => {
      const count = Math.floor(money / type)
      money %= type

      resultRef.current[i].textContent = `${type}: ${count}개`;
    })
  }
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button type='button' onClick={handleButtonOnClick}>동전 거스르기!</button>
      {/* <p ref={(el) => (resultRef.current[0] = el)}>50000: 0개</p>
      <p ref={(el) => (resultRef.current[1] = el)}>10000: 0개</p>
      <p ref={(el) => (resultRef.current[2] = el)}>5000: 0개</p>
      <p ref={(el) => (resultRef.current[3] = el)}>1000: 0개</p>
      <p ref={(el) => (resultRef.current[4] = el)}>500: 0개</p>
      <p ref={(el) => (resultRef.current[5] = el)}>100: 0개</p>
      <p ref={(el) => (resultRef.current[6] = el)}>50: 0개</p>
      <p ref={(el) => (resultRef.current[7] = el)}>10: 0개</p> */}
      {moneyType.map((type, i) => (
        <p key={type} ref={(el) => (resultRef.current[i] = el)}>
          {type}: 0개
        </p>
      ))}
    </div>
  );
};

export default BankContainer;


// import React, { useRef, useState } from 'react';
// import Bank from './Bank';

// const BankContainer = () => {
//   // 최소 지폐 거슬러주기
//   // 사용자가 값을 입력하면 52100
//   const [amount, setAmount] = useState("")
//   const [change, setChange] = useState({})
//   const pRef = useRef([])

//   const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
//   const billsList = bills.map((bill, i) => (
//     <Bank key={i} pRef={pRef} bill={bill} change={change} i={i} />
//   ))

//   const handleAmonutOnChange = (e) => {
//     setAmount(e.target.value)
//   }

//   const handleChangeOnClick = (e) => {
//     if(typeof(Number(amount)) !== "number"){
//       return alert("정수만 입력하세요.")
//     }
    
//     const result = {}
//     let money = amount;
//     for(let bill of bills){
//       result[bill] = Math.floor(money / bill)
//       money = amount % bill
//     }
//     setChange(result)
//   }

//   return (
//     <div>
//       <input 
//         type="text" onChange={handleAmonutOnChange} 
//         placeholder='거스름돈 입력: ex)1520'
//       />
//       <button onClick={handleChangeOnClick}>동전 거스르기!</button>
//       {/* ex) */}
//       {billsList}
//     </div>
//   );
// };

// export default BankContainer;