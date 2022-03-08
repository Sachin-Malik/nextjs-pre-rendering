import React from 'react';
import User from '../components/User';

function Users({users}){
    return (
        <>
            <h1>List of Users</h1>
            <User users={users}/>
        </>
    )
}
export default Users;
export async function getStaticProps(){
   
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
          users:data,
        }
    }
}