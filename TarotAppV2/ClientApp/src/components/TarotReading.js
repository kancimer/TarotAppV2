import React, { Component, useEffect, useState } from 'react';

/*
export class TarotReading extends Component {
    static displayName = TarotReading.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>TarotReading</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}
*/
const TarotReading = () => {

    //return (
       // <div>Functional Component :DD</div>

    //);
    const [data, setData] = useState(null);
    const [greeting, setGreeting] = useState('Bude proradilo');

    /*useEffect(() => {
        //console.log('Bruh');
        const fetchData = async () => {
            const response = await fetch(`item / 1`);
            const newData = await response.json();
            setData(newData);
            //console.log(newData);
            
        };

        fetchData();
    }, []);*/
    /*useEffect(() => {
        if (data == null) {
            fetch(`item/1`)
                .then((results) => {
                    return results.json();
                })
                .then(data => {

                    setData(data);
                })
        }

    }, []);*/

    /*if (data) {
        console.log(data)
        return <div>{data.title}</div>;
    } else {
        return null;
    }*/
    async function getTarotCards() {
        //const response = await fetch(`item/1`);
        //const data = await response.json();
        //setData(data);
    }
    useEffect(() => {

        //getTarotCards()
        //.then(data => {

        //setData(data);
        //fetch(`https://random-data-api.com/api/v2/beers`)
        fetch(`1`)
            .then((results) => {
                //return results.json();
                return JSON.stringify(results);
                //return JSON.parse(results);
            })
            .then(data => {

                setData(data);
                console.log(data);
            })



    }, []);



    return (
        data ? (<div>{data}</div>) : (<div>{greeting}</div>)
    );

};
export default TarotReading;