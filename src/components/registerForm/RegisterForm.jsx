import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const RegisterForm = () => {
  const { t } = useTranslation();
  const lNameRef = useRef(null);
  const fNameRef = useRef(null);
  const dateAndBirthRef = useRef(null);
  const seriyaRef = useRef(null);
  const passportNumRef = useRef(null);
  const phoneNumRef = useRef(null);
  const emailRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);
  const streetRef = useRef(null);
  const [education, setEducation] = useState("");
  const eduEndYearRef = useRef(null);
  const [certificate, setCertificate] = useState("");
  const levelRef = useRef(null);
  const recievedYearRef = useRef(null);
  const sponsorNameRef = useRef(null);
  const sponsorRelationshipRef = useRef(null);
  const sponsorTelNumRef = useRef(null);

  const [passportDataFileUpload, setPassportDataFileUpload] = useState("");
  const [eduFileUpload, setEduFileUpload] = useState("");
  const [certificateFileUpload, setCertificateFileUpload] = useState("");
  const [otherDataFileUpload1, setOtherDataFileUpload1] = useState("");
  const [otherDataFileUpload2, setOtherDataFileUpload2] = useState("");
  const [otherDataFileUpload3, setOtherDataFileUpload3] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePassportDataFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setPassportDataFileUpload(selectedFile.name);
  };
  const handleEduFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setEduFileUpload(selectedFile.name);
  };
  const handleCertificate = (e) => {
    const selectedFile = e.target.files[0];
    setCertificateFileUpload(selectedFile.name);
  };
  const handleOtherDataFileUpload1 = (e) => {
    const selectedFile = e.target.files[0];
    setOtherDataFileUpload1(selectedFile.name);
  };
  const handleOtherDataFileUpload2 = (e) => {
    const selectedFile = e.target.files[0];
    setOtherDataFileUpload2(selectedFile.name);
  };
  const handleOtherDataFileUpload3 = (e) => {
    const selectedFile = e.target.files[0];
    setOtherDataFileUpload3(selectedFile.name);
  };
  return (
    <section className="registerForm mt-12">
      <div className="container">
        <div className="box text-25">
          <form onSubmit={HandleSubmit}>
            <div className="title">
              <h1 className="text-5xl font-extrabold">
                {t("registerForm.title")}
              </h1>
            </div>
            <div className="personalData flex flex-col mt-6 flex-wrap">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.personalData.title")}</h1>
              </div>
              <div className="flex justify-between items-center gap-8">
                <input
                  type="text"
                  name="lName"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.personalData.lName")}
                  ref={lNameRef}
                />
                <input
                  type="text"
                  name="fName"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.personalData.fName")}
                  ref={fNameRef}
                />
                <input
                  type="date"
                  className="register-input min-w-396"
                  name="dateAndBirth"
                  ref={dateAndBirthRef}
                />
              </div>
            </div>
            <div className="passportData flex flex-col mt-6">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.passportData.title")}</h1>
              </div>
              <div className="flex justify-between items-center gap-8">
                <input
                  type="text"
                  name="seriya"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.passportData.seriya")}
                  ref={seriyaRef}
                />
                <input
                  type="text"
                  name="passportNum"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.passportData.number")}
                  ref={passportNumRef}
                />
                <label
                  htmlFor="passportDataFileUpload"
                  className="register-input register-input-file text-[22px] min-w-396 overflow-hidden whitespace-nowrap !p-0 cursor-pointer flex items-center justify-center"
                >
                  <input
                    type="file"
                    className="register-input hidden"
                    name="passportDataFileUpload"
                    id="passportDataFileUpload"
                    onChange={handlePassportDataFileUpload}
                    ref={dateAndBirthRef}
                  />
                  <span>
                    {passportDataFileUpload
                      ? passportDataFileUpload
                      : t("registerForm.passportData.fileLimit")}{" "}
                  </span>
                </label>
              </div>
            </div>
            <div className="contactData flex flex-col mt-6">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.contactData.title")}</h1>
              </div>
              <div className="flex items-center gap-8 flex-wrap">
                <input
                  type="text"
                  name="phoneNum"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.contactData.phoneNum")}
                  ref={phoneNumRef}
                />
                <input
                  type="email"
                  name="email"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.contactData.email")}
                  ref={emailRef}
                />
                <div className="flex items-center justify-between w-full gap-8">
                  <input
                    type="text"
                    name="country"
                    className="register-input min-w-550"
                    placeholder={t("registerForm.contactData.country")}
                    ref={countryRef}
                  />
                  <input
                    type="text"
                    name="city"
                    className="register-input min-w-550"
                    placeholder={t("registerForm.contactData.city")}
                    ref={cityRef}
                  />
                  <input
                    type="text"
                    name="street"
                    className="register-input min-w-396"
                    placeholder={t("registerForm.contactData.street")}
                    ref={streetRef}
                  />
                </div>
              </div>
            </div>
            <div className="educationData flex flex-col mt-6">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.education.title")}</h1>
              </div>
              <div className="flex justify-between items-center gap-8">
                <select
                  name="educationType"
                  id="educationType"
                  className="register-input min-w-550"
                  onChange={(e) => setEducation(e.target.value)}
                >
                  {i18next
                    .t("registerForm.education.selectList.data", {
                      returnObjects: true,
                    })
                    .map((item) => (
                      <option value={item?.name} key={item?.id}>
                        {item?.name}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  name="eduEndYear"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.education.endingYear")}
                  ref={eduEndYearRef}
                />
                <label
                  htmlFor="educationFileUpload"
                  className="register-input register-input-file text-[22px] min-w-396 overflow-hidden whitespace-nowrap !p-0 cursor-pointer flex items-center justify-center"
                >
                  <input
                    type="file"
                    className="register-input hidden"
                    name="educationFileUpload"
                    id="educationFileUpload"
                    onChange={handleEduFileUpload}
                  />
                  <span>
                    {eduFileUpload
                      ? eduFileUpload
                      : t("registerForm.education.fileLimit")}{" "}
                  </span>
                </label>
              </div>
            </div>
            <div className="certificateLangData flex flex-col mt-6">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.certificateLang.title")}</h1>
              </div>
              <div className="flex justify-between items-center gap-8">
                <select
                  name="certificateLang"
                  id="certificateLang"
                  className="register-input min-w-550"
                  onChange={(e) => setCertificate(e.target.value)}
                >
                  {i18next
                    .t("registerForm.certificateLang.data", {
                      returnObjects: true,
                    })
                    .map((item) => (
                      <option value={item?.name} key={item?.id}>
                        {item?.name}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  name="certificateLangLevel"
                  className="register-input min-w-260"
                  placeholder={t("registerForm.certificateLang.level")}
                  ref={levelRef}
                />
                <input
                  type="text"
                  name="certificateLangRecievedYear"
                  className="register-input min-w-260"
                  placeholder={t("registerForm.certificateLang.recievedYear")}
                  ref={recievedYearRef}
                />
                <label
                  htmlFor="certificateLangFileUpload"
                  className="register-input register-input-file text-[22px] min-w-396 overflow-hidden whitespace-nowrap !p-0 cursor-pointer flex items-center justify-center"
                >
                  <input
                    type="file"
                    className="register-input hidden"
                    name="certificateLangFileUpload"
                    id="certificateLangFileUpload"
                    onChange={handleCertificate}
                  />
                  <span>
                    {certificateFileUpload
                      ? certificateFileUpload
                      : t("registerForm.certificateLang.limitData")}{" "}
                  </span>
                </label>
              </div>
            </div>
            <div className="otherData flex flex-col mt-6">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.otherData.title")}</h1>
              </div>
              <div className="flex justify-between items- gap-8">
                <div className="min-w-550">
                  <label
                    htmlFor="otherDataFileUpload1"
                    className="register-input mb-6 register-input-file text-[22px] w-396 overflow-hidden whitespace-nowrap !p-0 cursor-pointer flex items-center justify-center"
                  >
                    <input
                      type="file"
                      className="register-input hidden"
                      name="otherDataFileUpload1"
                      id="otherDataFileUpload1"
                      onChange={handleOtherDataFileUpload1}
                    />
                    <span>
                      {otherDataFileUpload1
                        ? otherDataFileUpload1
                        : t("registerForm.otherData.limitFile1")}{" "}
                    </span>
                  </label>
                  <span className="text-[23px]">
                    {t("registerForm.otherData.file1")}
                  </span>
                </div>
                <div className="min-w-550 flex flex-col text-center">
                  <label
                    htmlFor="otherDataFileUpload2"
                    className="register-input mb-6 register-input-file text-[22px] w-396 overflow-hidden whitespace-nowrap !p-0 cursor-pointer flex items-center justify-center"
                  >
                    <input
                      type="file"
                      className="register-input hidden"
                      name="otherDataFileUpload2"
                      id="otherDataFileUpload2"
                      onChange={handleOtherDataFileUpload2}
                    />
                    <span>
                      {otherDataFileUpload2
                        ? otherDataFileUpload2
                        : t("registerForm.otherData.limitFile2")}{" "}
                    </span>
                  </label>
                  <span className="text-[23px] mr-[144px]">
                    {t("registerForm.otherData.file2")}
                  </span>
                </div>
                <div className="min-w-550 flex flex-col text-center">
                  <label
                    htmlFor="otherDataFileUpload3"
                    className="register-input mb-6 register-input-file text-[22px] w-396 overflow-hidden whitespace-nowrap !p-0 cursor-pointer flex items-center justify-center"
                  >
                    <input
                      type="file"
                      className="register-input hidden"
                      name="otherDataFileUpload3"
                      id="otherDataFileUpload3"
                      onChange={handleOtherDataFileUpload3}
                    />
                    <span>
                      {otherDataFileUpload3
                        ? otherDataFileUpload3
                        : t("registerForm.otherData.file3Limit")}{" "}
                    </span>
                  </label>
                  <span className="text-[23px] mr-[144px]">
                    {t("registerForm.otherData.file3")}
                  </span>
                </div>
              </div>
            </div>
            <div className="sponsorData flex flex-col mt-6 flex-wrap">
              <div className="ml-7 mb-6">
                <h1>{t("registerForm.sponsor.title")}</h1>
              </div>
              <div className="flex justify-between items-center gap-8">
                <input
                  type="text"
                  name="sponsorName"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.sponsor.name")}
                  ref={sponsorNameRef}
                />
                <input
                  type="text"
                  name="sponsorRelationship"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.sponsor.relationship")}
                  ref={sponsorRelationshipRef}
                />
                <input
                  type="text"
                  name="sponsorTelNum"
                  className="register-input min-w-550"
                  placeholder={t("registerForm.sponsor.telNumber")}
                  ref={sponsorTelNumRef}
                />
              </div>
            </div>
            <div className="mt-16 flex items-center justify-center text-white">
              <button className="bg-[#418172] py-15 px-[68px] rounded-lg">
                {t("registerForm.sendBtn")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
