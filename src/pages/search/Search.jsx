import React from "react";
import "../home/Home.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchPopup from "../../components/Search/SearchPopup";
import SearchList from "../../components/Search/SearchList";
import Foot from "../../components/Foot/Foot";
import Form from "../../components/Form/Form";
const Search = () => {
  return (
    <React.Fragment>
      <div className="back" style={{ height: "180px" }}></div>
      <div className="home">
        <NavBar />

        <div className="container-flex">
          <div className="row">
            <div className="col-3">
              <SearchPopup />
            </div>
            <div className="col-9">
              <SearchList />
            </div>
          </div>
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};

export default Search;
