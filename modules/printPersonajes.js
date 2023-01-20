export const printCardsPersonajes = (contenedor, arrayPersonajes) => {
  contenedor.innerHTML = "";

  arrayPersonajes.forEach(bienes => {
    const div = document.createElement("div");
    div.classList.add("aa-latest-properties-content");
    div.innerHTML = `
              <div class="row">
                  <div id="col-md-4">
                    <article class="aa-properties-item">
                            <a href="#" class="aa-properties-item-img">
                                <img id=${bienes.id} src=${bienes.image} alt="img">
                            </a>
                            <button class="card__delete" name='${bienes.id}'>❌</button>
                            <button class="card__edit" name='${bienes.id}'>✏</button>
                            <button class="card__favorite" name='${bienes.id}'>❤</button>
                            <div class="aa-tag for-sale">
                                ${bienes.estado}
                            </div>
                            <div class="aa-properties-item-content">
                              <div class="aa-properties-info">
                                  <span>${bienes.habitaciones} Habitacione</span>
                                  <span>${bienes.banos} Baños</span>
                                  <span>${bienes.parqueadero} Parqueadero</span>
                                  <span>${bienes.area} mts</span>
                              </div>
                              <div class="aa-properties-about">
                                    <h3><a href="#">${bienes.nombre}</a></h3>
                                    <p>${bienes.descripcion}</p>                      
                              </div>
                              <div class="aa-properties-detial">
                                  <span class="aa-price">
                                      $${bienes.precio}
                                  </span>
                                  <a href="#" class="aa-secondary-btn">Ver Detalles</a>
                              </div>
                            </div>
                      </article>
                  </div>
                </div>
          `;

    contenedor.appendChild(div);
  });
};