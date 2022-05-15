import React from 'react';
import Card from '../Card/Card';


function CH2ED(props) {
  // const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({name: "Yosemite", link: "https://code.s3.yandex.net/web-code/yosemite.jpg"});
  const [isImageExpand, setImageExpand] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImageExpand(true);
  }

  return (
    <section>
      <div>
        <p>
          Bienvenu au Centre d'Hébergement et d'Education des Enfants Démunis dénommé CH2ED.
          Comme l'explique notre acronyme, nous hébergeons les nfnats délaissés dans les rues,
          les enfnats sans famille et ceux dont les parents ou tuteurs ne parviennent pas à éduqiuer
          faute de moyens financiers.
        </p>
        <p>
          Localisé dans le village Egbi-Kopé qui se trouve à 4Km de Avétonou une localité se trouvant
          sur la route de Kpalimé.
          Foyer des enfants, le CH2ED, a pour mission de redonner espoir à tout enfant l'ayant perdu
          suite à une quelconque situation.
          Que l'enfant soit orphelin ou qu'il n'ait de maison, voire ses parents ne peuvent plus subvenir
          à son éducation, nos portes sont ouvertes pour l'accueillir.
          Le Centre D'Hébergement et D'Education des Enfants Démunis (C.H.2.E.D.), dont le siège social
          est situé à  EGBIKOPE  - BP. 51 -  Préfecture d'AGOU  -  au TOGO (à 4 Km d'AVETONOU) a été créé en 2001,
          et reconnu seulement en 2005. Il accueille actuellement, en internat : 23 garçons et 21 filles,
          soit 44 enfants âgés de 5 à 13 ans. Certains de ces enfants n'ont pas de père, d'autres n'ont pas de mère ;
          d'autres encore n'ont ni père, ni mère. Il y a des enfants qui ont été abandonnés, délaissés, rejetés.
          Certains sont aussi là parce qu'ils arrivent d'un milieu très défavorisé, et leurs parents n'avaient
          plus de quoi les nourrir et sont venus nous supplier de prendre leur (ou leurs) enfant(s) en charge...
        </p>
      </div>

      <ul className="elements__list">
        {
          props.cards.map((card, id) =>
            <Card
              key={id}
              card={card}
              alt={card.alt}
              src={card.src}
              title={card.title}
              onCardClick={() => props.handleCardClick(card)}
            />
          )
        }
      </ul>

      <div>
        <p>
          PROJET D'APPUI ET DE RECHERCHE DE PARTENAIRES FINANCIERS :
          Afin de contribuer à une amélioration des conditions de vie de ces enfants démunis, le
          Centre d'Hébergement "C.H.2.E.D." lance une recherche de partenaires financiers ou de donataires bénévoles,
          afin de recueillir des fonds destinés à la construction d'une paillotte (qui servira de salle d'études et de réfectoire)
          et de deux cuisines, et à l'aménagement de ces abris.

          Vous trouverez ici un extrait de ce projet.
        </p>
      </div>
      <div className="parrainer">
        <p>
          Pour mieux nous aider vous pouvez parrainer un enfant au choix.
          Comment se passe un parrainage au CH2ED ? Le processus est simple:

          Choisir l'enfant que vous voulez parrainer après avoir consulter le catalogue
          Remplire notre formulaire de parrainage
          Choisir la modalite de paiement: verser une allocation mensuelle ou annuelle pour le compte de l'enfant choisi.
        </p>
        <p>
          Pour avoir plus de details sur nos activite et comment nous venir en aide,
          prieres remplir le formulaire ci-apres.
        </p>
      </div>
      <div className="donation">
        <p>
          Nous avons besoin de votre soutient pour assurer une bonne réussite aux enfants que
          nous hébergeons et éduquons. Toutes aides qu'elle soient financières,
          matérielles ou en natures sont les bienvenues.

          Don par carte
          Don par virement bancaire
          Nous contacter pour nous rendre visite

          Notre mission est de contribuer au bonheur des enfants hébergés tout en leur permettant
          d'être éduqué pour avoir une place dans la société et un meilleur avenir.
        </p>
        <p>
          Pour avoir plus de details sur nos activite et comment nous venir en aide,
          prieres remplir le formulaire ci-apres.
        </p>
        <p>
          FUCEC TOGO (COOPEC SOLIDARITE) : Compte N° 78279
          FLOOZ: 99998383
          T-MONEY: 90047116 / 90200454 / 90176927
        </p>
      </div>
      <div className="contact">
        <p>
          Pour avoir plus de details sur nos activite et comment nous venir en aide,
          prieres remplir le formulaire ci-apres.
        </p>
      </div>



      <div className="projet-d'appui">
        {/* insert pdf view of the project here */}
      </div>
    </section>
  )
}

export default CH2ED;