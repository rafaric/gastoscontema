import { IconoCO } from "./Components/UI";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";
import otros from "./assets/images/otros.svg";
import utilidades from "./assets/images/utilidades.svg";

import React from "react";

export default (type) => {
  const Images = {
    Restaurante: <IconoCO src={alimentacion} alt="Restaurante" />,
    Salud: <IconoCO src={salud} alt="Salud" />,
    Transporte: <IconoCO src={transporte} alt="Transporte" />,
    Utilidades: <IconoCO src={utilidades} alt="Utilidades" />,
    Default: <IconoCO src={otros} alt="Otros" />,
  };
  return Images[type] || Images["Default"];
};
