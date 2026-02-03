import React, { useEffect, useState } from 'react';
import UserName from './UserName';

const SideEffectWithMap = () => {

  // https://jsonplaceholder.typicode.com/todos
  // useEffect()
  // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리
  const [todos, settodos] = useState([])
  // const [isFalse, setIsFalse] = useState(false)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=15")
      if(!response.ok) throw new Error("getTodos fetching error")
      const todos = await response.json()
      console.log("요청")
      return todos
    }
    getTodos()
      .then((todos) => todos.map(({title}) => title))
      .then(settodos)
      .catch(console.error)
  }, [number])

  console.log("리랜더링")

  const titles = todos.map((name, i) => (
    <UserName key={i} name={name} />
  ))

  const handleNumberOnClick = () => {
    setNumber(number + 1)
  }
    
  return (
    <div>
      <button onClick={handleNumberOnClick}>재요청!</button>
      {titles}
    </div>
  );
};

export default SideEffectWithMap;


// import React, { useState, useEffect } from 'react';
// import UserName from './UserName';

// const SideEffectWithMap = () => {

//   // https://jsonplaceholder.typicode.com/users
//   // useEffect()
//   // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리

//   console.log("리렌더링");

//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     const getUsers = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users")
//       const users = await response.json()
//       return users
//     }
    
//     getUsers()
//       .then(setUsers)
//       .catch(console.error)
//   }, [])
  
//   return (
//     <div>
//       {users.map((user) => (
//         <UserName key={user.id} username={user.username} />
//       ))}
//     </div>
//   );
// };

// export default SideEffectWithMap;

