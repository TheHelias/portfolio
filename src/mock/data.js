import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'ThElias',
  lang: 'en',
  description: 'ThElias personal website'
}

// HERO DATA
export const heroData = {
  title: 'Hey there, I am',
  name: 'Toluwalase Elias Akande',
  subtitle: 'This is where you get a glimpse of my professional life',
  cta: 'Who Am I?'
}

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `
    I am a Fullstack developer with over three years of quality experience building software and creating software
     solutions. `,
  paragraphTwo: `I consistently use React and some of it's frameworks like Next and Gatsby for frontend development and NodeJs with express for 
  backend development(building APIs). I constantly use various databases like MongoDB, Postgresql, and Firestore.  I am good with
   agile method of software development with good experience using Trello and pivotal tracker amongst
    others.`,
  paragraphThree: `I am also highly skilled in the use of tools like GitHub for version control and
  Circle CI, GitHub actions for continuous integration. I have good knowledge and experience using Netlify and Heroku for deploying applications. Of course, I use 
  many other tools asides the aforementioned which can't be contained here and I easily pick up new ones daily. I enjoy creating, learning and
   always love a good challenge.`,
  paragraphFour: `In terms of work experience, it started in 2017 when I co-founded a peer-to-peer learning community where
   I functioned as a hands-on tutor. From there, I went on to working various freelance and contract jobs with the notable one being
   Servicemart - a startup where I worked as a Fullstack Developer in a team of 3 to build their service listing and hiring platform. Later on, I went on to work at EpowerNg - 
   a Web and App agency where I functioned as the Frontend Developer for 9 months. I worked on 
   many interesting projects there with the most notable ones being; building the frontend of a client's
   accounting,  inventory & customer loyalty platform using React and building the company's current 
   website using NextJs. I currently work freelance and I am very open to full time opportunities.`,
  resume: 'https://drive.google.com/folderview?id=1ineTWoZuET578hGs-tqaqoayoboyKM_n'
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio' // if no repo, the button will not show up
  }
]

// CONTACT DATA
export const contactData = {
  cta: 'Wanna work with me or just have a chat? Great!',
  btn: '',
  email: 'akandetoluwalase@gmail.com'
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_ThElias'
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/Tholhue'
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/toluwalase-akande'
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TheHelias'
    }
  ]
}

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false // set to false to disable the GitHub stars/fork buttons
}
