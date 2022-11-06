
import React, {  useState } from "react";

import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';


export const Login = () => {
const [User, setUser] = useState(
  {
    name:"",password:""
  }
);
let uname, value;
const handleInput = (e) =>{
uname = e.target.name;
value = e.target.value;
setUser({...User, [uname]:value})

}
const {name, password} = User;
const adduser = (e) =>{
  e.preventDefault();
  fetch("http://localhost:5000/signup", {method : 'POST',
  headers: {
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify({name, password})
  
})
alert('user registered');
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  
}

  return (
    <>






    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign up to continue.</Typography>
          </div>
          <TextField
            // html input attribute
            name="name"
            type="email"
            value={User.name}
            onChange={handleInput} 
            placeholder=""
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            value={User.password}
            onChange={handleInput} 
            placeholder=""
            label="Password"
          />
          <Button type="submit" name="submit" onClick={adduser} sx={{ mt: 1 /* margin top */ }}>SIGNUP</Button>
          
        </Sheet>
      </main>
    </CssVarsProvider>
  





        {/* <form >
          <input type="text" name="name" value={User.name} onChange={handleInput} />
          <input type="password" name="password" value={User.password} onChange={handleInput} />
          <button type="submit" name="submit" onClick={adduser}>
            Submit
          </button>
        </form> */}
      </>
  )
}
