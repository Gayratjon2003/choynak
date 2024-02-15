import React from "react";
import { useTranslation } from "react-i18next";
import { Hero, PlacesToStudy } from "../components";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <PlacesToStudy />
    </div>
  );
};

export default Home;
