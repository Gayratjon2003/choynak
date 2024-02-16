import React, { useEffect, useState } from "react";
import logoImg from "../../assets/img/logo.png";
import loginSvg from "../../assets/img/login-icon.png";
import registerSvg from "../../assets/img/register-icon.png";
import searchIcon from "../../assets/img/search-icon.png";
import flagEn from "../../assets/img/flag-en.png";
import flagRu from "../../assets/img/flag-ru.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../constants";
import i18n from "../../i18n";
const Navbar = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [lan, setLan] = useState("ru");
  const onSearch = (e) => {
    if (search.length > 0 && e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = (e) => {
    if (search.length > 0) {
      console.log(search);
    }
  };
  const handleLogin = () => {
    // go to Login Page
    console.log("Login...");
  };
  const handleRegister = () => {
    // go to Register Page
    console.log("Register...");
  };
  const handleLang = (val) => {
    setLan(val);
    i18n.changeLanguage(val);
    localStorage.setItem("lan", val);
  };
  useEffect(() => {
    let localLan = localStorage.getItem("lan");
    if (localLan === "en") {
      setLan(localLan);
      i18n.changeLanguage(localLan);
    } else if (localLan === "ru") {
      setLan(localLan);
      i18n.changeLanguage(localLan);
    }
  }, []);
  return (
    <div className="navbar fixed">
      <div className="container-nav">
        <div className="nav-box flex justify-between w-full items-center my-2.5">
          <div className="left w-[150px] mr-[50px] mb-1">
            <div className="logo">
              <Link to={routes.HOME} >
              <img src={logoImg} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="right flex items-center justify-between w-full gap-x-[52px]">
            <div
              className="nav-search flex items-center h-[56px]"
              id="nav-search"
            >
              <input
                type="text"
                placeholder={t("navData.search")}
                onKeyDown={onSearch}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="nav-search-btn my-4 ml-8 h-6 text-xl text-[#474545] bg-transparent w-[349px]"
              />
              <div className="cursor-pointer">
                <img
                  src={searchIcon}
                  className="my-4 mr-[18px]"
                  onClick={handleSearch}
                />
              </div>
            </div>
           <nav>
           <ul className="flex items-center gap-x-[50px]">
              <li>
                <Link to={routes.FORSTUDENTS}>{t("navData.forStudents")}</Link>
              </li>
              <li>
                <Link to={routes.FORCOMSULTANTS}>
                  {t("navData.forConsultants")}
                </Link>
              </li>
              <li>
                <Link to={routes.FORUNIVERSITIES}>
                  {t("navData.forUniversities")}
                </Link>
              </li>
            </ul>
           </nav>
            <div className="lang">
              {lan === "ru" && (
                <img
                  src={flagEn}
                  alt="En"
                  onClick={() => handleLang("en")}
                  className="cursor-pointer"
                />
              )}
              {lan === "en" && (
                <img
                  src={flagRu}
                  alt="Ru"
                  onClick={() => handleLang("ru")}
                  className="cursor-pointer"
                />
              )}
            </div>
            <div className="buttons flex gap-x-[52px]">
              <button
                onClick={handleLogin}
                className="bg-green rounded-xl nav-login-btn text-xl text-white "
              >
                <span className="flex items-center my-2.5 ml-[7px] pr-1 mr-4 leading-[27px]">
                  <img src={loginSvg} className="mr-2" />
                  {t("login")}
                </span>
              </button>
              <button
                onClick={handleRegister}
                className="bg-green rounded-xl nav-login-btn text-xl text-white"
              >
                <span className="flex items-center my-2.5 ml-[7px] mr-4 leading-[27px]">
                  <img src={registerSvg} className="mr-1 pt-1" />
                  {t("register")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
