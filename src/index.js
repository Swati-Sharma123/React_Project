import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AboutUs from "./AboutUs";
import Navigation from "./Navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      //  <>
       
      //   <App name="swati"/>
        
      //   <App sname="Sharma"/>

      //  </>,
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="*" element={<AboutUs />} />
      </Route>
      </Routes>
      </BrowserRouter>);




































// ReactDOM.render(
//    <>
//    <App color="blue"/>
//    console.log("who clicked me ?")
//    </>,
//    )
//    document.getElementById("root")

// ReactDOM.render(
//     <>
//     <App color='red' ayush={()=>
//         {
//             document.write("hello")
//             alert("seee")
//         }
//     }/>
//     </>
// );
// document.getElementById("root");