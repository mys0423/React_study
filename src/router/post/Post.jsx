import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const {id} = useParams()
  const [post, setPost] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
    return post
  }

  getPost()
    .then((post) => {
      setIsLoading(false)
      setPost(post)
    })
    .catch((err) => {
      setIsLoading(true)
      console.error(err)
    })
  }, [])

  if(isLoading){
    return <p>로딩중...</p>
  }

  return (
    <div>
      Post 컴포넌트!😎
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Post;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Post = () => {
//   const {id} = useParams()
//   const [post, setPost] = useState("")

//   // 랜더링 때 실행
//   useEffect(() => {
//     // 비동기 함수 선언
//     const getPost = async() => {
//       // 해당 id의 post 요청
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       const post = await response.json()
//       return post
//     }

//     // 비동기 함수 실행
//     getPost()
//       .then(setPost)
//       .catch(console.error);
//       // 의존성 배열 1번만
//   },[])
  
//   return (
//     <div>
//       Post 컴포넌트!😘
//       <h1>id: {post.id}</h1>
//       <h1>titlt: {post.title}</h1>
//     </div>
//   );
// };

// export default Post;