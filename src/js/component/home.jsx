import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const items = [
    { href: "#", text: "Home", active: true },
    { href: "#", text: "Features", active: false },
    { href: "#", text: "Pricing", active: false },
    { href: "#", text: "Contact", active: false }
  ];

  const card = [
    {
      img: { src: "https://picsum.photos/200/300", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card title",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img: { src: "https://picsum.photos/200/300", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card title",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img: { src: "https://picsum.photos/200/300", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card title",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img: { src: "https://picsum.photos/200/300", alt: "Image" },
      btn: { href: "#", text: "Click here" },
      title: "Card title",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ];

  return (
    <div className="text-center">
      <Navbar items={items} />
      <div className="d-flex justify-content-center flex-wrap">
        <Card button={card[0].btn} img={card[0].img} text={card[0].text} title={card[0].title} />
        <Card button={card[1].btn} img={card[1].img} text={card[1].text} title={card[1].title} />
        <Card button={card[2].btn} img={card[2].img} text={card[2].text} title={card[2].title} />
        <Card button={card[3].btn} img={card[3].img} text={card[3].text} title={card[3].title} />
      </div>
    </div>
  );
};

export default Home;
