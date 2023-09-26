import React, { Component, useEffect, useState } from 'react';
import TarotCard from './TarotCard';
import TarotCardImg from './TarotCardImages';
//data ? (data.map((card) => <div><h3>{card.name}</h3> <img id={card.imageId} src={TarotCardImg.find(o => o.id === card.imageId)?.image} /> </div>)) : (<div>{greeting}</div>)
// startReading?(<div><button onclick="activateLasers()">Activate Lasers</button ></div>):(<div>{readingOptions}</div>)
const TarotReading = () => {
    //localStorage.setItem("name",card.name); 
    const [data, setData] = useState(null);
    const [numOfCards, setNumOfCards] = useState(3);
    const [userMsg, setUserMsg] = useState("");
    const greeting = "Welcome to your Tarot reading! Choose a number of cards for your reading.";
    
    function getData() {
        setUserMsg("Loading...");
        fetch(`api/${numOfCards}`)
            .then((results) => {
                //return results.json();
                return results.json();
                //return JSON.parse(results);
            })
            .then(res => {
                let selectedText = JSON.stringify(res);
                setData(JSON.parse(JSON.stringify(res)));
                console.log(JSON.stringify(res));
            })

    }



    return (
        <div>
            <h3>{greeting}</h3>
            <input
                value={numOfCards}
                onChange={e => { if (e.target.value < 15 && e.target.value > 0) { setNumOfCards(e.target.value) } else { alert("Please enter a positive integer that does not exceed number of cards in the deck!"); } }}
                type="number"
            />
            <button onClick={getData}>Generate {numOfCards} Tarot cards</button >
            {data ? (data.map((card) => { <div key={card.id}><h3>{card.name}</h3> <img id={card.imageId} src={TarotCardImg.find(o => o.id === card.imageId)?.image} /> </div> })) : (<div><h3>{userMsg}</h3></div>)}

        </div>
            


        
            );

};
export default TarotReading;