import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import MiddleTop from "../../components/Middle/MiddleTop";
import MiddleCenter from "../../components/Middle/MiddleCenter";
import MiddleBottom from "../../components/Middle/MiddleBottom";
import Form from "../../components/Form/Form";
import Foot from "../../components/Foot/Foot";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="back"></div>
      <div className="home">
        <NavBar />
        <Header />
        <div className="container-flex">
          <MiddleTop />
          <h3 className="part2">Browse by property type</h3>
          <MiddleCenter />
          <h3 className="part2">Homes guests love</h3>
          <MiddleBottom />
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};

export default Home;
