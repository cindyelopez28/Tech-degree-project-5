/*Unit 5 project - Public APR Request*/

//global variables//

var urlAPI = "https://randomuser.me/api/?results=12&nat=us";
var gallery = document.querySelector('#gallery');

// fetch API data and return it json formal
fetch(urlAPI)
.then(res => res.json()) //returns in JSON format
.then(data => {
    const users = data.results;
    for (i = 0; i < users.length; i++) {
        createCard(users[i], i);    
        createModal(users[i]); 
    }   

})
.catch(error => console.log("Sorry. Something went wrong.")); 

//create card function to create employee cards//
function createCard(data, index) {
  const card = ` <div class="card">
      <div class="card-img-container">
          <img class="card-img" src=${data.picture.medium} alt="profile picture">
      </div>
      <div class="card-info-container">
          <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
          <p class="card-text">${data.email}</p>
          <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
      </div>
  </div>
          
  </div>`;
  //append card to the gallery 
  gallery.insertAdjacentHTML('beforeend', card);
  
  //create an event listener so that when users click on card they can view modal window
  const cards = document.querySelectorAll('.card');
  cards[index].addEventListener('click', e => { 
      let modalArray = document.querySelectorAll('.modal');
      modalArray[index].style.display = '';
      modalContainer.style.display = '';
  });
}
//Create a Modal Window//
// create a div element to be appended to the body element for the class 'modal container'// 
let modalDiv = document.createElement('div');
    modalDiv.className = "modal-container";
    modalDiv.style.display = "none";
    document.body.append(modalDiv);

const modalContainer = document.querySelector('.modal-container');

function createModal(data) {
//using html from index file, interpolate and parse out data so that PII comes out neatly//
  const modal= `
  <div class="modal" > 
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
              <img class="modal-img" src=${data.picture.large} alt="profile picture">
              <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
              <p class="modal-text">${data.email}</p>
              <p class="modal-text cap">${data.location.city}</p>
              <hr>
              <p class="modal-text">${data.phone}</p>
              <p class="modal-text">${data.location.street.number} ${data.location.street.name} ${data.location.city}, ${data.location.state} ${data.location.postcode}</p>
              <p class="modal-text">Birthday: ${data.dob.date.slice(5, 7)}/${data.dob.date.slice(8, 10)}/${data.dob.date.slice(2, 4)}</p>
          </div>
          </div>
      </div>`;
 
  modalContainer.insertAdjacentHTML('beforeend', modal);
  const myModal = modalContainer.lastElementChild;
  myModal.style.display = "none";

  //hide modal display after clicking on the modal close btn
  const button = myModal.querySelector('.modal-close-btn');
  button.addEventListener('click', () => {
      myModal.style.display = 'none';
      modalContainer.style.display = 'none';
  });
}







