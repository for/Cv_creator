import React from 'react'

class Final extends React.Component
{
    constructor(props){
        super(props);
        this.sendDataToLocalStorage=this.sendDataToLocalStorage.bind(this);
        this.getDataToLocalStorage=this.getDataToLocalStorage.bind(this);
    }
    sendDataToLocalStorage()
    {
       // let obj ={
         //   name:'test',
           // age:12
             //   }
             const dataStorage = document.querySelector('#dataStorage').value;

        localStorage.setItem('mydata',JSON.stringify(dataStorage));
    }
        getDataToLocalStorage()
    {
        let data =localStorage.getItem('mydata');
        data=JSON.parse(data);
        console.log(data);
    }
    render(){
        return(
            <div>
                <input type="text" id="dataStorage"/>
                <button onClick={()=> this.sendDataToLocalStorage()}>send data to local storage</button>
                <button onClick={()=> this.getDataToLocalStorage()}>get data to local storage</button>
            </div>
        );
    }
}
export default Final;