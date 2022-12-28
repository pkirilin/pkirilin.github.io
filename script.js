const viewProjectsButton = document.getElementById('view-projects-button');

viewProjectsButton.addEventListener('click', () => {
  const section = document.getElementById('personal-projects-section');
  section.scrollIntoView({ behavior: 'smooth' });
  viewProjectsButton.blur();
});
