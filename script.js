const output = document.getElementById('output');
const input = document.getElementById('command-input');
const checkbox = document.getElementById('checkbox');
const version = document.querySelector('meta[name="version"]').getAttribute('content');

const asciiArt = `
    _          _                _ _       ____             
   / \\   _ __ (_)_ __ _   _  __| | |__   |  _ \\ ___  _   _ 
  / _ \\ | '_ \\| | '__| | | |/ _\` | '_ \\  | |_) / _ \\| | | |
 / ___ \\| | | | | |  | |_| | (_| | | | | |  _ < (_) | |_| |
/_/   \\_\\_| |_|_|_|   \\__,_|\\__,_|_| |_| |_| \\_\\___/ \\__, |
                                                     |___/ 
    `;

function addToOutput(text) {
    const div = document.createElement('div');
    if (text.startsWith('anirudh@portfolio:$ ~')) {
        div.innerHTML = '<span class="prompt-name">anirudh</span><span class="prompt-at">@</span><span class="prompt-location">portfolio</span><span class="prompt-colon">:</span><span class="prompt-path">$</span><span class="prompt-tilde"> ~</span>' + text.slice('anirudh@portfolio:$ ~'.length);
    } else {
        div.innerHTML = text;
    }
    output.appendChild(div);
    window.scrollTo(0, document.body.scrollHeight);
}

function clearOutput() {
    output.innerHTML = '';
}

function typeEffect(element, text, speed = 50) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


//Save dark mode preference when changing
function Theme() {}{
    if (this.checked) {
        document.bnody.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
}

const commands = {
    help: () => {
        addToOutput('Available commands:');
        addToOutput('  help     - Show this help message');
        addToOutput('  about    - Display information about me');
        addToOutput('  projects - List my projects');
        addToOutput('  skills   - Show my technical skills');
        addToOutput('  contact  - Display my contact information');
        addToOutput('  resume   - Download my resume');
        addToOutput('  cd gui   - Change to GUI version of site');
        addToOutput('  clear    - Clear the terminal screen');
        addToOutput('  history  - Show command history');
    },
    about: () => {
        addToOutput('About Me:');
        addToOutput(`Recent graduate with a degree in Mathematics, Statistics, and Computer Science, eager to apply strong 
analytical and technical skills to business analysis. Passionate utilising data-driven insights to drive 
innovation and committed to continuous learning and professional growth.Seeking entry level roles in 
software development, finance/business analysis or data analytics.`);
    },
    projects: () => {
        addToOutput('My Projects:');
        addToOutput(`> This Terminal Profile Website`);
        addToOutput(`   <a href="https://github.com/royanirudd/PortfolioTerminalWebsite" target="_blank" class="project-link">GitHub</a>`);
        addToOutput('> Mock Travel Booking Website');
        addToOutput(`   <a href="https://github.com/royanirudd/travelSite" target="_blank" class="project-link">GitHub</a>`);
        addToOutput('> Collection of DataScience projects');
        addToOutput(`   <a href="
https://github.com/royanirudd/DataScienceProjects" target="_blank">GitHub</a>`);
        addToOutput(`> Idle game on Godot`);
        addToOutput(`   <a href="
https://github.com/royanirudd/IdleGame" target="_blank">GitHub</a>`);
        addToOutput(`> Contact Management CRUD application`);
        addToOutput(`   <a href="https://github.com/royanirudd/Task2CRUD" target="_blank">GitHub</a>`);

    },
    skills: () => {
        addToOutput('Technical Skills:');
        addToOutput('- Programming Languages: JavaScript, Python, Java, C');
        addToOutput('- Web Technologies: HTML, CSS, React, Node.js');
        addToOutput('- Databases: MySQL, MongoDB, MS SQL Server');
        addToOutput('- Tools: Git, Docker, AWS');
    },
    contact: () => {
        addToOutput('Contact Information:');
        addToOutput('Email: <span class="contactLink">aniruddroy704@gmail.com</span>');
        addToOutput('LinkedIn: <a href="https://www.linkedin.com/in/anirudh-roy1" target="_blank">linkedin.com/in/anirudh-roy1</a>');
        addToOutput('GitHub: <a href="https://github.com/royanirudd" target="_blank">royanirudh</a>');
        addToOutput('Mobile: <span class="contactLink">+91 8050581848</span>');
    },
    resume: () => {
        addToOutput('Downloading resume...');
        window.open('https://drive.google.com/file/d/1KeIRrQYfUFTIZHS55qTpnjJFwBgFNXZM/view?usp=sharing', '_blank');
    },
    clear: () => {
        clearOutput();
    },
    history: () => {
        addToOutput('Command history:');
        commandHistory.slice().reverse().forEach((cmd, index) => {
            addToOutput(`${commandHistory.length - index}: ${cmd}`);
        });
    },
    'cd gui': () => {
        addToOutput('Switching to GUI mode...');
        setTimeout(()=>{
            window.location.href = 'indexGUI.html';
        }, 1000);
    },
    version: () => {
        addToOutput(`Anirudh Roy Portfolio Terminal v${version}`);
    }
};

addToOutput(asciiArt);
const welcomeDiv = document.createElement('div');
output.appendChild(welcomeDiv);
typeEffect(welcomeDiv, 'Welcome to my portfolio! Type "help" for a list of commands.');

let commandHistory = [];
let historyIndex = -1;

function autocomplete(input) {
    const commandNames = Object.keys(commands);
    const matchingCommands = commandNames.filter(cmd => cmd.startsWith(input));
    
    if (matchingCommands.length === 1) {
        return matchingCommands[0];
    } else if (matchingCommands.length > 1) {
        addToOutput(matchingCommands.join('  '));
        return input;
    }
    
    return input;
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        input.value = autocomplete(input.value);
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex > -1) {
            historyIndex--;
            input.value = historyIndex >= 0 ? commandHistory[historyIndex] : '';
        }
    }
});

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        addToOutput('anirudh@portfolio:$ ~ ' + input.value);
        
        if (command !== '') {
            commandHistory.unshift(command);
            historyIndex = -1;
        }
        
        input.value = '';

        if (command in commands) {
            commands[command]();
        } else {
            addToOutput('Command not recognized. Type "help" for a list of commands.');
        }
    }
});

// Theme switch functionality
checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.replace('dark-mode', 'light-mode');
    } else {
        document.body.classList.replace('light-mode', 'dark-mode');
    }
});

window.addEventListener('load', ()=> {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        document.body.className = savedTheme;
        document.getElementById('checkbox').checked = savedTheme ==='light-mode';
    }
});
