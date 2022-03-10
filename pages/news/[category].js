import React from 'react';

function ArticleListByCategory({articles,category}){
    console.log(articles);
   return (
       <div>
        <h2>Showing Articles for <i>{category}</i> category</h2>
        {
            articles.map(article=>{
                return (
                    <div>
                    <h3>{article.id} {article.title} {article.description}</h3>
                    <hr />
                </div>
                )
            })
        }
       </div>
   )
}

export default ArticleListByCategory;

export async function getServerSideProps(context){
    
    // so benefit of using getServerSideProps instead of getStaticProps is that now we can use the context object to serve data to user
    // specific to them only. we could not have done that in getStaticProps.
    
    const {req, res, query} = context;
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie','name=sachin');

    const {params} = context;
    const {category}=params;

    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();
 
    return {
        props:{
            articles:data,
            category:category    // we can only write category here because of ES6
        }
    }
}