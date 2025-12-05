
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Header from "./components/coustm/HeaderNav";
import CreateTrip from "./CreateTrip/index.jsx";
import Hero from "./components/coustm/Hero";


export default function App() {
  return (
    
       <div>
        
        {/* <Button>Find Place</Button> */}
        <Header/>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/creat-trip" element={<CreateTrip/>}></Route>
        </Routes>
     
       
       </div>
   
   
  );
}
