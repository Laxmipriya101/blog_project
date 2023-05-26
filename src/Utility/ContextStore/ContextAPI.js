import React, { createContext, useState } from "react";
export const ContexStore = createContext();
export const ContextFunction = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      ide: 1,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A7SobaUTvb6d5Z3dpOhFxPG0RQf.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 2,
      ide: 2,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 1,
      ide: 3,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
    {
      id: 1,
      ide: 4,
      cat: "Hollywood",
      for: "ArticleList",
      Overview:
        "Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.",

      img: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
      date: " 02/17/2023 ",

      title: "Ant-Man and the Wasp: Quantumania",
      description:
        " I had a terrific time watching 'Ant-Man and the Wasp: Quantumania', despite hearing 'meh' things about it here and there online. It surpassed my expectations, to be honest. Great cast, entertaining action, super interesting world building (my favourite from the MCU for a while, in that regard) and the humour is good.\n\nStar of the show in my opinion is Michelle Pfeiffer. I don't recall her standing out in 'Ant-Man and the Wasp",
    },
  ]);
  return (
    <>
      <ContexStore.Provider value={[data, setData]}>
        {props.children}
      </ContexStore.Provider>
    </>
  );
};
