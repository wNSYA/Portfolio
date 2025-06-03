const projects = [
  {
    title: "Quiz Website",
    description: "A simple quiz website with various method.",
    link: "https://github.com/wNSYA/spelbad"
  },
  {
    title: "Mikael vs Lalapan",
    description: "a CLI-based app inspired by Plants vs. Zombies ",
    link: "https://github.com/farahaulia115/Tugas-Besar-OOP-G2"
  },
  {
    title: "Peppered Moth Evolution",
    description: "a simple Peppered Moth Natural Selection simulation using streamlit",
    link: "https://peppered-moth-evolution-kdskel7.streamlit.app/"
  },
  {
    title: "Machine Learning Implementation",
    description: "a Machine learning that used Data processing, KNN and Naive bayes to predict fraud website",
    link: "https://github.com/wNSYA/Tugas-Besar-2-IF3070-Implementasi-Algoritma-Pembelajaran-Mesin"
  },
  {
    title: "Wayang Wave",
    description: "a CLI-based app that use C language with various data structure",
    link: "https://github.com/IrfanMusthofa/Tugas-Besar-Algoritma-dan-Struktur-Data-STI"
  },
  {
    title: "Mobile Quiz App",
    description: "Mobile Quiz Application created Using react native",
    link: "https://github.com/natanael-ss/Virtual-Lab-Mobile"
  },  
];

const skills = [
  {
    name: "HTML",
    image: "assets/html.png"
  },
  {
    name: "CSS",
    image: "assets/css.png"
  },
  {
    name: "JavaScript",
    image: "assets/javascript.png"
  },
  {
    name: "React",
    image: "assets/react.png"
  },
    {
    name: "Python",
    image: "assets/python.png"
  },
    {
    name: "Java",
    image: "assets/java.png"
  },
  {
    name: "TypeScript",
    image: "assets/typescript.png"
  },
  {
    name: "C",
    image: "assets/c.png"
  },
  {
    name: "Go",
    image: "assets/go.png"
  },
  {
    name: "php",
    image: "assets/php.png"
  },
  {
    name: "CodeIgniter",
    image: "assets/codeigniter.png"
  },
  {
    name: "PostgreSQL",
    image: "assets/postgresql.png"
  },
  {
    name: "MySQL",
    image: "assets/mysql.png"
  },
  {
    name: "Jupyter",
    image: "assets/jupyter.png"
  },
  {
    name: "Node.js",
    image: "assets/nodejs.png"
  },
  {
    name: "Express.js",
    image: "assets/expressjs.png"
  },
  {
    name: "Docker",
    image: "assets/docker.png"
  },
];


// Render Projects
const projectList = document.getElementById('projectList');
projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(div);
});

// Render Skills
const skillList = document.getElementById('skillList');
skills.forEach(skill => {
  const li = document.createElement('li');
  li.className = 'skill-item';
  li.innerHTML = `
    <img src="${skill.image}" alt="${skill.name}" />
    <span>${skill.name}</span>
  `;
  skillList.appendChild(li);
});

