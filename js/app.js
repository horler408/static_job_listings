/*Parameters
description — A search term, such as "ruby" or "java". This parameter is aliased to search.
location — A city name, zip code, or other location search term.
lat — A specific latitude. If used, you must also send long and must not send location.
long — A specific longitude. If used, you must also send lat and must not send location.
full_time — If you want to limit results to full time positions set this parameter to 'true'.
page=1👍
*/

const jobs = [
  {
    id: 0,
    company: "Photosnap",
    img: "../assets/photosnap.svg",
    new: "New!",
    feature: "Featured",
    title: "Senior Frontend Developer",
    created_at: "1d ago",
    type: "Part Time",
    location: "Remote",
    role: "Frontend",
    level: "Senior",
    languages: ["HTML", "CSS", "Javascript"],
    tools: ["React", "Sass"]
  },
  {
    id: 1,
    company: "Manage", 
    img: "../assets/photosnap.svg",
    new: "New!",
    feature: "Featured",
    title: "Fullstack Developer",
    created_at: "1d ago",
    type: "Part Time",
    location: "Remote",
    role: "Fullstack",
    level: "Midweight",
    languages: ["Python"],
    tools: "React"
  },
  {
    id: 2,
    company: "Account", 
    img: "../assets/photosnap.svg",
    new: "New!",
    feature: "",
    title: "Junior Frontend Developer",
    created_at: "2d ago",
    type: "Part Time",
    location: "USA only",
    role: "Frontend",
    level: "Junior",
    languages: ["Javascript"],
    tools: ["React", "Sass"]
  },
  {
    id: 3,
    company: "MyHome",
    img: "../assets/photosnap.svg",
    new: "",
    feature: "",
    title: "Junior Frontend Developer",
    created_at: "5d ago",
    type: "Contract",
    location: "USA only",
    role: "Frontend",
    level: "Junior",
    languages: ["CSS","Javascript"],
    tools: []
  },
  {
    id: 4,
    company: "Loop Studios", 
    img: "../assets/photosnap.svg",
    new: "",
    feature: "",
    title: "Software Engineer",
    created_at: "1w ago",
    type: "Full Time",
    location: "Worldwide",
    role: "Fullstack",
    level: "Midweight",
    languages: ["Javascript", "Ruby"],
    tools: ["Sass"]
  },
  {
    id: 5,
    company: "FaceIt", 
    img: "../assets/photosnap.svg",
    new: "",
    feature: "",
    title: "Junior Backend Developer",
    created_at: "2w ago",
    type: "Full Time",
    location: "UK only",
    role: "Backend",
    level: "Junior",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 6,
    company: "Shortly", 
    img: "../assets/photosnap.svg",
    new: "",
    feature: "",
    title: "Junior Developer",
    created_at: "2w ago",
    type: "Full Time",
    location: "Worldwide",
    role: "Frontend",
    level: "Junior",
    languages: ["HTML", "Javascript"],
    tools: ["Sass"]
  },
  {
    id: 7,
    company: "Insure",
    img: "../assets/photosnap.svg", 
    new: "",
    feature: "",
    title: "Junior Frontend Developer",
    created_at: "2w ago",
    type: "Full Time",
    location: "USA only",
    role: "Frontend",
    level: "Junior",
    languages: ["Javascript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 8,
    company: "Eyecam Co.",
    img: "../assets/photosnap.svg", 
    new: "",
    feature: "",
    title: "Full Stack Engineer",
    created_at: "3w ago",
    type: "Full Time",
    location: "Worldwide",
    role: "Fullstack",
    level: "Midweight",
    languages: ["Javascript", "Python"],
    tools: ["Django"]
  },
  {
    id: 9,
    company: "The Air Filter Company",
    img: "../assets/photosnap.svg", 
    new: "",
    feature: "",
    title: "Front-end Dev",
    created_at: "1mo ago",
    type: "Part Time",
    location: "Worldwide",
    role: "Frontend",
    level: "Junior",
    languages: ["Javascript"],
    tools: ["React", "Sass"]
  },
]

//Accessing DOM
const count = document.querySelector('.count')
const cardContainer = document.querySelector('.main__cards');
const preloader = document.querySelector('.preloader')

const displayItems = () => {
  let jobCards = jobs.map(job => {
    return `<article class="card-item">
      <img src=${job.img} alt="Company Logo" class="card-logo">
      <div class="left-details">
        <div class="top"><span class="company-name">${job.company}</span><span class="new">New!</span><span class="featured">Featured</span></div>
        <div class="middle">${job.title}</div>
        <div class="bottom"><span class="time">${job.created_at} </span><span class="type">. ${job.type} </span><span class="location">. ${job.location}</span></div>
      </div>
      <div class="right-details">
        <div class="role">${job.role}</div>
        <div class="level">${job.level}</div>
        <div class="languages"><span class="lang">${job.languages}</span></div>
      </div>
    </article>`
  })
  jobCards = jobCards.join("")
  cardContainer.innerHTML = jobCards
}

displayItems()

// Preloader
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});