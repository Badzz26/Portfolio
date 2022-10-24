function openBars() {
    var x = document.getElementById("nav_id");
    if(x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar";
    }
}
function homeActive() {
    let home = document.getElementById("a-home");
    let about = document.getElementById("a-about-me");
    let skills = document.getElementById("a-skills");
    let projects = document.getElementById("a-projects");
    let contact = document.getElementById("a-contact-me");
    if(home.className == "inactive"){
        home.className = "active";
        about.className = "inactive";
        skills.className = "inactive";
        projects.className = "inactive";
        contact.className = "inactive";
    }
    else{
        home.className = "active";
    }
}

function aboutActive() {
    let home = document.getElementById("a-home");
    let about = document.getElementById("a-about-me");
    let skills = document.getElementById("a-skills");
    let projects = document.getElementById("a-projects");
    let contact = document.getElementById("a-contact-me");
    if(about.className == "inactive") {
        about.className = "active";
        home.className = "inactive";
        skills.className = "inactive";
        projects.className = "inactive";
        contact.className = "inactive";
    }
    else {
        about.className = "active";
    }
}

function skillsActive() {
    let home = document.getElementById("a-home");
    let about = document.getElementById("a-about-me");
    let skills = document.getElementById("a-skills");
    let projects = document.getElementById("a-projects");
    let contact = document.getElementById("a-contact-me");
    if(skills.className == "inactive") {
        skills.className = "active";
        home.className = "inactive";
        about.className = "inactive";
        projects.className = "inactive";
        contact.className = "inactive";
    }
    else {
        skills.className = "active";
    }
}

function projectsActive() {
    let home = document.getElementById("a-home");
    let about = document.getElementById("a-about-me");
    let skills = document.getElementById("a-skills");
    let projects = document.getElementById("a-projects");
    let contact = document.getElementById("a-contact-me");
    if(projects.className == "inactive") {
        projects.className = "active";
        home.className = "inactive";
        about.className = "inactive";
        skills.className = "inactive";
        contact.className = "inactive";
    }
    else {
        projects.className = "active";
    }
}

function contactActive() {
    let home = document.getElementById("a-home");
    let about = document.getElementById("a-about-me");
    let skills = document.getElementById("a-skills");
    let projects = document.getElementById("a-projects");
    let contact = document.getElementById("a-contact-me");
    if(contact.className == "inactive") {
        contact.className = "active";
        home.className = "inactive";
        about.className = "inactive";
        projects.className = "inactive";
        skills.className = "inactive";
    }
    else {
        contact.className = "active";
    }
}

