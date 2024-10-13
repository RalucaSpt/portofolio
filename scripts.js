document.addEventListener('DOMContentLoaded', function() {
    fetch('myprojects.json')
      .then(response => response.json())
      .then(data => {
        const projectGallery = document.getElementById('project-gallery');
  
        data.projects.forEach(project => {
          const projectElement = document.createElement('a');
          projectElement.href = project.link;
          projectElement.setAttribute('alt', project.name);
  
          const projectArticle = `
            <article>
              <h4>${project.name}</h4>
              <img src="${project.picturePath}" alt="${project.name}" style="width:300px; height:auto;">
              <ul>
                ${project.keywords.map(keyword => `<li>${keyword}</li>`).join('')}
              </ul>
            </article>
          `;
  
          projectElement.innerHTML = projectArticle;
          projectGallery.appendChild(projectElement);
        });
      })
      .catch(error => console.error('Error loading project data:', error));
  });
  