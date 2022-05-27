import axios from 'axios'
import React , { useState , useEffect } from 'react'
import { useLocation , Link } from 'react-router'

import React from 'react'

const CityDetail = () => {

    const [cityName , setCityName] = useState()
    const [cityData , setCityData] = useState()

    const location = useLocation()

    useEffect(() => {

        if (location.state){

            setCityName(location.state.cityName)
        }
        fetchCityData()
    },[])


    const fetchCityData = () => {
       
        cityName &&
        axios.get(``)
        .then( res => {
          if(res)
                setCityData(res)
                console.log("city not found")
        })
    }


        }




        )



    }



    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    return (












    <div>CityDetail</div>
  )
}

export default CityDetail