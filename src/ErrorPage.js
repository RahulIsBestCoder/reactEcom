import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import {  useEffect,useState} from "react";
import axios from "axios";


const ErrorPage = () => {
  
  const [data,setData]=useState("")
  const [userName,setName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
useEffect(() => {
  axios.get("http://localhost:3001/api/v1/data").then((result)=>{

    setData(result.data.msg[0].name)
  })
}, []);
const postData= async (e)=> {
  e.preventDefault()
  await axios.post("http://localhost:3001/api/v1/datapost",{
    userName,email,message
  }).then((response)=>{
    console.log("data post",response);
  }).catch((err)=>{
    console.log("err",err);
  })
} 

  return (
    <Wrapper>
      {console.log(data)}
      <div className="container">
        <div>
          <h1>{data}</h1>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              value={userName}
              onChange={(e)=>{
               setName(e.target.value)
              }}
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              required
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              value={message}
              onChange={(e)=>{
                setMessage(e.target.value)
              }}
              placeholder="Enter you message"></textarea>

             <Button onClick={postData}>Send</Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;