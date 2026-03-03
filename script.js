// CLOCK
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


// PAGE SWITCHING
const menuItems = document.querySelectorAll(".menu li");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item=>{
    item.addEventListener("click", function(){

        menuItems.forEach(i=>i.classList.remove("active"));
        pages.forEach(p=>p.classList.remove("active-page"));

        this.classList.add("active");
        const pageId = this.getAttribute("data-page");
        document.getElementById(pageId).classList.add("active-page");

        // Close sidebar
        sidebar.classList.remove("active");

        // REMOVE overlay too
        overlay.classList.remove("active");
    });
});


// HAMBURGER
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const hamburger = document.getElementById("hamburger");

// Open sidebar
hamburger.addEventListener("click", function(){
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close when clicking overlay
overlay.addEventListener("click", function(){
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.classList.remove("active");