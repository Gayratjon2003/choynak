import React from "react";
import { useTranslation } from "react-i18next";
import { Hero, PlacesToStudy, TopUniversities } from "../components";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <PlacesToStudy />
      <TopUniversities />
    </div>
  );
};

export default Home;
