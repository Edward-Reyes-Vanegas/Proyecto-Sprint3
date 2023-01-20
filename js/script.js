
import getDataFetch from "../helpers/getData.js";
import deleteDataFetch from "../helpers/deleteData.js";
import {btnCategoryFilters} from "../modules/btnCategoryFilters.js";
import { printCardsPersonajes } from "../modules/printPersonajes.js";
import postDataFetch from "../helpers/postData.js";

const urlPersonajes = "http://localhost:3000/bienes";
const urlFavoritos = "http://localhost:3000/favoritos";
let personajes = [];

const contenedorPersonajes = document.getElementById("col-md-4");
console.log(contenedorPersonajes);
//------Capturar el primer conjunto de botones-----
const botonAll = document.getElementById("all");
const botonApartamento = document.getElementById("APARTAMENTO");
const botonEstudio = document.getElementById("APARTAESTUDIO");
const botonCasas = document.getElementById("CASA");
const botonBodegas = document.getElementById("BODEGA");
console.log(botonAll);
console.log(botonApartamento);
console.log(botonBodegas);
console.log(botonEstudio);
console.log(botonCasas);

//Colocamos todos estos botones en un array
const arrayBotones = [botonAll, botonApartamento, botonEstudio, botonCasas, botonBodegas];

document.addEventListener("DOMContentLoaded", async () => {
  sessionStorage.removeItem("editPersonaje");
  sessionStorage.removeItem("propertiesDetails");
  try {
    personajes = await getDataFetch(urlPersonajes);
    console.log(personajes);

    printCardsPersonajes(contenedorPersonajes, personajes);
    //Ejecutamos la función que nos permite filtrar x categoría
    btnCategoryFilters(arrayBotones, personajes, contenedorPersonajes);
    

  } catch (error) {
    console.log(error);
    alert(error);
  }
});

document.addEventListener("click", async ({ target }) => {
  //Funcionalidad de ir a detalles de inmuebles
  if (target.classList.contains("aa-properties-item-img")) {
    sessionStorage.setItem("propertiesDetails", JSON.stringify(target.id));
    location.href = "../pages/properties-details.html";
  }
  //Funcionalidad de eliminar un personaje
  if (target.classList.contains("card__delete")) {
    Swal.fire({
      title: "¿Está usted seguro de eliminar?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const idPersonajeDelete = parseInt(target.name);
        const urlDelete = `${urlPersonajes}/${idPersonajeDelete}`;

        try {
          await deleteDataFetch(urlDelete);
          personajes = await getDataFetch(urlPersonajes);
          printCardsPersonajes(contenedorPersonajes, personajes);
        } catch (error) {
          console.log("No se pudo eliminar hay un error" + error);
        }
      }
    });
  }

  //Inicio de la funcionalidad de edición

  if (target.classList.contains("card__edit")) {
    console.log(target.name);
    sessionStorage.setItem("editPersonaje", JSON.stringify(target.name));
    location.href = "../pages/register.html";
  }

  //Para agregar a favoritos
  if (target.classList.contains("card__favorite")) {
    const idFavorito = target.name;
    const urlPersonajeFavorito = `${urlFavoritos}?id=${idFavorito}`;

    const favorito = await getDataFetch(urlPersonajeFavorito);
    //Obtenemos el objeto
    const favoritePersonaje = await getDataFetch(
      `${urlPersonajes}/${idFavorito}`
    );
    if (favorito.length === 0 && Object.entries(favoritePersonaje).length) {
      await postDataFetch(urlFavoritos, favoritePersonaje);
      const data = await getDataFetch(urlFavoritos);
      console.log(data);
    }
  }
});