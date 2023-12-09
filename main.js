
// changing name in header and home section
const nameField = document.querySelectorAll(".name");
for (const element of nameField) {
    element.addEventListener('click',() =>{
        const myName = window.prompt("Name??");
        if(myName){
            for(const element2 of nameField){
                element2.innerHTML = String(myName);
            }
        }
    })
}

//aboutMe
const about = document.querySelector("#about");
const aAS_Btn = document.querySelector("#about .aAS_Btn");
const hAS = document.querySelector("#about .hAS")
const addASection = document.querySelector("#about .hAS .submit")
const closeASection = document.querySelector("#about .hAS .close")

function aAS_Funct() {
    const inputHeading = document.querySelector(".hAS #addS_Heading");
    const inputDescription = document.querySelector(".hAS #addS_Description");
    const newSection = document.createElement('div');
    newSection.classList.add('AMS');
    const sectionHeading = document.createElement('h3');
    sectionHeading.textContent = inputHeading.value;
    const sectionDescription = document.createElement('p');
    sectionDescription.textContent = inputDescription.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = "Delete";
    newSection.appendChild(sectionHeading);
    newSection.appendChild(sectionDescription);
    newSection.appendChild(deleteBtn);
    about.appendChild(newSection);
    inputHeading.value = "";
    inputDescription.value = "Description...";
    hAS.style.top = "-1000px";
}
function rAS_Funct() {
    hAS.style.top = "-1000px";
}
aAS_Btn.addEventListener('click', () => {
    hAS.style.top = "100px";
    addASection.addEventListener('click',aAS_Funct,true);
    closeASection.addEventListener('click',rAS_Funct,true);
})
    
addASection.removeEventListener('click',aAS_Funct,true);
closeASection.removeEventListener('click',rAS_Funct,true);

about.addEventListener('click', (event) => {
    const element = event.target;
    if(element.classList.contains('delete')){
        const currentParent = element.parentElement;
        currentParent.remove();
    }
})



//projects
const projects = document.querySelector("#projects");
const aPS_Btn = document.querySelector("#projects .aPS_Btn");
const hPS = document.querySelector("#projects .hPS")
const addPSection = document.querySelector("#projects .hPS .submit")
const closePSection = document.querySelector("#projects .hPS .close")

function aPS_Funct() {
    const inputHeading = document.querySelector(".hPS #addS_Heading");
    const inputDescription = document.querySelector(".hPS #addS_Description");
    const inputLink = document.querySelector(".hPS #addS_Link");
    const newSection = document.createElement('div');
    newSection.classList.add('PS');
    const sectionHeading = document.createElement('h3');
    sectionHeading.textContent = inputHeading.value;
    const sectionDescription = document.createElement('p');
    sectionDescription.textContent = inputDescription.value;
    const sectionLink = document.createElement('a');
    sectionLink.href = inputLink.value;
    sectionLink.textContent = "project_Link"
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = "Delete";
    newSection.appendChild(sectionHeading);
    newSection.appendChild(sectionDescription);
    newSection.appendChild(sectionLink);
    newSection.appendChild(deleteBtn);
    projects.appendChild(newSection);
    inputHeading.value = "";
    inputDescription.value = "Description...";
    inputLink.value = "";
    hPS.style.top = "-1000px";
}
function rPS_Funct() {
    hPS.style.top = "-1000px";
}
aPS_Btn.addEventListener('click', () => {
    hPS.style.top = "100px";
    addPSection.addEventListener('click',aPS_Funct,true);
    closePSection.addEventListener('click',rPS_Funct,true);
})
    
addPSection.removeEventListener('click',aPS_Funct,true);
closePSection.removeEventListener('click',rPS_Funct,true);

projects.addEventListener('click', (event) => {
    const element = event.target;
    if(element.classList.contains('delete')){
        const currentParent = element.parentElement;
        currentParent.remove();
    }
})

//Contact Me
const editLinks_Btn = document.querySelector("#contact .editLinks_Btn");
const hCM = document.querySelector("#contact .hCM");
const submit = document.querySelector(".hCM .submit");
const close = document.querySelector(".hCM .close");
const email = document.querySelector('.current .email');
const contactNo = document.querySelector('.current .contactNo');
const linkedIn = document.querySelector('.current .linkedIn');
const inputEmail = document.querySelector('.hCM #email');
const inputContactNo = document.querySelector('.hCM #contactNo');
const inputLinkedIn = document.querySelector('.hCM #linkedIn');

function update() {
    email.href = `mailto:${inputEmail.value}`;
    contactNo.href = `tel:+91${inputContactNo.value}`;
    linkedIn.href = `https://${inputLinkedIn.value}`;
    hCM.style.top = "-1000px";
}
function donotUpdate() {
    inputEmail.value = email.href;
    inputContactNo.value = contactNo.href;
    inputLinkedIn.value = linkedIn.href;
    hCM.style.top = "-1000px";
}
function editLinks_Funct() {
    hCM.style.top = "100px";

    submit.addEventListener('click',update,true);
    close.addEventListener('click',donotUpdate,true);
}
editLinks_Btn.addEventListener('click',editLinks_Funct,true);
