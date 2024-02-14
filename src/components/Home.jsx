import React from "react";
import { useTranslation } from "react-i18next";
import { Hero } from "../components";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
