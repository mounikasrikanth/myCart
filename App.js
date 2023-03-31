import React, {  useState } from 'react';

import './Cart.css';
const App = () => {
  const[count,setCount]=useState(0);
  const[count1,setCount1]=useState(0);
  const[count2,setCount2]=useState(0);
  const[count3,setCount3]=useState(0);
  const[count4,setCount4]=useState(0);
  const[count5,setCount5]=useState(0);
  const[output,setOutput]=useState("");
  const[pay,setPay]=useState("")
if(count<0){
  alert("product should be more than 1" )}
else if(count1<0){
  alert("product should be more than 1")
}
else if(count2<0){
  alert("product should be more than 1")
}
if(count3<0){
  alert("product should be more than 1")
}
if(count4<0){
  alert("product should be more than 1")
}

  return (
    <center>
<div className='card'>
<div className='card-body'>

    <h1>welcome to my cart</h1><hr/>
     
     <h4>Add the products to your cart:{count+count1+count2+count3+count4+count5}</h4><hr/>
     <div class="border border-success p-1 mb-1" style={{borderRadius:"10px",height:"50px"}}>
 sugar<button  type="button" class="btn btn-secondary"onClick={()=>setCount(count+1)}>+</button>&nbsp;&nbsp;
 {count}&nbsp;&nbsp;  
 <button  type="button" class="btn btn-secondary"onClick={()=>setCount(count-1)}>-</button>&nbsp;&nbsp;
  <button  type="button" class="btn btn-secondary"onClick={()=>setCount(0)}> <svg x="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>clear All</button><br/><br/>
</div>
<div class="border border-success p-1 mb-1" style={{borderRadius:"10px",height:"50px"}}>
salt   <button  type="button" class="btn btn-secondary"style={{"border":"1px solid black" }}onClick={()=>setCount1(count1+1)}>+</button>&nbsp;&nbsp;
{count1}&nbsp;&nbsp;
 <button  type="button" class="btn btn-secondary"  onClick={()=>setCount1(count1-1)}>-</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-secondary" onClick={()=>setCount1(0)}> <svg x="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>clear All</button><br/><br/>
</div>
<div class="border border-success p-1 mb-1" style={{borderRadius:"10px",height:"50px"}}>
Rice   <button type="button" class="btn btn-secondary" onClick={()=>setCount2(count2+1)}>+</button>&nbsp;&nbsp;
{count2}&nbsp;&nbsp;
 <button   type="button" class="btn btn-secondary"onClick={()=>setCount2(count2-1)}>-</button>&nbsp;&nbsp;
  <button  type="button" class="btn btn-secondary"onClick={()=>setCount2(0)}> <svg x="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>clear All</button><br/><br/></div>


  
<div class="border border-success p-1 mb-1" style={{borderRadius:"10px",height:"50px"}}>
Tooth Paste <button  type="button" class="btn btn-secondary"onClick={()=>setCount3(count3+1)}>+</button>&nbsp;&nbsp;
{count3}&nbsp;&nbsp;
  
<button type="button" class="btn btn-secondary" onClick={()=>setCount3(count3-1)}>-</button>&nbsp;&nbsp;
  <button  type="button" class="btn btn-secondary"onClick={()=>setCount3(0)}> <svg x="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>clear All</button><br/><br/></div>

<div class="border border-success p-1 mb-1" style={{borderRadius:"10px",height:"50px"}}>
Maggi <button type="button" class="btn btn-secondary"onClick={()=>setCount4(count4+1)}>+</button>&nbsp;&nbsp;
{count4}&nbsp;&nbsp;
 <button type="button" class="btn btn-secondary"onClick={()=>setCount4(count4-1)}>-</button>&nbsp;&nbsp;
  <button type="button" class="btn btn-secondary"onClick={()=>setCount4(0)}> <svg x="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>clear All</button><br/><br/></div>

<div class="border border-success p-1 mb-1" style={{borderRadius:"10px",height:"50px"}}>
Toor Dal <button   type="button" class="btn btn-secondary"onClick={()=>setCount5(count5+1)}>+</button>&nbsp;&nbsp;
{count5}&nbsp;&nbsp;
 <button  type="button" class="btn btn-secondary"onClick={()=>setCount5(count5-1)}>-</button>&nbsp;&nbsp;
  <button  type="button" class="btn btn-secondary" onClick={()=>setCount5(0)}> <svg x="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>clear All</button><br/><br/></div>

<button type="button" class="btn btn-success"onClick={()=>setOutput(count*45+count1*20+count2*34+count3*50+count4*20+count5*120)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg><hr/>
  Bill Now</button><br/>
<h4>Total Amount is: {output}</h4> 
<button type="button" class="btn btn-outline-secondary"onClick={()=>setPay("cash only")}>
  {pay}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"/>
</svg>Pay Now</button><br/>
Thanks for shopping
visit Again
</div>
</div>


</center>
  );
};

export default App;