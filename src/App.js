import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import UserDetail from "./Home/UserDetail";

function App() {
  return (
  <>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route exact path="/user/:username" element={<UserDetail/>} />              
   </Routes> 
   </BrowserRouter>
  </>
  );
 }

export default App;
// exact is used here to avoid similar link being called if starting initials are same eg user and usernames
//and : is used for dynamic part