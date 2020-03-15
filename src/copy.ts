import {
  Art,
  Temple,
  linkedin,
  github,
  mail,
  resume,
  Canoo,
  hk1,
  hk2,
  hk3,
  hk4,
  hk5,
  hk6
} from "static";

const landing = {
  pages: 3,
  sections: [
    {
      header: "Experience",
      redirect: "experience",
      image: Canoo,
      text: "werk."
    },
    {
      header: "Travel",
      redirect: "travel",
      image: Temple,
      text:
        "The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from — back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."
    },
    {
      header: "Art",
      redirect: "art",
      image: Art,
      text:
        "Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."
    }
  ]
};

const experiencesList = [
  {
    title: "Canoo",
    desc: ["Software Tools and Automation", "Torrance, California"],
    img: Canoo,
    details: [
      "Increased productivity by creating software release management tool with React, Typescript, Python, and Flask to monitor and control builds for 10+ vehicle components.",
      "Sped up software release generation by 2x with asyncio in Python 3",
      "Enhanced code quality and coverage by adding linter, unit tests in Jenkins CI/CD pipelines for all software tools"
    ]
  },
  {
    title: "Hack the North",
    desc: ["Frontend Developer", "Waterloo, Ontario"],
    img: Temple,
    details: [
      "Created delightful web experiences with React, Typescript, and Styled Components for one of the world’s largest hackathons, with more than 30k unique visitors and 3M requests per month",
      "Improved maintainability and customizability by creating a themeable React component library for all Hack the North projects"
    ]
  }
];

const links = [
  {
    name: "linkedin",
    img: linkedin,
    link: "https://www.linkedin.com/in/jason-hong/"
  },
  {
    name: "github",
    img: github,
    link: "https://github.com/Jhong098"
  },
  {
    name: "email",
    img: mail,
    link: "mailto:jhong098@gmail.com"
  },
  {
    name: "resume",
    img: resume,
    link: ""
  }
];

const travel = [
  {
    img: hk1,
    desc: "Hong Kong, 2016"
  },
  {
    img: hk2,
    desc: "Hong Kong, 2016"
  },
  {
    img: hk3,
    desc: "Hong Kong, 2016"
  },
  {
    img: hk4,
    desc: "Hong Kong, 2016"
  },
  {
    img: hk5,
    desc: "Hong Kong, 2016"
  },
  {
    img: hk6,
    desc: "Hong Kong, 2016"
  }
];

const footer = {
  text: "Built with ☕+💗"
};

export { landing, links, footer, experiencesList, travel };
