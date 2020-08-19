const root = document.querySelector('.root');
const placesList = root.querySelector('.places-list');
const popup = root.querySelector('.popup');
const popupButton = root.querySelector('.button');
const buttonClose = popup.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link-url');
const buttonAdd = document.querySelector('.popup__button');
const form = document.forms.new;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
];

function popupOpen() {
  popup.classList.add('popup_is-opened');
}

function popupClose() {
  popup.classList.remove('popup_is-opened');
}

function createCard(nameV, linkV) {
  const placesCard = document.createElement('div');
  placesCard.classList.add('place-card');

  const cardImage = document.createElement('div');
  cardImage.classList.add('place-card__image');
  cardImage.setAttribute('style', `background-image: url(${linkV})`);
  placesCard.appendChild(cardImage);

  const buttonDeleteIcon = document.createElement('button');
  buttonDeleteIcon.classList.add('place-card__delete-icon');
  cardImage.appendChild(buttonDeleteIcon);

  const cardDescription = document.createElement('div');
  cardDescription.classList.add('place-card__description');
  placesCard.appendChild(cardDescription);

  const cardName = document.createElement('h3');
  cardName.classList.add('place-card__name');
  cardName.textContent = nameV;
  cardDescription.appendChild(cardName);

  const buttonLike = document.createElement('button');
  buttonLike.classList.add('place-card__like-icon');
  cardDescription.appendChild(buttonLike);

  function like() {
      buttonLike.classList.toggle('place-card__like-icon_liked');
  }

  function cardDelete() {
      placesList.removeChild(placesCard);
  }
  
  buttonLike.addEventListener('click', like);
  buttonDeleteIcon.addEventListener('click', cardDelete);

  placesList.appendChild(placesCard);
  return placesList;
}
for (let i = 0; i <= initialCards.length - 1; i++) {
  const name1 = initialCards[i].name;
  const link1 = initialCards[i].link;
  
  createCard(name1, link1);
}   

function addCard(event) {
  event.preventDefault();

  const form = document.forms.new;
  const title = form.elements.name;
  const addLink = form.elements.link;
  const placesCard = createCard(title.value, addLink.value);

  document.forms.new.reset();
  placesList.appendChild(placesCard); 
}

function enterHandler(event) {
  if(event.key === 'Enter') {
      addCard();
  }
}

popupButton.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);
nameInput.addEventListener('keydown', enterHandler);
linkInput.addEventListener('keydown', enterHandler);
form.addEventListener('submit', addCard);
buttonAdd.addEventListener('click', popupClose);
buttonAdd.addEventListener('keydown', popupClose);

















