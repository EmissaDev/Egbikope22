import Carousel from "../Carousel/Carousel";
import { homePageCards } from "../../utils/Cards";

import './Accueil.css'

function Accueil() {
  return(
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
  )
}

export default Accueil;