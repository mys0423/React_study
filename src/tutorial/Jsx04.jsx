import React from 'react';

// JSX는 if문을 사용할 수 없기 때문에(return 중괄호 내부에서만) 삼항 연산자 지원
// true면 랜더링 false면 랜더링 x

const Jsx04 = () => {

  const name = "홍길동"
  const isLogin = true;
  const isGuest = false;

  // isGuest가 true라면 p태그의 게스트를 화면에 출력
  // isLogin이 true라면 이름을 출력, false라면 비회원입니다를 출력

  return (
    <>
      {isGuest && <p>게스트</p>}
      {isLogin ? (<p>{name}</p>) : (<p>비회원입니다</p>)}
    </>
  );
};

export default Jsx04;