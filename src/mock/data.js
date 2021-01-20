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
  I am a Full-stack engineer with over two years of quality experience building web applications. `,
  paragraphTwo: `I consistently use React and some of its frameworks like Next and Gatsby for frontend
   development and NodeJs with express for backend development. I constantly use various databases like
    MongoDB, Postgresql, and Firestore. I am good with the agile method of software development with
     good experience using Trello and pivotal tracker amongst others.`,
  paragraphThree: `I am also a big fan of testing and collaborating using version control tools.
   I have good knowledge and experience using Netlify, Vercel, and Heroku amongst others for
    deploying applications. Of course, I use many other tools asides from the aforementioned
     which can't be contained here and I easily pick up new ones daily. I enjoy
      creating, learning and always love a good challenge.`,
  paragraphFour: `In terms of work experience, it started in 2017 when I co-founded 
  a peer-to-peer learning community where I functioned as a hands-on tutor. From there, 
  I went on to working various freelance and contract jobs with the notable one being Servicemart 
  - a startup where I worked as a Fullstack Developer in a team of 3 to build their service
   listing and hiring platform. Later on, I went on to work at EpowerNg - a Web and App agency
    where I functioned as the Frontend Developer for 9 months. I worked on many challenging and
     interesting projects there with the company’s clients. I currently work freelance and 
     I am very open to full-time opportunities.`,
  resume: 'https://drive.google.com/folderview?id=1ineTWoZuET578hGs-tqaqoayoboyKM_n'
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_tp.png',
    title: 'Modern Brand Website',
    info: 'A modern brand website built using React and Chakra UI',
    info2: '',
    url: 'https://sleepy-fermi-4f2686.netlify.app/'
  },
  {
    id: nanoid(),
    img: 'project_ma.png',
    title: 'Filmmaking Portfolio Website and Blog',
    info: 'A filmmaking portfolio website and blog built using React, Gatsby, Bulma etc',
    info2: 'Check out the source code for more info',
    url: 'https://martiniakande.com/',
    repo: 'https://github.com/TheHelias/signor-martini-portfolio'
  },
  {
    id: nanoid(),
    img: 'project_pc.png',
    title: 'Promise Cup Website',
    info: 'A brand website built using Wordpress, CSS and jQuery',
    info2: '',
    url: 'https://promisecup.com/'
  },
  {
    id: nanoid(),
    img: 'project_tc.png',
    title: 'An event registering platform',
    info: 'A simple CRUD app demonstrating CRUD.',
    info2: 'Built using NodeJs(Express) and React',
    url: 'https://talk-conference-app.herokuapp.com/',
    repo: 'https://github.com/TheHelias/conference-talk-app'
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
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.link/mossy5'
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:akandetoluwalase@gmail.com'
    }
  ]
}

export const githubButtons = {
  isEnabled: false
}
