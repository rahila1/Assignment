import React, {useState} from "react";
import  './App.css';


const App =() => {
  const [details, setDetails]  = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setDetails((prev) => {
      return {...prev, [name] : value};
    })
  };
  console.log(details);

    return (
      <form className="form">
      <span><h3>Name: </h3> <input type="text" name= "name" onChange={handleChange}/></span> <br/>
      <span><h3>Email: </h3> <input type="email" name= "email" onChange={handleChange}/></span>
      <span><h3>Password: </h3> <input type="text" name= "password" onChange={handleChange}/></span>
      <span> <h3>Address: </h3> <textarea name= "address" onChange={handleChange}/>  <br/></span>
      <span><button className="btn" type="submit">Submit Form</button></span>
      <span><h3>Country </h3> <input type="text" placeholder="Enter your country name" onChange={handleChange}/></span> 
      <select> 
        <option>Pakistan</option>;
        <option>India</option>;
        <option>Bangladesh</option>;
        <option>USA</option>;
        <option>Brazil</option>
        <option>UAE</option>
        <option>Phalistien</option>

      </select>

      <select>
      <input type="radio" name="gender"  value="Male"/> : male
     <br/>
      <input type="radio" name="gender" value="Femail"/> : femail
    
      </select>


      </form>
    )
}

export default App;
