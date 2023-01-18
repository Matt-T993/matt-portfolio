import githubLogo from "./Images/skillsLogo/github-logo.png";
import bootstrapLogo from "./Images/skillsLogo/bootstrap-logo.png";
import cssLogo from "./Images/skillsLogo/css3-logo.png";
import htmlLogo from "./Images/skillsLogo/html5-logo.png";
import jsLogo from "./Images/skillsLogo/javascript-logo.png";
import mongodbLogo from "./Images/skillsLogo/mongodb-logo.png";
import nodejsLogo from "./Images/skillsLogo/nodejs-logo.png";
import reactLogo from "./Images/skillsLogo/react-logo.png";
import reduxLogo from "./Images/skillsLogo/redux-logo.png";
import profile from "./Images/matt.jpg";

const data = {
  //   Header Details
  name: "Matthew Theseira",
  title: "Front End Developer",
  headerTagline1: "FrontEnd Developer",
  headerTagline2: "Eager to improve and learn",
  headerTagline3: "Building solutions",

  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "matthew.theseira@gmail.com",

  // Work Section
  projects: [
    {
      title: "Project One",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",

      url: "http://chetanverma.com/",
    },
    {
      title: "Project Two",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",

      url: "http://chetanverma.com/",
    },
    {
      title: "Project Three",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",

      url: "http://chetanverma.com/",
    },
    {
      title: "Project Four",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",

      url: "http://chetanverma.com/",
    },
    {
      title: "Project Five",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",

      url: "http://chetanverma.com/",
    },
    {
      title: "Project Six",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here

      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",

      url: "http://chetanverma.com/",
    },
  ],

  // End Work Section

  // About Secton
  aboutParaOne: "Hello, I'm a Frontend developer based in sydney, Australia",
  aboutParaTwo:
    "I am result-oriented individual who enjoys building and solving solutions as it gives me thrill of achnieving a goal.      ",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: profile,

  //   End About Section

  // Skills Section

  fSkills: [
    {
      img: htmlLogo,
      text: "HTML5",
    },
    {
      img: cssLogo,
      text: "CSS3",
    },
    {
      img: jsLogo,
      text: "JavaScript",
    },
    {
      img: reactLogo,
      text: "React",
    },
    {
      img: reduxLogo,
      text: "Redux",
    },
    {
      img: bootstrapLogo,
      text: "Bootstrap",
    },
  ],

  bSkills: [
    {
      img: mongodbLogo,
      text: "Mongodb",
    },
    {
      img: nodejsLogo,
      text: "Node",
    },
  ],

  otherSkills: [
    {
      img: githubLogo,
      text: "Github",
    },
  ],

  // End Skills Section

  //   Contact Section

  // contactSubHeading: "Let's create your next experience togethe",
  social: [
    //github
    { img: githubLogo, url: "https://github.com/Matt-T993" },
  ],
};

export default data;
