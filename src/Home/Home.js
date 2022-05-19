import axios from 'axios';
import React, {useEffect, useState } from 'react';
import './Home.scss';
import UserCard from './UserCard';

const Home = () => {

    const  [UserList, setUserList] = useState();

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUserList(res.data)
        })
        .catch(err => {


        })
        
    
    }
        
    useEffect(() => {  

        fetchData()
    }, [])

    return (
        <>
         <div className="home"></div>
           <div className="home-container flex flex-col">
               <div className="home-container-heading"><h1>List of Users</h1></div>
               <div className="home-container-list flex flex-wrap" style={{gap: '2rem'}}>
                   {
                        UserList && UserList.map(ul => {

                              return <UserCard item={ul} />
                            
                        })
 }

               </div>
           </div>
</>





    )




    }




export default Home
