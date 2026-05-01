import logo from './logo.svg';
import './App.css';
import pizza from './pizza.jpg';
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
  
function App() {


  const[name,setName]=useState(" ")
  const[size,setSize]=useState(" ")
  const[pepper,setPepper]=useState(" ")
  const[gluten,setGluten]=useState(" ")
  const[quantity,setQuantity]=useState(" ")
  const[res,setRes]=useState("")

function handle(e){
  e.preventDefault()
  var output=document.getElementById("result")
if(pepper===true&&gluten===true ){
  output.innerHTML=`Order for ${quantity} ${size} (s)of pizza  that add glutten-free and have pepperoni  in it for ${name} <br>
  Instructions: ${res ? res : "none"} `
}
  else if(pepper===true){
    output.innerHTML=`Order for ${quantity} ${size} (s)of pizza  that are not glutten-free and have pepperoni for ${name} <br>
 Instructions: ${res ? res : "none"}`
  }
 else if(gluten===true){
    output.innerHTML=`Order for ${quantity} ${size} (s)of pizza  and  add a glutten-free in it for ${name} <br>
 Instructions: ${res ? res : "none"}`
  }else{
    output.innerHTML=`Order for ${quantity} ${size} (s)of pizza  that are not glutten-free and have  did not add pepperoni for ${name} <br>
   Instructions: ${res ? res : "none"} `
  }
 
}
return(<>
<form onSubmit={(e)=>handle(e)}><br/>
<h2>Refresh here to see your change</h2>
<img src={pizza} style={{ width: '15rem' }} />

<h1>BUILD YOUR PIZZA</h1>
<label>Name:</label>
<input type="text" onChange={(e)=>setName(e.target.value)}/>
<br/>

<label>Size:</label>
<select onChange={(e)=>setSize(e.target.value)}>
  <option>Small</option>
  <option>Medium</option>
  <option>Large</option>
</select><br/>

<label>Pepperoni</label>
<input type="checkbox" onChange={(e)=>setPepper(e.target.checked)}/><br/>

<label>Gluten free</label>
<input type="checkbox" onChange={(e)=>setGluten(e.target.checked)}/><br/>

<label>Quantity:</label>
<input type="number" min="1" max="144" onChange={(e)=>setQuantity(e.target.value)}/>
<br/>

<label>Aditional resource:</label><br/>
<textArea style={{ width: '18rem',height:'6rem' }} onChange={(e)=>setRes(e.target.value)}></textArea>



<br/><br/>

<button>Submit</button>
</form>

<h4>THE MOST RECENT ORDER</h4>
<div id="result"></div>

</>)








  
  

  
  
}
  
export default App;