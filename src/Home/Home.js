import axios from 'axios';
import React, {useEffect, useState } from 'react';
import './Home.scss';
import UserCard from './UserCard';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import {Link } from 'react-router-dom' ;
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {


    
        const notify = () => toast("Wow so easy !");  //toast snack bar
    
    const  [userList, setUserList] = useState(); //state
    const [searchText , setSearchText] = useState();
    const [searchEmail ,setSearchEmail] = useState();
    const [searchPhone ,setSearchPhone] = useState();
    const [searchName , setSearchName] = useState();
    
    
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


    const handleSearch1 = (e) => {
        setSearchEmail(e.target.value)
       }

       const handleSearch3 = (e) => {
        setSearchName(e.target.value)
     }

     const handleSearch2 = (e) => {
        setSearchPhone(parseInt(e.target.value))
     }
        
    useEffect(() => {  

        fetchData()
    }, [])

    const filterList = () => {
         if(searchText)
         {
         return userList && userList.filter(ul => ul.username.toLowerCase().startsWith(searchText.toLowerCase()))
         }

    else if(searchEmail)
    {
        return userList && userList.filter(ul => ul.email.toLowerCase().startsWith(searchEmail.toLowerCase()))

    }


    else if(searchName)
    {
        return userList && userList.filter(ul => ul.name.toLowerCase().startsWith(searchName.toLowerCase()))

    }

    else if(searchPhone)
    {
        return userList && userList.filter(ul => ul.phone.startsWith(searchPhone))

    }

    else {
       return userList
    }
    }

    // }

    // const filterListt = () => {
    //     if(searchText)
    //     return userList && userList.filter(ul => ul.email.toLowerCase().startsWith(searchText.toLowerCase()))
    //     return userList

   

    return (
        <>
         <div className="home">
           <div className="home-container flex flex-col">
               <div className="home-container-heading"><h1>List of Users</h1></div>
               <div className="inputt">
               <div> <input onChange={handleSearch} className='input-search' type="search" placeholder="Type Username" id= 'search1'/></div>
               <div> <input onChange={handleSearch1} className='input-search' type="search" placeholder="Type Email" id= 'search2' /></div>
               <div> <input onChange={handleSearch2} className='input-search' type="search" placeholder="Type phone-no" id= 'search3' /></div>
               <div> <input onChange={handleSearch3} className='input-search' type="search" placeholder="Type Full-Name" id= 'search4' /></div>
               <Button colorScheme='teal' size='md'>
   
    <Link to = "/user/create">  Add Data</Link></Button> 
               <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
               </div>
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
