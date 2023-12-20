import React from "react";
import HomeEggDonation from "../../elements/homeElements/HomeEggDonation/HomeEggDonation";
import Advantages from "../../elements/homeElements/Advantages/Advantages";
import WhoCanEggDonor from "../../elements/homeElements/WhoCanEggDonor/WhoCanEggDonor";
import HowToBeEggDonor from "../../elements/homeElements/HowToBeEggDonor/HowToBeEggDonor";
import EggDonorStat from "../../elements/homeElements/EggDonorStat/EggDonorStat";
import CarouselElement from "../../elements/CarouselElement/CarouselElement";
import HomeSurrogacy from "../../elements/homeElements/HomeSurrogacy/HomeSurrogacy";
import WhoCanSurrogacy from "../../elements/homeElements/WhoCanSurrogacy/WhoCanSurrogacy";
import HowToBeSurrogacy from "../../elements/homeElements/howToBeSurrogacy/HowToBeSurrogacy";

const Home = () => {
  return (
    <div>
      <HomeSurrogacy />
      <Advantages />
      <WhoCanSurrogacy />
      <HowToBeSurrogacy />
      <HomeEggDonation />
      <WhoCanEggDonor />
      <HowToBeEggDonor />
      <EggDonorStat />
      <CarouselElement />
    </div>
  );
};

export default Home;
