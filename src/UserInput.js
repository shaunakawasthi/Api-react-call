
import './Home/Home.scss';
import react , {useState}  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const UserInput = () => {

    const [name ,setName] = useState();
    const [fullName ,setFullName] = useState();
    const [address ,setAddress] = useState();
    const [phone ,setPhone] = useState();


  const  hc1= (e) =>
    {
setName(e.target.value)
    }

    const hc2= (e) =>
    {
setFullName(e.target.value)
    }

   const hc3= (e) =>
    {
setAddress(e.target.value)
    }

    const hc4= (e) =>
    {
setPhone(e.target.value)
    }


  return (
<>
   

      <div className='userinput'>
      <h1>Kindly Fill the Details</h1>
      <div className='input5'>
     
      <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
 >
 <div className='textfld'>
     <TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="User Name"
          defaultValue="    "
          placeholder='Enter User-Name'
          InputProps={{
            
          }} />

            <TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="Full Name"
          defaultValue="    "
          placeholder='Enter Full-Name'
          InputProps={{
            
          }} />

            <TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="Address"
          defaultValue="    "
          placeholder='Enter Address'
          InputProps={{
            
          }} />

            <TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="Phone"
          defaultValue="    "
          placeholder='Enter Phone-no'
          InputProps={{
            
          }}
         />

<TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="Phone"
          defaultValue="    "
          placeholder='Enter Phone-no'
          InputProps={{
            
          }}
         />

<TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="Phone"
          defaultValue="    "
          placeholder='Enter Phone-no'
          InputProps={{
            
          }}
         />

<TextField
          id="outlined-read-only-input" 
          onChange={hc2} 
          label="Phone"
          defaultValue="    "
          placeholder='Enter Phone-no'
          InputProps={{
            
          }}
         />
         </div>
         </Box>
    
    </div>
    </div>
    </>
  )
}

export default UserInput