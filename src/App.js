import logo from './logo.svg';
import './App.css';
import Blogcarsd from './blogcard';
import React from 'react';

class App extends React.Component {
   fnm="ANUDEEP"
   state={
    showblog : true,

    
   }
   mobjarr=[
    {title:"Blog Sample 1",
    description:"lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
    likecount:0},
    {title:"Blog Sample 2",
    description:"lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",likecount:0},
    {title:"Blog Sample 3",
    description:"lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",likecount:0},
    {title:"Blog Sample 4",
    description:"lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",likecount:0}
  ]
   
  onlikeclick=(pos)=>{
   //alert("clicked" +pos);
   //var obj=mobjarr[pos];
    //console.log(obj);

  }
  
   blogele=this.mobjarr.map((item,pos)=>{
    return(<div className="heey" key={pos} >
      <Blogcarsd position={pos} title={item.title} description={item.description} likecount={item.likecount} onlikeclick={this.onlikeclick}/>
   
   </div>)
  })
   onhide=()=>{
    this.setState({showblog:false});

  }
  
  render(){
    return(<div className="App">
    <button onClick={this.onhide}>Hide List</button>
   
   {

   this.state.showblog== true ? this.blogele : null}
   
   
  </div>);
  }
  
  
}

export default App;
