function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}



async function fetchGitHubProjects() {
const username = 'royanirudd'; 
const url = `https://api.github.com/users/${username}/repos?sort=created&per_page=6`;

try {
    const response = await fetch(url);
    const repos = await response.json();

    const projects = document.querySelectorAll('.project-article');

    repos.forEach((repo, index) => {
	if (index < projects.length) {
	    const descriptionElement = projects[index].querySelector('.project-description p');
	    const buttonElement = projects[index].querySelector('.project-description button');

	    descriptionElement.textContent = repo.description || 'No description available';
	    buttonElement.onclick = () => window.open(repo.html_url, '_blank');
	}
    });
} catch (error) {
    console.error('Error fetching GitHub projects:', error);
}
}

// Call the function when the document is fully loaded
//document.addEventListener('DOMContentLoaded', fetchGitHubProjects);



