import React from "react";
import styled from "styled-components";

const MessageComponent = props =>{
    return(
        <Message>
        
        <div>{props.massage}山田紘子</div>
        </Message>

    );
};

const Message = styled.p`
  padding:20px;
  background-color: #99E5FF;
  color:#123;
  width:200px;
  height:100px;
`;


export default MessageComponent;