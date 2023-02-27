import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Home.css'
const Home = () => {
    const [CardData, setCardData] = useState([])
    useEffect(()=>{
        fetch('https://task-server-tau.vercel.app/data')
        .then(res=> res.json())
        .then(data => setCardData(data.data))
    },[])
    console.log(CardData)
  return (
    <div>
      <div>
        <h1 className="title">We are Offering Best Features</h1>
        <h4 className="sub-title">
          BlueLight Health Envisions a World Where Living a Healthy Lifestyle
          Comes Naturally. You, as Part of Bluelight
        </h4>
      </div>
      <div className="card-container">
        {
            CardData.map(card => <Card key={card._id} card={card}/>)
        }
      </div>
    </div>
  );
};

export default Home;
