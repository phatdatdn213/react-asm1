import React from "react";
import "../home/Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Foot from "../../components/Foot/Foot";
import Form from "../../components/Form/Form";
import IMG from "./png-transparent-location-icon-computer-icons-location-google-maps-location-angle-map-symbol-thumbnail.png";
import "./Mystyle.css";

const detail = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  return (
    <React.Fragment>
      <div className="back" style={{ height: "180px" }}></div>
      <div className="home">
        <NavBar />
      </div>
      <div className="home">
        <button className="nut bay">Reserve or Book Now !</button>
        <h1>{detail.name}</h1>

        <span>
          <img src={IMG} alt="location" width="20" height="20"></img>
          {detail.address}
        </span>
        <p className="dis">{detail.distance}</p>
        <p className="pri">{detail.price}</p>
        <div className="bocuc">
          {detail.photos.map((e, index) => {
            return <img className="anh" src={e} key={index} alt={index}></img>;
          })}
        </div>
        <div className="duoi">
          <div className="fly">
            <h5>Perfect for a 9-night stay!</h5>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!{" "}
            </p>
            <p className="specialPrice">
              <span style={{ fontWeight: "700" }}>
                ${detail.nine_night_price}
              </span>
              {`(9 nights)`}
            </p>
            <button className="nut ">Reserve or Book Now !</button>
          </div>
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};

export default Detail;
