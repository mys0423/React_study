import React, { useState } from 'react';

const Attendance = ({name, isPresent}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelecedOnClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <li style={{color: isSelected ? "blue" : ""}} onClick={handleSelecedOnClick}>
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
};

export default Attendance;