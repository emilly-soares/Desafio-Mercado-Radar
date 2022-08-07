import styled from "styled-components";

export const Container = styled.div` 
 @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");  
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
body, html {
  height: 100vh;
  font-family: "Source Sans Pro", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
.txt {
   border: solid #4A05A3;
   width: 50%;
   height: 45px;
   margin-left: 25%;
   color: #2e2e2e;
   font-size: 12pt;
   font-weight: bold;
   text-align: center;
}
.entry{
   width: 70%;
   height: auto;
   margin: 0 auto;
   margin-top: 80px;
}
.result{
   width: 50%;
   margin-left: 25%;
   font-size: 15pt;
   font-weight: bold;
   color: #4A05A3;
   text-align: center;
}
.robo{
   margin-left: 35%;
}
footer{
   padding-bottom: 0;
   width: 100%;
   text-align: right;
   margin-top: 130px;
}

.github, .instagram, .linkedin{
   margin-left: 5px;
}
`;