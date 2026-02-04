import { createContext, useState } from "react";

// 1. 생성 
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
export const AnimalsProvider = ({children}) => {
  
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {
      animals
    },
    actions: {
      insert: (animal) => {setAnimals(animals.concat(animal))},
      // remove 액션 -> animal 배열 순회하면서 배열의 요소가 클릭한 요소와 다르면 새 배열에 넣기 같으면 버리기 
      remove: (index) => {setAnimals(animals.filter((_, i)=>i !== index))} 
    }
  }

  // 실습
  // insert 메서드를 완성하시오!

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


// import { createContext, useState } from "react";

// // 1. 생성 
// export const AnimalsContext = createContext({
//   state: {animals: []},
//   actions: {insert: () => {}, remove: () => {}}
// })

// // 2. 제공
// export const AnimalsProvider = ({children}) => {
  
//   const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
//   const value = {
//     state: {
//       animals
//     },
//     actions: {
//       insert: (animal) => {setAnimals(animals.concat(animal))},
//       remove: () => {}
//     }
//   }

//   // 실습
//   // insert 메서드를 완성하시오!

//   return (
//     <AnimalsContext.Provider value={value}>
//       {children}
//     </AnimalsContext.Provider>
//   )
// }



