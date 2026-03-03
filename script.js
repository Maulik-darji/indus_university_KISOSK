/* ================= CLOCK ================= */

function updateClock(){
    const now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString();

    document.getElementById("date").innerText =
        now.toLocaleDateString(undefined,{
            weekday:'long',
            month:'short',
            day:'numeric'
        });
}

setInterval(updateClock,1000);
updateClock();


/* ================= ELEMENT REFERENCES ================= */

const menuItems = document.querySelectorAll(".menu li");
const pages = document.querySelectorAll(".page");

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");   // Make sure HTML id="overlay"
const hamburger = document.getElementById("hamburger");


/* ================= NAVIGATION FUNCTION ================= */

function navigateTo(pageId){

    if(!pageId) return;

    // Hide all pages
    pages.forEach(p => p.classList.remove("active-page"));

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if(targetPage){
        targetPage.classList.add("active-page");
    }

    // Update sidebar active state
    menuItems.forEach(i => i.classList.remove("active"));
    const activeMenu = document.querySelector(`.menu li[data-page="${pageId}"]`);
    if(activeMenu){
        activeMenu.classList.add("active");
    }

    // Close mobile sidebar + overlay
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    // Update URL (SPA behavior)
    history.pushState({ page: pageId }, "", "#" + pageId);
}


/* ================= MENU CLICK ================= */

menuItems.forEach(item=>{
    item.addEventListener("click", function(){
        const pageId = this.getAttribute("data-page");
        navigateTo(pageId);
    });
});

/* ================= HAMBURGER ================= */

hamburger.addEventListener("click", function(){
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});


/* ================= OVERLAY CLICK ================= */

overlay.addEventListener("click", function(){
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});


/* ================= BROWSER BACK/FORWARD ================= */

window.addEventListener("popstate", function(event){
    const pageId = event.state?.page || "home";
    
    pages.forEach(p => p.classList.remove("active-page"));
    const targetPage = document.getElementById(pageId);
    if(targetPage){
        targetPage.classList.add("active-page");
    }

    menuItems.forEach(i => i.classList.remove("active"));
    const activeMenu = document.querySelector(`.menu li[data-page="${pageId}"]`);
    if(activeMenu){
        activeMenu.classList.add("active");
    }
});


/* ================= LOAD CORRECT PAGE ON REFRESH ================= */

window.addEventListener("load", function(){
    const pageFromURL = window.location.hash.replace("#","");
    if(pageFromURL){
        navigateTo(pageFromURL);
    }
});

/* ================= CARD CLICK ================= */

document.addEventListener("click", function(e){

    const card = e.target.closest(".card");

    if(!card) return;

    const pageId = card.getAttribute("data-page");
    if(!pageId) return;

    navigateTo(pageId);
});


/* ================= DYNAMIC PROGRAM LOGIC ================= */

const programLevel = document.getElementById("programLevel");
const programSelect = document.getElementById("programSelect");
const specializationSelect = document.getElementById("specializationSelect");

const data = {

    UG: {
        "B.Tech": [
            "Civil Engineering",
            "Automobile Engineering",
            "Mechanical Engineering",
            "Metallurgical Engineering",
            "Electrical Engineering",
            "Electronics and Communication Engineering",
            "Computer Science Engineering",
            "Computer Engineering",
            "Information Technology",
            "Cyber Security",
            "Information and Communication Technology",
            "Aircraft Maintenance Engineering",
            "Aeronautical Engineering",
            "Aerospace Engineering",
            "Defence Aerospace Engineering"
        ],
        "BCA": [
            "BCA"
        ],
        "Diploma to Degree":[

        ],
        "B.Sc": [
            "B.Sc(CA & IT)",
            "Cyber Security",
            "Data Science",
            "Computer Science (AI and ML)",
            "B.Sc Clical Research and HealthCare Management",
            "B.Sc Mathematics",
            "B.Sc Physics",
            "B.Sc Chemistry",
            "B.Sc Micro Biology"
        ],
        "BBA": [
            "Aviation",
            "BBA (General)"
        ],
        "B.Com": [
            "B.com (HONS)"
        ],
        "Design": [
            "Product Design",
            "Interior Design",
            "Fasion Design",
            "Communication Design"
        ],
        "Architecture": [
            "B.Arch (Bachelor of Architecture)"
        ],
        "Pharmacy": [
            "B.pharm Bachelor of Pharmacy"
        ],
        "BA": [
            "English"
        ]
    },

    PG: {
        "M.Tech": [
            "CAD/CAM (Mechanical Engineering)",
            "Construction Project Management (Civil Engineering)",
            "Digital Communication (EC Engineering)",
            "Electrical Power System",
            "Industrial Metallury",
            "Structural Engineering (Civil Engineering)",
            "Data Science (Computer)",
            "Cyber Security"
        ],
        "MSc": [
            "M.Sc-Cyber Security",
            "M.Sc-Information Technology",
            "M.Sc-Chemistry",
            "M.Sc-Physics",
            "M.Sc-Mathematics",
            "M.Sc-Clinical Research",
            "M.Sc-Microbiology"
        ],
        "MCA": [
            "Master of Computer Application"
        ],
        "MBA": [
            "Master of Business Administration"
        ],
        "M.Des": [
            "Fasion Design",
            "Interior Design",
            "UI-UX Design"
        ]
    },

    Diploma: {
        "Diploma": [
            "Electrical Engineering",
            "Computer Engineering",
            "Civil Engineering",
            "Automobile Engineering",
            "Mechanical Engineering",
            "Electronics and Communication Engineering",
            "Information and Communication Technology"
        ]
    },

    PhD: {
        "Part time": [
            "Computer Science & Application",
            "Computer Engineering",
            "Cyber Security",
            "Civil Engineering",
            "Commerce",
            "Electronics & Communication",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Metallurgical Engineering",
            "Chemistry",
            "Life Sciences (Clinical Research & Healthcare)",
            "Life Sciences (Microbiology)",
            "Physics",
            "Mathematics",
            "English & Humanities",
            "Environmental Science",
            "Marketing Manageement",
            "Finance Management"
        ],
        "Full time":[
            "Computer Science & Application",
            "Computer Engineering",
            "Cyber Security",
            "Civil Engineering",
            "Commerce",
            "Electronics & Communication",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Metallurgical Engineering",
            "Chemistry",
            "Life Sciences (Clinical Research & Healthcare)",
            "Life Sciences (Microbiology)",
            "Physics",
            "Mathematics",
            "English & Humanities",
            "Environmental Science",
            "Marketing Manageement",
            "Finance Management"
        ]
    }
};


/* Populate Program Dropdown */

programLevel.addEventListener("change", function(){

    const level = this.value;

    programSelect.innerHTML = `<option value="">Select Program</option>`;
    specializationSelect.innerHTML = `<option value="">Select Specialization</option>`;

    if(!data[level]) return;

    Object.keys(data[level]).forEach(program=>{
        const option = document.createElement("option");
        option.value = program;
        option.textContent = program;
        programSelect.appendChild(option);
    });

});


/* Populate Specialization Dropdown */

programSelect.addEventListener("change", function(){

    const level = programLevel.value;
    const program = this.value;

    specializationSelect.innerHTML = `<option value="">Select Specialization</option>`;

    if(!data[level] || !data[level][program]) return;

    const specs = data[level][program];

    specs.forEach(spec=>{
        const option = document.createElement("option");
        option.value = spec;
        option.textContent = spec;
        specializationSelect.appendChild(option);
    });

});