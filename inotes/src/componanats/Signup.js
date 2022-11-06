import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Login2 from './Login2';
import { Login } from './Login';

export default function Signup() {
  return (
    <Tabs aria-label="Basic tabs" defaultValue={0}>
      <TabList>
        <Tab>LOGIN</Tab>
        
        <Tab>SIGNUP</Tab>
      </TabList>
      <TabPanel value={0}>
       <Login2/>
      </TabPanel>
      
      <TabPanel value={1}>
        <Login/>
      </TabPanel>
    </Tabs>
  );
}
