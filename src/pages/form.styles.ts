import styled from "styled-components";
import {Box} from "@mui/material";

export const StyledForm = styled(Box)`
max-height: 90vh;
  width: 50%;
  border-radius: 5px;
  background-color: white;
  color: darkslategrey;
  padding: 20px;
  overflow: scroll;
  
  .heading{
    margin-top: 25px;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
  }
  
  .form-container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
  }
  
  .input-field {
    width: 80%;
    margin: 10% 0
  }
  
  .submit {
    margin-top: 40px;
    background-color: #081229;
  }
  
  .error-msg {
    color: red;
  }
`