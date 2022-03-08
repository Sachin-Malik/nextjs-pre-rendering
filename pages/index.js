import React from 'react';
import Link from 'next/link';

function App(){
  return (
    <>
      <h1>Hello NEXTJS pre-rendering</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
     
    </>
  )
}
export default App;