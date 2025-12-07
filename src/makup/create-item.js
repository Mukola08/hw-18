export const createItemsMarkup = (array) => {
  return array
    .map(({ surname, name, birthdate, skills, image, id }, index) => {
      return `<li class="item" id="${id}">
        <span class="item-span">${
          index + 1
        }</span> <!-- для візуального номера -->
        <img src="${image}" alt="${name}" class="image">
        <h2 class="title">${birthdate}</h2>
        <p class="calories">${surname}</p>
        <p class="description">${name}</p>
        <p class="price">${skills}</p>
        <div class="btn_box">
          <button type="button" class="btn btn-delete" data-action="Delete">Delete It</button>
          <button type="button" class="btn btn-edit" data-action="Edit">Edit this card</button>
        </div>
      </li>`;
    })
    .join("");
};
