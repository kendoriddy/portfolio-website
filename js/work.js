import modalData from './modalData.js';

// console.log(modalData);
document.querySelector('.grid-container').innerHTML = modalData
  .map(
    (data, index) => `
<div class="card">
            <div class="card-items">
            <div class="project-image">
            <img src="${data.snapshot}"></div>
              <h5>${data.projectName}</h5>
              <ul>
                <li>${data.technologies[0]}</li>
                <li>${data.technologies[1]}</li>
                <li>${data.technologies[2]}</li>
                <li>${data.technologies[3]}</li>
              </ul>
              <button
                class="project-button"
                data-target="#popups"
                id="project_${index}"
                type="button"
              >
                See Project
              </button>
            </div>
          </div>
    `,
  )
  .join('');

// modals user interface

const displayPopup = (data) => {
  const popupSection = document.querySelector('.popups');
  popupSection.innerHTML = `
    <div class="popup-active">
      <div id="close-button" data-target="#popups" class="close-button close-btn">
        <img src="./assets/images/close-bg.svg" alt="close-icon" />
      </div>
      <div class="project-image-container">
        <div id="mobile-close-button" data-target="#popups" class="mobile-close-button close-btn">
          <img src="./assets/images/cancel-white.svg" alt="close-icon" />
        </div>
        <div class="desktop-project-image">
          <img src="./assets/images/project-image.png" alt="project-image" />
        </div>
        <div class="mobile-project-image">
          <img src="./assets/images/mobile-project-image.png" alt="project-image" />
        </div>
      </div>
      <div class="modal-head">
        <h3>${data.projectName}</h3>
        <ul>
          <li>
            <a href="#" target="_blank"
              > <span>See Live</span> <img class="outlinks" src="./assets/images/live.svg" alt="project-image"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank"
              ><span>See Source</span> <img class="outlinks" src="./assets/images/github-white.svg" alt="project-image"
            /></a>
          </li>
        </ul>
      </div>
      <div class="mobile-skillset">
        <p>${data.technologies[0]}</p>
        <p>${data.technologies[1]}</p>
        <p>${data.technologies[2]}</p>
        <p>${data.technologies[3]}</p>
      </div>
      <div class="skillset">
        <p>${data.technologies[0]}</p>
        <p>${data.technologies[1]}</p>
        <p>${data.technologies[2]}</p>
        <p>${data.technologies[3]}</p>
      </div>
      <div class="modal-description">
        <p>
          ${data.description}
        </p>
      </div>
      <div class="modal-links">
        <ul>
          <li>
            <a href="#" target="_blank">See Live
              <img class="outlinks" src="./assets/images/outlink.png" alt="project-image" /></a>
          </li>
          <li>
            <a href="#" target="_blank">See Source
              <img class="outlinks" src="./assets/images/github-white.svg" alt="project-image" /></a>
          </li>
        </ul>
      </div>
  </div>`;
  popupSection.style.display = 'block';
  popupSection.querySelectorAll('.close-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('.popups').style.display = 'none';
    });
  });
};

const projectButtons = document.querySelectorAll('.project-button');
projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', (e) => {
    const index = e.target.id.split('_')[1];
    displayPopup(modalData[index]);
  });
});
