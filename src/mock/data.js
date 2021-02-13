import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'ThElias',
  lang: 'en',
  description: 'ThElias personal website'
}

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m',
  name: 'Elias Akande',
  subtitle: 'I am a Full-stack Engineer',
  aboutCta: 'Details?',
  portfolioCta: 'Portfolio?'
}

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `
  I am a Full-stack engineer with 3 years of professional experience in the software industry. `,
  paragraphTwo: `I use React and its frameworks like Next and Gatsby for frontend development
   and NodeJs with express for backend development. Most of the time I work with databases like
    MongoDB, MySQL, and, Postgresql. I am a big fan of writing tests which I achieve using Mocha,
     Chai, and Jest with automated testing using Circle CI or GitHub actions.`,
  paragraphThree: `I collaborate often with other developers and teams using git for version 
  control and collaboration tools like Trello, Jira, and pivotal tracker amongst others. I am 
  currently fascinated with AWS and its endless possibilities which I am exploring. You can
   check out my resume just below this section to see more about my skillset and background.
    Also, you can find links to my LinkedIn and GitHub in the footer of this page.`,
  paragraphFour: `I have worked with various companies and individuals on both contract
   and full-time roles. Most recently, I worked full-time at EpowerNG; a web and app agency 
   as a Frontend Engineer for about 9 months. Throughout my time there, I was able to work 
   on many challenging and interesting projects where I built the frontend of web applications
    and integrated them with APIs as needed. Before that, I worked as a full-stack engineer at
     ServiceMart; a startup for a service listing platform. I also co-founded PioCode; a 
     peer-to-peer learning community for budding developers from non-tech backgrounds. 
      I currently work freelance but I am open to full-time opportunities. You can check 
      out more about my work experience and history in my resume below or check out my 
      LinkedIn for something more comprehensive.`,
  resume: 'https://drive.google.com/folderview?id=1ineTWoZuET578hGs-tqaqoayoboyKM_n'
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_tp.png',
    title: 'Modern Brand Website',
    info: 'A modern brand website for a private security company built using React and Chakra UI',
    info2: '',
    url: 'https://topprivatesecurity.com/'
  },
  {
    id: nanoid(),
    img: 'project_ma.png',
    title: 'Filmmaking Portfolio Website and Blog',
    info: 'A filmmaking portfolio website and blog built using Gatsby, Netlify CMS, Bulma, SASS etc',
    info2: 'Check out the source code for more info',
    url: 'https://martiniakande.com/',
    repo: 'https://github.com/TheHelias/signor-martini-portfolio'
  },
  {
    id: nanoid(),
    img: 'project_pc.png',
    title: 'Promise Cup Website',
    info: 'A brand website for a company focused on improving the health of women',
    info2: '',
    url: 'https://promisecup.com/'
  },
  {
    id: nanoid(),
    img: 'project_sm.png',
    title: 'A service listing and hiring platform',
    info: 'Built using NodeJs(Express) and Postgresql ',
    info2: '',
    repo: 'https://github.com/TheHelias/service_mart_api'
  },
  {
    id: nanoid(),
    img: 'project_tc.png',
    title: 'An event registering platform',
    info: 'A simple app for an event listing platform. ',
    info2: 'Built using NodeJs(Express), MongoDB and React',
    url: 'https://talk-conference-app.herokuapp.com/',
    repo: 'https://github.com/TheHelias/conference-talk-app'
  }
]

// CONTACT DATA
export const contactData = {
  cta: 'Wanna work with me or just have a chat? Great!',
  btn: 'Let\'s Talk',
  link: 'https://wa.me/+2348166746401'
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
      url: 'https://wa.me/+2348166746401'
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
