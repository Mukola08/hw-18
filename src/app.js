import { getIceApi } from "./api/getApi";
import { postIceApi } from "./api/postIsApi";
import { createItemsMarkup } from "./makup/create-item";
import { delIceApi } from "./api/deliceApi";
import { updateIceApi } from "./api/updateIceApi";

const listEl = document.querySelector(".js-list");
const formRef = document.querySelector(".modal_form");
const backdrop = document.querySelector(".bakdrop");
const openBtn = document.querySelector(".open_modal");

let editCardId = null;

function openModal() {
  backdrop.style.opacity = "1";
  backdrop.style.pointerEvents = "auto";
}

function closeModal() {
  backdrop.style.opacity = "0";
  backdrop.style.pointerEvents = "none";
}

openBtn.addEventListener("click", () => {
  editCardId = null;
  formRef.reset();
  openModal();
});

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const { surname, name, birthdate, skills, image } = evt.target.elements;

  const data = {
    surname: surname.value.trim(),
    name: name.value.trim(),
    birthdate: birthdate.value.trim(),
    skills: skills.value.trim(),
    image: image.value.trim(),
  };

  if (editCardId === null) {
    postIceApi(data)
      .then(getIceApi)
      .then((res) => {
        listEl.innerHTML = createItemsMarkup(res);
        formRef.reset();
        closeModal();
      });
    return;
  }

  updateIceApi(editCardId, data)
    .then(() => getIceApi())
    .then((res) => {
      listEl.innerHTML = createItemsMarkup(res);
      formRef.reset();
      closeModal();
    });
});

listEl.addEventListener("click", (event) => {
  if (event.target.dataset.action === "Delete") {
    const itemId = event.target.closest("li").id;

    delIceApi(itemId)
      .then(getIceApi)
      .then((res) => {
        listEl.innerHTML = createItemsMarkup(res);
      });
  }

  if (event.target.dataset.action === "Edit") {
    const idItems = event.target.closest("li").id;

    getIceApi()
      .then((res) => {
        const card = res.find((el) => el.id == idItems);
        if (!card) return;

        formRef.elements.surname.value = card.surname || "";
        formRef.elements.name.value = card.name || "";
        formRef.elements.birthdate.value = card.birthdate || "";
        formRef.elements.skills.value = card.skills || "";
        formRef.elements.image.value = card.image || "";

        editCardId = card.id;
        openModal();
      })
      .catch((err) => {
        console.error("Помилка при отриманні даних:", err);
      });
  }
});

getIceApi().then((res) => {
  listEl.innerHTML = createItemsMarkup(res);
});
