import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




import Navigationbar from './Navigationbar';
import Footer from "./components/footer";


export default function App() {
  return (
    <div className="App">
      <Navigationbar/>
         <Footer/>
    </div>
  );
}


