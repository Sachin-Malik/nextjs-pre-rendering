import React from 'react';
import {useState} from 'react';


function EventList({EventList}){
   
    
    const handleSportEvent= async ()=>{
        const response = await fetch('http://localhost:4000/events?category=sports');
        console.log(response);
        const data = await response.json();
        setEvents(data);
    }

   const [events,setEvents] = useState(EventList);
   
   return (
       <div>      
           <button type='button' onClick={handleSportEvent}>Sports Event</button>     
           <h1>List of Events</h1>
            {events.map(event=>{
                return <div key={event.id}>
                   <h2>{event.title} {event.date}</h2>
                   <p>{event.description}</p>
                   <hr />
                </div>
            })}
       </div>
   )
}

export default EventList;

export async function getServerSideProps(){

    const response = await fetch('http://localhost:4000/events');
    const data = await response.json();

    return {
        props:{
            EventList:data
        }
    }
}