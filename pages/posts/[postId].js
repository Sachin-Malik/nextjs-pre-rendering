import React from 'react';

import {useRouter} from 'next/router';

function Post({post}){

    const router = useRouter();
    
    if(router.isFallback){
        return  <div>Loading...</div>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </div>
    )
}

export default Post;


export async function getStaticPaths(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(post=>{
        return {
            params: {
                postId:`${post.id}`
            }
        }
    })

    return {
        paths:[
            {params:{postId:'1'}},
            {params:{postId:'2'}},
            {params:{postId:'3'}},
        ],
        // paths,
        fallback:true,

        //fallback:'blocking' for when we want to block the page from loading untile we get the data
    }
}


export async function getStaticProps(context){

    const {params} = context;
    
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        );
        
    const data = await response.json();

    if(!data.id){
        return {
            notFound:true
        }
    }

    return {
        props:{
            post:data
        }
    }
}