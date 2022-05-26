import axios from 'axios';
import React, {useEffect, useState } from 'react';
import './Home.scss';
import UserCard from './UserCard';

const Home = () => {

    const  [userList, setUserList] = useState(); //state
    const [searchText , setSearchText] = useState();
    
    
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUserList(res.data) // data of api in this state
        })
        .catch(err => {


        })
    }

    const handleSearch = (e) => {
       setSearchText(e.target.value)
    }
        
    useEffect(() => {  

        fetchData()
    }, [])

    const filterList = () => {
         if(searchText)
         return userList && userList.filter(ul => ul.username.toLowerCase().startsWith(searchText.toLowerCase()))
         return userList

    // }

    // const filterListt = () => {
    //     if(searchText)
    //     return userList && userList.filter(ul => ul.email.toLowerCase().startsWith(searchText.toLowerCase()))
    //     return userList

   }

    return (
        <>
         <div className="home">
           <div className="home-container flex flex-col">
               <div className="home-container-heading"><h1>List of Users</h1></div>
               <div> <input onChange={handleSearch} className='input-search' type="search" placeholder="Type Username" /></div>
               {/* <div> <input onChange={handleSearch} className='input-search' type="search" placeholder="Type Email" /></div> */}
               <div className="home-container-list flex flex-wrap" style={{gap: '2rem'}}>
                   {
                        filterList() && filterList().map(ul => {

                              return <UserCard item={ul} /> //map function , same as for loop 
                            
                        })
                    }
                </div>
            </div>
                </div>

         </>
     )
   }

export default Home
