import React from "react";
import switchOn from "../../assets/images/themeOn.svg";
import switchOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

export default ({ tema }) => {
  const claro = <Icono src={switchOn} alt="Tema Claro" />;
  const oscuro = <Icono src={switchOff} alt="Tema Oscuro" />;

  return <>{tema ? oscuro : claro}</>;
};
