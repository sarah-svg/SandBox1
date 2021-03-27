import React, { useEffect, useState } from 'react';
import { Game } from '../components/Game';

const Games = ({score, myChoice, setScore}) => {
    /////seting stae with hooks
    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");
    const [counter, setCounter] = useState(3);
    //create const for 
    const newPick = () => {
        const choice = ["rock", "paper", "scissors"];
        setHouse(choice[Math.ceil(Math.random() * 3)]);
    };
    useEffect(() => {
        newPick();
    }, []);

    const results = () => {
        if(myChoice === 'rock' && house === 'shears'){
            setPlayerWin("win");
           setScore(score++)

        } 
        else if(myChoice === 'rock' && house === "paper" ){
            setPlayerWin("lose");
             setScore(score--);
        }
        // finish if else statment
        else if(myChoice === '')
    }





return<Game/>





        


};




