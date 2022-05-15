/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import About from "../About/About";
import Activities from "../Activities/Activities";
import Associations from "../Associations/Associations";
import CH2ED from "../CH2ED/CH2ED";
import Impact from "../Impact/Impact";
import Carousel from "../Carousel/Carousel";
import { homePageCards } from "../../utils/Cards";


import './Main.css';


function Main(props) {
  const location = useLocation();
  const home = location.pathname === '/';
  const locAbout = location.pathname === '/about';
  const locActivity = location.pathname === '/activities';
  const locImpact = location.pathname === '/impact';
  const locCentre = location.pathname === '/ch2ed';
  const locAssociations = location.pathname === '/associations';
  const locContact = location.pathname === '/contact';


  return (
    <main className="content">
      { home &&
        <section className="accueil">
          <div className="accueil__description">
            <p>
              Nous sommes une petite communauté qui se construie elle-même, à travers le dur labeur
              de ses habitants et ressortissants voire de sa diaspora.
              Elle habrite un orphelinat dénommé CH2ED, Centre d'Hebergement et d'Education des Enfants Démunis,
              pour éduquer et héberger les enfants nécessiteux et orphelins à ses propres dépens et des quelques
              aides de ses partenaires.
            </p>
            <p>
              Nous disposons également d'un terrain omnisport réglementaire dénommé Stade Omnisports KOFFI GONGO.
              Ce terrain doit son nom a Feu Koffi Gongo qui etait Fiato de notre communauté, a beaucoup fait pour
              que ce petit village se developpe pour devenir l'une des plus grande ville autonome du pays.
            </p>
          </div>
          <Carousel slides={homePageCards} />
        </section>
      }

      { locAbout && <About /> }

      { locActivity && <Activities /> }
      { locImpact && <Impact /> }
      { locCentre && <CH2ED /> }
      { locAssociations && <Associations /> }
      { locContact &&
        <section className="contact">

        </section>
      }
    </main>
  )
}

export default Main;