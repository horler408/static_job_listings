const jobs = [
  {
    id: 0,
    company: 'Photosnap',
    img: '../assets/photosnap.svg',
    new: 'New!',
    feature: 'Featured',
    title: 'Senior Frontend Developer',
    created_at: '1d ago',
    type: 'Part Time',
    location: 'Remote',
    role: 'Frontend',
    level: 'Senior',
    languages: ['HTML', 'CSS', 'Javascript'],
    tools: ['React', 'Sass']
  },
  {
    id: 1,
    company: 'Manage', 
    img: '../assets/manage.svg',
    new: 'New!',
    feature: 'Featured',
    title: 'Fullstack Developer',
    created_at: '1d ago',
    type: 'Part Time',
    location: 'Remote',
    role: 'Fullstack',
    level: 'Midweight',
    languages: ['Python'],
    tools: 'React'
  },
  {
    id: 2,
    company: "Account", 
    img: "../assets/account.svg",
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
    img: '../assets/myhome.svg',
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
    img: '../assets/loop-studios.svg',
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
    img: '../assets/faceit.svg',
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
    img: '../assets/shortly.svg',
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
    img: '../assets/insure.svg',
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
    img: '../assets/eyecam-co.svg',
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
    img: '../assets/the-air-filter-company.svg',
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
  }
]

// Accessing DOM
const cardContainer = document.querySelector('.main__cards')
const preloader = document.querySelector('.preloader')
const search = document.getElementById('search')

const displayItems = (jobs) => {
  let jobCards = jobs.map(job => {
    return `<article class="card_item">
      <img src=${job.img} alt="Company Logo" class="card-logo">
      <div class="left-details">
        <div class="top">
          <h3 class="company-name">${job.company}</h3></div>
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
  jobCards = jobCards.join('')
  cardContainer.innerHTML = jobCards
}

search.addEventListener('keyup', () => {
  const searchInp = search.value.toLowerCase()
  const name = jobs.filter(job => {
    if (job.location.toLowerCase() === searchInp ||
      job.role.toLowerCase() === searchInp) {
      return job
    }
  })
  if (searchInp === '') {
    displayItems(jobs)
    searchInp.value = ''
  } else {
    displayItems(name)
  }
})

displayItems(jobs)

// Preloader
window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
})
