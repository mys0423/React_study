import React from 'react';
import PropsComponent01 from './PropsComponent01';
import PropsComponent02 from './PropsComponent02';
import PropsComponent03 from './PropsComponent03';
import PropsComponent04 from './PropsComponent04';
const Container = () => {

  const name = "홍길동"
  const color = "blue"
  const age = 20
  const hobby = "도둑질"
  const fontSize = "40px"

  const printName = () => {
    console.log(name)
  }


  return (
    <div>
      {/* <PropsComponent01 name = {name} printName = {printName} />
      <PropsComponent02 color = {color}/>
      <PropsComponent03 name = {name} color = {color} age = {age} hobby = {hobby} fontSize = {fontSize}/> */}
      <PropsComponent04>
        <p>컴포넌트 내부에 있는 자식요소</p>
      </PropsComponent04>
    </div>
  );
};

export default Container;