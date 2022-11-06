import React, {  useState } from "react";
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Vijay from "./Vijay";

import Link from '@mui/joy/Link';

import { json } from "react-router-dom";




function ModeToggle() {
  //const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

//   return (
//     <Button
//       variant="outlined"
//       onClick={() => {
//         setMode(mode === 'light' ? 'dark' : 'light');
//       }}
//     >
//       {mode === 'light' ? 'Turn dark' : 'Turn light'}
//     </Button>
//   );
}

export default function Login2() {
  //let history = useNavigate();
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
      const adduse = async (e) =>{
        e.preventDefault();
        const res= await fetch("http://localhost:5000/login", {method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name, password})
        
      })
      const json = await res.json()
      
      console.log(json)
      if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        localStorage.setItem('userid', json.z); 
      // var m = json.z;
        window.location.reload ()
       // history.push("/");
       
       //res.redirect([], '/Vijay')
       //window.location.replace('/Vijay');
        
       

    }
    else{
        alert("Invalid credentials");
    }
      
      }
      

  return (<>
     {/* <div>
          <Vijay json={json}/>
        </div> */}
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
            <Typography level="body2">Sign in to continue.</Typography>
          </div><form>
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
          <Button type="submit" onClick={adduse} sx={{ mt: 1 /* margin top */ }}>Log in</Button></form>
          <Typography >
            Don&apos;t have an account? signup
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
    </>
  );
}
