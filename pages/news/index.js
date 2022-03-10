import React from 'react';

function NewArticleList({articles}){
    return (
        <>
            <h1>News Articles List</h1>
            {
                articles.map((article)=>{
                    return (
                        <div key={article.id}>
                            <h2>{article.id} and {article.title} and {article.category}</h2>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewArticleList;

// getServerSideProps is for when we want to pre-render the page and get the data from the server for every request.
export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    return {
        props:{
            articles:data,
        }
    }
}