import { BrowserRouter, Routes, Route } from "react-router-dom";  
  
  import Signup from "./pages/Signup"
  import Login from "./pages/Login";
  import EmployeeList from "./pages/EmployeeList";

function App() {

  return (
    <BrowserRouter>
       <Routes>

        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employees" element={<EmployeeList/>} />

       </Routes>
    </BrowserRouter>
  );
}


export default App;