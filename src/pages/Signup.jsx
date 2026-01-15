import "./Signup.css";

import { useState } from 'react';

import { Link } from "react-router-dom";

function Signup() {
   const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [para, setPara] = useState("Fill all the related fields.");
  const [paraColor, setParaColor] = useState("black");
  const [userType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  
  

  const handleClick = (e) => {

   e.preventDefault();

   if (firstname === "") {

      setPara("Please enter first name.");
      setParaColor("red");
      return;
   }

   if (lastname === "") {

      setPara("Please enter last name.");
      setParaColor("red");
      return;
   }

   if (email === "") {

      setPara("Please enter your email address.");
      setParaColor("red");
      return;

   } else if (!email.includes("@") || !email.includes(".")) {

      setPara("Please enter a valid email address.");
      setParaColor("red");
      return;
   }

   if (phone===""){
      setPara("Please enter your phone number.");
      setParaColor("red");
      return;

   } else if(phone.length !== 10){

      setPara("Only 10 digits are allowed");
      setParaColor("red");
      return;
   }

   if (pass === ""){

      setPara("Please enter your password.");
      setParaColor("red");
      return;

   }else if (pass.length<8 || pass.length>15){

      setPara("Password must be between 8 and 15 characters.");
      setParaColor("red");
      return;
   }else if ( !pass.match(/[A-Z]/)){
      
      setPara("Password must have atleast one capital letter");
      setParaColor("red");
      return;

   }else if ( !pass.match(/[a-z]/)){

      setPara("Password must have atleast one small letter");
      setParaColor("red");
      return;

   }else if ( !pass.includes("@") && !pass.includes("$") && !pass.includes("#")){

      setPara("Password must be includes special characters (@,$,#)");
      setParaColor("red");
      return;
   }

   if (userType === "") {

      setPara("Please select a user type.");
      setParaColor("red");
      return;
   }

   if (about === "") {

      setPara("Please tell us something about yourself..");
      setParaColor("red");
      return;
   }

   if (gender === "") {

      setPara("Please select gender name");
      setParaColor("red");
      return;
   }


   setPara("SignUp Successfully Done..!!");
   setParaColor("green");
  }

  return (

   <div className="signup-container">
     <div className="firstdiv">

    <form>

    <h2>SignUp</h2>
    <h5>welcome to the SignUp page</h5>
  <div>
  <input  value={firstname}  onChange = {(e) =>setFirstName(e.target.value)} type="text" placeholder="Enter your first name"/>
  <br />
  <br />
  </div>
  <input value={lastname} type="text" onChange = {(e) =>setLastName(e.target.value)} placeholder="Enter your last name"/>
  <br />
  
  <br />
  <input value={email} onChange = {(e) =>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
  <br />
  <br />
  <input value={phone} onChange = {(e) =>setPhone(e.target.value)} type="text" placeholder="Enter your phone"/>
  <br />
  <br />
  <input value={pass} onChange = {(e) =>setPass(e.target.value)} type="text" placeholder="Enter your password"/>
  <br />
  <br />

  <select value={userType} onChange={(e) => setUserType(e.target.value)}>
  <option value="">--Select User Type --</option>
  <option value="Admin">Admin</option>
  <option value="Student">Student</option>
  <option value="Employee">Employee</option>
  <option value="Customer">Customer</option>
  </select>

  <textarea value={about} onChange={(e) => setAbout(e.target.value)}
   placeholder="Tell us something about yourself..." rows="4"></textarea>
  
  <div className="seconddiv">
  <label className="label1">
  <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>
  Female
  </label>

  <label className="label2">
  <input type="radio" name="gender" value ="Male" onChange = {(e) => setGender(e.target.value)}/>
  Male
  </label>

  </div>

  <button type="button" onClick={handleClick}>SignUp</button>
  </form>
  <p className="para" style={{ color: paraColor }}>{para}</p>
  

  <p className="secondpara">
   Already have an account?<Link to="/login">LogIn</Link>
   </p>
   </div>
 </div>
  );
  

}



export default Signup;
