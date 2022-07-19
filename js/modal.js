const projectData = [
  {
    snapshot: '../assets/images/mobile-project-image.png',
    projectName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum, sequi esse, sapiente pariatur quos sit nisi totam maxime tempore delectus nostrum commodi iure doloribus at doloremque eligendi ullam incidunt',
  },
  {
    snapshot: '../assets/images/mobile-project-image.png',
    projectName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum, sequi esse, sapiente pariatur quos sit nisi totam maxime tempore delectus nostrum commodi iure doloribus at doloremque eligendi ullam incidunt',
  },
  {
    snapshot: '../assets/images/mobile-project-image.png',
    projectName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum, sequi esse, sapiente pariatur quos sit nisi totam maxime tempore delectus nostrum commodi iure doloribus at doloremque eligendi ullam incidunt',
  },
  {
    snapshot: '../assets/images/mobile-project-image.png',
    projectName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum, sequi esse, sapiente pariatur quos sit nisi totam maxime tempore delectus nostrum commodi iure doloribus at doloremque eligendi ullam incidunt',
  },
  {
    snapshot: '../assets/images/mobile-project-image.png',
    projectName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum, sequi esse, sapiente pariatur quos sit nisi totam maxime tempore delectus nostrum commodi iure doloribus at doloremque eligendi ullam incidunt',
  },
  {
    snapshot: '../assets/images/mobile-project-image.png',
    projectName: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'JavaScript', 'CSS', 'HTML'],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum, sequi esse, sapiente pariatur quos sit nisi totam maxime tempore delectus nostrum commodi iure doloribus at doloremque eligendi ullam incidunt',
  },
];

document.querySelector('.modals').innerHTML = projectDatas.map(
    (data) => `
  <div class="modal">
  <div class="modal-container"> 
    <div class="modal-title">
  <h2 class="project-title">${data.name}</h2>
    <div class="close">
  <i class="fa fa-times fa-1x"></i>
    </div>
  </div>
    <ul class="project-author">
      <li>${data.author}</li>
      <li>${data.stack}</li>
      <li>${data.year}</li>
    </ul>
    <div class="project-img">
      <img
        src= ${data.featuredImage}
        class="snapshoot"
        alt="Tonic project image"
      />
    </div>
    <div class="modal-description">
      <p class="project-text"
        >${data.description}</p
      >
      <div class="modal-tools">
        <ul class="project-tools">
          <li>${data.technologies[0]}</li>
          <li>${data.technologies[1]}</li>
          <li>${data.technologies[2]}</li>
        </ul>
        <div class="buttons">
          <a href="${data.liveVersion}" class="modal-button">See Live</a>
          <a href="${data.source}" class="modal-button">See Source</a>
        </div>
      </div>
    </div>
    </div>
    </div>`,
  );