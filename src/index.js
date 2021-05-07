import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card.js';
import Sdata from './components/sdata.js'
import Header from './components/header.js';
import Ashu from './images/movie3.jpg';




const App = () =>{
    return(
        <>
       <Header/>
       {Sdata.map(function ncard(val){
    return(
        <Card imgsrc={Ashu}
        title={val.title}
        sname={val.sname}
        link={val.link}
    />   
    );})
}
       
        {/* <Card img={Ashu}
            title="Welcome To All"
            sname="ECR" 
            link="https://www.netflix.com/in/title/80225885"
        />
        <Card img={Vinod}
            title="Hello All"
            sname="Ashwini"
             link="https://www.netflix.com/in/title/81009646"   
        />
        <Card img={Ashu}
            title="Welcome To All"
            sname="ECR"
             link="https://www.netflix.com/in/title/80234304"
            />
            <Card img={Vinod}
            title="Hello All"
            sname="Ashwini" 
             link="https://www.netflix.com/in/title/80225885"  
        />
        <Card img={Ashu}
            title="Welcome To All"
            sname="ECR"
            link="https://www.netflix.com/in/title/81009646"   
            />
             */}
        
        
        </>
    )

}
ReactDOM.render(<App/>,document.getElementById('root'));