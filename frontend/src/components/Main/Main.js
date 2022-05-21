/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../About/About";
import Accueil from "../Accueil/Accueil";
import Activities from "../Activities/Activities";
import Associations from "../Associations/Associations";
import CHEED from "../CHEED/CHEED";
import Contact from "../Contact/Contact";
import Impact from "../Impact/Impact";


import './Main.css';


function Main(props) {

  return (
    <main className="content">
      <Routes>
        <Route path="/" element={ <Accueil /> } />
        <Route path="about" element={ <About /> } />
        <Route path="activities" element={ <Activities /> } />
        <Route path="impact" element={ <Impact /> } />
        <Route path="cheed" element={ <CHEED /> } />
        <Route path="associations" element={ <Associations /> } />
        <Route path="contact" element={ <Contact />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </main>
  )
}

export const NotFound = () => {
  return <div
    style={
      {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'red',
        display: 'flex',
        fontSize: 'xx-large',
        fontWeight: 'bolder',
        height: '100%',
        width: '100%'
      }
    }
  >
    Erreur 404. Desole, Page n'existe pas!
    </div>
}

export default Main;