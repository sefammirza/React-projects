import React from 'react';
import ReactDom from 'react-dom';

// JSX 
// <button type="button" style={{"padding: 10px; color: white; background-color: red; border: 2px solid yellow;">HTML Button</button>

 function App(){

    const str1 = "Click";
    const str2 = "Me";

     return(
    <div>
        <button type="button" style={{padding:'10px', color:'white', backgroundColor:'blue', border:'2px solid yellow'}}>{str1.concat(str2)}</button>
        
    </div>
     );
 }

 ReactDom.render(
     <App/>,
     document.getElementById('root')
 ); 
 