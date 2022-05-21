import React, { useEffect } from "react";
import ANED from "./ANED";
import CVD from "./CVD";
import KodzoGue from "./KodzoGue";

import { mainApi } from "../../utils/MainApi";


function Associations() {
  function transformCard(cardItem) {
    return {
      alt: cardItem.name,
      title: cardItem.name,
      src: cardItem.link,
      id: cardItem._id,
      owner: cardItem.owner,
      likes: cardItem.likes
    }
  }

  useEffect(() => {
    // mainApi.get
  })

  return (
    <section className="associations">
      <CVD />
      <ANED />
      <KodzoGue />
    </section>
  )
}

export default Associations;