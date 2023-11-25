import React from "react";
import HomeEggDonation from "../../elements/homeElements/HomeEggDonation/HomeEggDonation";
import Advantages from "../../elements/homeElements/Advantages/Advantages";
import WhoCanEggDonor from "../../elements/homeElements/WhoCanEggDonor/WhoCanEggDonor";
import HowToBeEggDonor from "../../elements/homeElements/HowToBeEggDonor/HowToBeEggDonor";
import EggDonorStat from "../../elements/homeElements/EggDonorStat/EggDonorStat";
import CarouselElement from "../../elements/CarouselElement/CarouselElement";

const Home = () => {
  return (
    <div>
      <HomeEggDonation />
      <Advantages />
      <WhoCanEggDonor />
      <HowToBeEggDonor />
      <EggDonorStat />
      <CarouselElement />
    </div>
  );
};

export default Home;
