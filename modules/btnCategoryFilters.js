import { printCardsPersonajes } from "./printPersonajes.js";

export const btnCategoryFilters = (arrayBtns, arrayPerson, contenedor) => {
  arrayBtns.forEach((boton) => {
    boton.addEventListener("click", () => {
      const filtro = arrayPerson.filter(
        (bienes) => bienes.tipoInmueble === boton.id
      );
        const filteredPersonajes = boton.id === "all" ? arrayPerson : filtro;
        console.log(filteredPersonajes);
        printCardsPersonajes(contenedor, filteredPersonajes);
    });
  });
};





