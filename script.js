let jobs = [
  {
    id: 1,
    company: "Atherin",
    position: "Frontend Dev",
    location: "Dhaka",
    type: "Full-time",
    salary: "60k",
    description:
      "Develop and maintain responsive user interfaces using React and Tailwind CSS. Collaborate closely with backend developers and UI/UX designers to implement scalable features. Optimize performance, ensure cross-browser compatibility, and improve overall user experience.",
    status: ""
  },

  {
    id: 2,
    company: "Fixensy",
    position: "Data Annotator",
    location: "Rajshahi",
    type: "On-site",
    salary: "25k",
    description:
      "Accurately label and categorize large datasets for machine learning models. Review and validate annotated data to ensure high-quality standards. Work with AI teams to improve data accuracy and support model training processes.",
    status: ""
  },

  {
    id: 3,
    company: "CloudCraft",
    position: "Backend Dev",
    location: "Remote",
    type: "Full-time",
    salary: "$1200",
    description:
      "Design and develop secure RESTful APIs using Node.js and Express. Manage databases, authentication systems, and server-side logic. Ensure scalability, data integrity, and optimized performance for cloud-based applications.",
    status: ""
  },

  {
    id: 4,
    company: "PixelMint",
    position: "UI Designer",
    location: "Dhaka",
    type: "Full-time",
    salary: "50k",
    description:
      "Create modern and user-friendly interface designs using Figma and Adobe XD. Conduct user research and implement design systems to maintain brand consistency. Work closely with developers to ensure pixel-perfect implementation.",
    status: ""
  },

  {
    id: 5,
    company: "BrightPay",
    position: "Android Dev",
    location: "Remote",
    type: "Contract",
    salary: "$900",
    description:
      "Develop and maintain Android applications using Java and Firebase. Implement authentication, real-time database integration, and push notifications. Ensure clean architecture, bug fixing, and performance optimization.",
    status: ""
  },

  {
    id: 6,
    company: "SecureNest",
    position: "Security Analyst",
    location: "Chattogram",
    type: "Full-time",
    salary: "45k",
    description:
      "Monitor network traffic and identify potential security threats. Conduct vulnerability assessments and implement security protocols. Prepare reports and collaborate with IT teams to strengthen cybersecurity measures.",
    status: ""
  },

  {
    id: 7,
    company: "NeuronPub",
    position: "QA Engineer",
    location: "Remote",
    type: "Part-time",
    salary: "700$",
    description:
      "Perform manual and automated testing for web and mobile applications. Identify bugs, document test cases, and ensure product quality before release. Work closely with developers to improve reliability and user satisfaction.",
    status: ""
  },

  {
    id: 8,
    company: "Sonar Bangla Tour",
    position: "WordPress Dev",
    location: "Khulna",
    type: "Contract",
    salary: "35k",
    description:
      "Develop and maintain WordPress websites with custom themes and plugins. Optimize website speed, improve SEO structure, and ensure mobile responsiveness. Manage hosting, backups, and security configurations.",
    status: ""
  }
];




let currentTab = "all";

function changeTab(tab) {
  currentTab = tab;

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("tab-active", "btn-primary");
  });

  if (tab === "all") {
    tabAll.classList.add("tab-active", "btn-primary");
  }

  if (tab === "Interview") {
    tabInterview.classList.add("tab-active", "btn-primary");
  }

  if (tab === "Rejected") {
    tabRejected.classList.add("tab-active", "btn-primary");
  }

  loadJobs();
}


function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  if (job) {
    job.status = status;
  }
  
  changeTab(currentTab); 
}


// delet function logic
function deleteJob(id) {
  jobs = jobs.filter(job => job.id !== id);
  loadJobs();
}


function loadJobs() {

  let filteredJobs = [];

  if (currentTab === "all") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter(job => job.status === currentTab);
  }

  tabCount.innerText = filteredJobs.length;

  if (filteredJobs.length === 0) {
    jobList.innerHTML = `
      <div class="text-center py-16 px-10 bg-white rounded-3xl mb-14">
        <div class="text-5xl mb-3 items-center justify-center flex">
          <img class="w-16" src="img/jobs.png" alt="">
        </div>
        <h3 class="font-bold">No jobs Available</h3>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
    updateCounts();
    return;
  }


  let jobCard = "";

  for (let i = 0; i < filteredJobs.length; i++) {
    let job = filteredJobs[i];

    let statusBadge = "";

    if (job.status === "Interview") {
      statusBadge = `<span class="badge bg-green-100 p-4 rounded-md">INTERVIEW</span>`;
    } else if (job.status === "Rejected") {
      statusBadge = `<span class="badge bg-red-100 p-4 rounded-md">REJECTED</span>`;
    } else {
      statusBadge = `<span class="badge bg-blue-100 p-4 rounded-md">NOT APPLIED</span>`;
    }

    jobCard += `
      <div class="card bg-white border mb-4">
        <div class="card-body">

          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-bold text-lg">${job.company}</h3>
              <p class="text-sm text-gray-500">${job.position}</p>
              <p class=" text-gray-400 mt-3 mb-3 text-sm">
                ${job.location} • ${job.type} • ${job.salary}
              </p>
            </div>

            <button class="btn btn-sm btn-ghost border-gray-500" onclick="deleteJob(${job.id})">
              <img class="w-4 h-4" src="img/Trash.png" alt="">
            </button>
          </div>

          <div class="mt-3">
            ${statusBadge}
          </div>

          <p class="text-sm mt-3 text-gray-600">
            ${job.description}
          </p>

          <div class="flex gap-3 mt-4">
            <button class="btn btn-sm btn-outline btn-success"
              onclick="setStatus(${job.id}, 'Interview')">
              INTERVIEW
            </button>

            <button class="btn btn-sm btn-outline btn-error"
              onclick="setStatus(${job.id}, 'Rejected')">
              REJECTED
            </button>
          </div>

        </div>
      </div>
    `;
  }

  jobList.innerHTML = jobCard;
  updateCounts();
}


function updateCounts() {
  totalJob.innerText = jobs.length;
  interviewJob.innerText = jobs.filter(j => j.status === "Interview").length;
  rejectedJob.innerText = jobs.filter(j => j.status === "Rejected").length;
}


loadJobs();