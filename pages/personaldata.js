{/* 
  import {useRouter} from 'next/router'  
import React, { useState } from 'react'; 

 const PersonalData = (props)=>
{
    const router = useRouter();
    const [data, updateData] = useState([0]);
    
  console.log(data);
        

return(
  <div>
    <h1>tutaj beda dane personalne</h1>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text" value={} onChange={}></input><br/>
    {/* updateData(this.setState({data:this.e.target.value.push('new value1')})) */}
    {/*()=> {data.setState({ data:data })} */}  


import React from 'react'

class PersonalData extends React.Component
{
    constructor(props)
    {
        super(props);
        this.changeStatus=this.changeStatus.bind(this);
       
        this.state={
            data:[]
          
         
        }
 
        
    }
    changeStatus(event){
        
        this.setState({
            data:console.log(event.target.value)
      
        });
     
    }


    
    
    render()
    {
        
        return(
        <div>
        <h1>personal data</h1>
       
        
    <input  type="text" onChange={this.changeStatus}></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
    <input type="text"></input><br/>
            
        </div>
            );
    }
}
export default PersonalData;