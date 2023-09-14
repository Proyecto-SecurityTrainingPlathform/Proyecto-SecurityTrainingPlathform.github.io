import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './challengesPage.css'
import { ChallengeSearch } from '../../cyberChallenges/components/ChallengeSearch';


export const ChallengesPage = () => {
  
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {

    const challenges = [
      {
        title: "Hunting",
        platform: "HackTheBox",
        level: "Easy",
        category: "Pwn",
        description: "I've hidden the flag very carefully, you'll never manage to find it! Please note that the goal is to find the flag, and not to obtain a shell.",
        flag: false,
      },
      {
        title: "RFlag",
        platform: "HackTheBox",
        level: "Easy",
        category: "Hardware",
        description: "We have found the garage where some cyber criminals have all their stuff. Using an SDR device, we captured the signal from the remote key that opens the garage. Can you help us to analyze it?",
        flag: false,
      }, 
      {
        title: "Unsighted",
        platform: "HackTheBox",
        level: "Hard",
        category: "Pwn",
        description: "Can you help me find my eyes?",
        flag: false,
      },
      {
        title: "Poly",
        platform: "HackTheBox",
        level: "Insane",
        category: "Reversing",
        description: "Can you find the flag?",
        flag: false,
      },
      {
        title: "LostKey",
        platform: "HackTheBox",
        level: "Medium",
        category: "Crypto",
        description: "Mustard Brightpants is an archaeologist who has been excavating ruins in Egypt for the past 25 years. In one of his discoveries, he found a sphere-shaped trinket that has a strange combination of letters and numbers printed around it. Alongside it was a scroll containing a riddle in a strange language, and a keypad. The sphere's contents might finally solve the mystery behind the downfall of the mythical city of Outlandis. Could you help Mr. Brightpants solve the riddle and find the correct key to unlock the sphere?",
        flag: false,
      },
      {
        title: "The Needle",
        platform: "HackTheBox",
        level: "Very Easy",
        category: "Hardware",
        description: "As a part of our SDLC process, we've got our firmware ready for security testing. Can you help us by performing a security assessment?",
        flag: false,
      },
      {
        title: "Broken Decryptor",
        platform: "HackTheBox",
        level: "Medium",
        category: "Crypto",
        description: "The decrypt function is broken and I lost my flag. Can you help me fix it?",
        flag: false,
      },
      {
        title: "Pseudo",
        platform: "HackTheBox",
        level: "Medium",
        category: "Reversing",
        description: "Do you have enough permissions to get the flag?",
        flag: false,
      }
    ]
    
    setChallenges(challenges);
    /* Aquí voy a hacer la solicitud al API para mostrar los desafíos existentes
    axios.get('/api/challenges')
      .then((response) => {
        setChallenges(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los desafíos:', error);
      });*/
  }, []);

  return (
    <>
      <div className="title-div">
        <h1 className="title-h1"> Cybersecurity Challenges </h1>
      </div>
      < ChallengeSearch challenges={challenges} />
     
    </>
  );
}

