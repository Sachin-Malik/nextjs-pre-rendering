import React from 'react';
import {useState, useEffect} from 'react';


function Dashboard(){

    const [isLoading,setisLoading]=useState(true);
    const [dashboardData,setdashboardData]=useState(null);

    useEffect(()=>{

    async function getDashboardData(){
        const response = await fetch('http://localhost:4000/dashboard');
        const data = await response.json();
        setdashboardData(data);
        setisLoading(false);
        
    }
    getDashboardData();

    },[]);

    if(isLoading)
    return <h1>Loading...</h1>

    return (
        <div>
            <h1>Check Out Your Stats Here - </h1>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )
}

export default Dashboard;