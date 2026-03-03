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

        // Remove active class
        menuItems.forEach(i=>i.classList.remove("active"));
        pages.forEach(p=>p.classList.remove("active-page"));

        // Add active
        this.classList.add("active");
        const pageId = this.getAttribute("data-page");
        document.getElementById(pageId).classList.add("active-page");

        // Close sidebar on mobile
        document.getElementById("sidebar").classList.remove("active");
    });
});


// HAMBURGER
document.getElementById("hamburger")
    .addEventListener("click", function(){
        document.getElementById("sidebar")
            .classList.toggle("active");
});