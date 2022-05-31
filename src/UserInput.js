
import './Home/Home.scss';
import react , {useState}  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const UserInput = () => {

    const [name ,setName] = useState();
    const [fullName ,setFullName] = useState();
    const [address ,setAddress] = useState();
    const [phone ,setPhone] = useState();


  const  handleName = (e) =>
    {
setName(e.target.value)
    }

    const handleFullName = (e) =>
    {
setFullName(e.target.value)
    }

   const handleAddress = (e) =>
    {
setAddress(e.target.value)
    }

    const handlePhone= (e) =>
    {
setPhone(e.target.value)
    }

    const handleEmail= (e) =>
    {
setPhone(e.target.value)
    }

    const handleWebsite= (e) =>
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
          onChange={handleName} 
          label="User Name"
          defaultValue="    "
          placeholder='Enter User-Name'
          InputProps={{
            
          }} />

            <TextField
          id="outlined-read-only-input" 
          onChange={handleFullName} 
          label="Full Name"
          defaultValue="    "
          placeholder='Enter Full-Name'
          InputProps={{
            
          }} />

            <TextField
          id="outlined-read-only-input" 
          onChange={handleAddress} 
          label="Address"
          defaultValue="    "
          placeholder='Enter Address'
          InputProps={{
            
          }} />

            <TextField
          id="outlined-read-only-input" 
          onChange={handlePhone} 
          label="Phone"
          defaultValue="    "
          placeholder='Enter Phone-no'
          InputProps={{
            
          }}
         />

<TextField
          id="outlined-read-only-input" 
          onChange={handleEmail} 
          label="email"
          defaultValue="    "
          placeholder='Enter email'
          InputProps={{
            
          }}
         />

<TextField
          id="outlined-read-only-input" 
          onChange={handleWebsite} 
          label="Website"
          defaultValue="    "
          placeholder='website'
          InputProps={{
            
          }}
         />

<TextField
          id="outlined-read-only-input" 
        //  onChange={hc2} 
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