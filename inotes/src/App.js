import "./App.css";


import React from "react";

import Signup from "./componanats/Signup";

import { BrowserRouter, Routes, Route, } from "react-router-dom";



import Success from "./componanats/Success";
import Vijay from "./componanats/Vijay";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {apiResponse: "" };
//   }
//     callAPI(){
//       fetch("http://localhost:5000/apiA")
//       .then(res => res.text())
//       .then(res => this.setState({apiResponse: res}));

//     }
//     componentWillMount(){
// this.callAPI();
//     }

// render() {

export const App = () => {
  //const auth = await props.json;
  //console.log(auth)
  const a = localStorage.getItem("token");
  console.log(a);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Signup />}/> */}
          {/* <Route index element={<Signup />} />
          <Route path="/Vijay" element={<Vijay />} /> */}
          <Route path="/" element={a ? <Vijay/> : <Signup />} />;
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

// return (
//   <div className="App">
//     <header className="App-header">
//  <Login/>
//     </header>
//     {/* {this.state.apiResponse} */}
//   </div>
// );
//}
//}
export default App;
