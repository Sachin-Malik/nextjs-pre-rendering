import React from 'react';
import Link from 'next/link'

function PostList({posts}){
    return (
        <div>
            <h1>Post Lists</h1>
            {
                posts.map((post)=>{
                    return <div key={post.id}>
                       <Link href={`posts/${post.id}`} passHref>
                         <div>
                           <h2>{post.id} {post.title}</h2>
                           <hr />
                         </div>
                        </Link>
                        
                    </div>
                })
            }
        </div>
    )
}

export default PostList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props:{
           posts:data
        }
    }
}