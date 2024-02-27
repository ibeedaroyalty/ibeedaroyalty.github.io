import React from "react";
import Hero from "./HeroArea/Hero";
import Nav from "./NavArea/Nav";
import { HomePageContainer } from "./styles";


function Home() {
    return (
      <HomePageContainer>
        Hello from Home
        <Hero/>
        <Nav/>
      </HomePageContainer>
    );
}

export default Home;