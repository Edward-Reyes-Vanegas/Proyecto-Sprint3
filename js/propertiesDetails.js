import getDataFetch from "../helpers/getData.js";

//Obtener el id del personaje guardado en el sessionStorage
const idPersonajeStr = sessionStorage.getItem("propertiesDetails")
  ? JSON.parse(sessionStorage.getItem("propertiesDetails"))
  : null;

const idPersonaje = idPersonajeStr ? parseInt(idPersonajeStr) : null;

console.log(idPersonaje);

//Obtener la información de este personaje realizando una petición GET

const urlPerson = `http://localhost:3000/bienes/${idPersonaje}`;
const container = document.querySelector(".aa-properties-content-body");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const personaje = await getDataFetch(urlPerson);

    //2. Insertar la información
    container.innerHTML = `
            <div class="aa-properties-details-img">
               <img src="${personaje.image}" alt="img">
               <img src="${personaje.image}" alt="img">
               img src="${personaje.image}" alt="img">
            </div>
            <div class="aa-properties-info">
               <h2>${personaje.nombre}</h2>
               <span class="aa-price">$${nombre.precio}</span>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatibus veniam non voluptate, ipsa eius magni aliquid ratione sit, odio reprehenderit in quis repudiandae dolor.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur, veritatis, ducimus in aliquam magnam voluptatibus ullam libero fugiat temporibus at, aliquid explicabo placeat eligendi, assumenda magni saepe eius consequuntur.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dicta aliquid, autem, cum, impedit nostrum, rem molestias quisquam ab iure enim totam? Itaque esse ut adipisci officiis nulla repellendus ratione dolore, iste ex doloribus tenetur eos provident quam quasi maxime.</p>
               <h4>Propery Features</h4>
               <ul>
                 <li>4 Bedroom</li>
                 <li>3 Baths</li>
                 <li>Kitchen</li>
                 <li>Air Condition</li>
                 <li>Belcony</li>
                 <li>Gym</li>
                 <li>Garden</li>
                 <li>CCTV</li>
                 <li>Children Play Ground</li>
                 <li>Comunity Center</li>
                 <li>Security System</li>
               </ul>
            </div>
`;
  } catch (error) {
    console.log(error);
    alert(error);
  }
});

