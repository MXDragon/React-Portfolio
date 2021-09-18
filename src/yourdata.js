// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Bryan Bentz",
  headerTagline: [
    //Line 1 For Header
    "Your Full Stack Needs",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "I want to make websites FOR YOU!",

  //Contact Email
  contactEmail: "bentzbry@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Covid-19 Data", //Project Title - Add Your Project Title Here
      para:
        "Pulls data globally and regionally, has map showing location", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/Global-Regional-Covid.png",
      //Project URL - Add Your Project Url Here
      url: "https://mxdragon.github.io/Covid19Risk-VaccineAssessment/",
    },
    {
      title: "weather dash", //Project Title - Add Your Project Title Here
      para:
        "A neat little weather dashboard tool", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/weatherDash.JPG",
      //Project URL - Add Your Project Url Here
      url: "https://mxdragon.github.io/Weather-Dashboard/",
    },
    {
      title: "Password Generator", //Project Title - Add Your Project Title Here
      para:
        "Password Generator", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/passGen.JPG",
      //Project URL - Add Your Project Url Here
      url: "https://mxdragon.github.io/Password-Generator/",
    },
    {
      title: "Note-Taker", //Project Title - Add Your Project Title Here
      para:
        "Note-Taker", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/note-taker.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://shrouded-hamlet-72405.herokuapp.com/",
    },
    {
      title: "Employee Tracker", //Project Title - Add Your Project Title Here
      para:
        "A node.js app to manage employees", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/EmployeeTracker.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/MXDragon/EmployeeTracker",
    },
    {
      title: "Project Development Kickstarter", //Project Title - Add Your Project Title Here
      para:
        "React.js Project for Kickstarter", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "./images/devLancer.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Curtisaurus/project-dev-lance",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My first coding experience was with my dad building a C# Mega Man Battle App when I was 8 years old",
  aboutParaTwo:
    "I continued to learn coding throughout high school and college.",
  aboutParaThree:
    "I now want to make websites for you!",
  aboutImage:
    "/images/chess_bio.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "React.js",
    },
    {
      img: cssIcon,
      para:
        "Node.js, Handlebars.js",
    },
    {
      img: jsIcon,
      para:
        "javascript",
    },
    {
      img: reactIcon,
      para:
        "Linux",
    },
    {
      img: designIcon,
      para:
        "SysAdmin",
    },
    {
      img: codeIcon,
      para:
        "Coder",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Let me make websites for you!",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/MXDragon" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/bryanbentz/",
    },
  ],

  // End Contact Section ---------------
}

