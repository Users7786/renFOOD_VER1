import React from "react";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Rest from "../components/Rest";
import Dishes from "../components/Dishes";

const Home = () => {
  return(
      <div>
          <Navbar/>
          <Info/>
          <Rest/>
          <Dishes/>
      </div>
  )
}

export default Home