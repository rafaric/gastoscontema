import {
  fondoClaro,
  contenidoClaro,
  textoFondoClaro,
  textoFondoOscuro,
  contenidoOscuro,
  fondoOscuro,
} from "./Variables";

export const temaClaro = {
  body: fondoClaro,
  inside: contenidoClaro,
  text: textoFondoClaro,
  filter: "",
};
export const temaOscuro = {
  body: fondoOscuro,
  inside: contenidoOscuro,
  text: textoFondoOscuro,
  filter: "invert(100%)",
};
