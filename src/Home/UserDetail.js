import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import "./Home.scss"
import GoogleMapReact from 'google-map-react'


const UserDetail = (props) => {


    const [userData , setUserData] = useState()

    const location = useLocation()     //part of react router dom


    useEffect (() => {

if(location.state) {
setUserData(location.state.userData)    // state updated in usercard 
}

}, [])


return (
    <div className="user-detail">
    <div className="user-detail-container">
    <div className="user-detail-container-inner flex flex-col">
  {
      userData && <>
        <div>
         Id : <b>{userData.id}</b>
       </div>

      <div>
         Full Name : <b>{userData.name}</b>
       </div>

       <div>
         User Name : <b>{userData.username}</b>
       </div>

       <div>
         Email : <b>{userData.email}</b>
       </div>

       <div>
         Phone : <b>{userData.phone}</b>
       </div>

       <div>
         Website : <b>{userData.website}</b>
       </div>

       <div>
         Address : <b>{userData.address.street} {userData.address.suite}</b>
       </div>

       <div>
         Company Name : <b>{userData.company.name}</b>
       </div>
       {/* <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyAuLX_FvVVgOyzOcvz9tbKdsoQ814Cs8Dk" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                                />
                                </GoogleMapReact>
                    </div> */}


          </>
  }
        </div>
         </div>
      </div>
)

}



export default UserDetail