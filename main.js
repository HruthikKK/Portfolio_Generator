
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
const hiddenASectionAlert = document.querySelector("#about .hAS .alert")
function aAS_Funct() {
    const inputHeading = document.querySelector(".hAS #addS_Heading");
    const inputDescription = document.querySelector(".hAS #addS_Description");
    
    if(inputHeading.value === "" ||inputDescription.value ===""){
        hiddenASectionAlert.textContent = "Fill all fields";
        return;
    }

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
    hiddenASectionAlert.textContent = "";
    hAS.style.top = "-1000px";
}
function rAS_Funct() {
    hAS.style.top = "-1000px";
}

addASection.addEventListener('click',aAS_Funct);
closeASection.addEventListener('click',rAS_Funct);

aAS_Btn.addEventListener('click', () => {
    hAS.style.top = "100px";
})
    

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
const hiddenPSectionAlert = document.querySelector("#projects .hPS .alert")

function aPS_Funct() {
    const inputHeading = document.querySelector(".hPS #addS_Heading");
    const inputDescription = document.querySelector(".hPS #addS_Description");
    const inputLink = document.querySelector(".hPS #addS_Link");
    
    if(!inputHeading.value || !inputDescription || !inputLink){
        hiddenPSectionAlert.textContent = "Fill all fields";
        return;
    }
    const newSection = document.createElement('div');
    newSection.classList.add('PS');
    const sectionHeading = document.createElement('h3');
    sectionHeading.textContent = inputHeading.value;
    const sectionDescription = document.createElement('p');
    sectionDescription.textContent = inputDescription.value;
    const sectionLink = document.createElement('a');
    sectionLink.href = `https://${inputLink.value}`;
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
    hiddenPSectionAlert.textContent = "";
    hPS.style.top = "-1000px";
}
function rPS_Funct() {
    hPS.style.top = "-1000px";

}
addPSection.addEventListener('click',aPS_Funct,true);
closePSection.addEventListener('click',rPS_Funct,true);

aPS_Btn.addEventListener('click', () => {
    hPS.style.top = "100px";
})
    
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
submit.addEventListener('click',update,true);
close.addEventListener('click',donotUpdate,true);

function editLinks_Funct() {
    hCM.style.top = "100px";
}
editLinks_Btn.addEventListener('click',editLinks_Funct,true);


//Download
const downloadHTML = document.querySelector("#download #downloadHTML a");
const html = document.querySelector('html');
function downloadHTML_Funct() {

    //removing hidden sectin
    hAS.remove();
    hPS.remove();
    hCM.remove();

    //removing addSection buttons
    aAS_Btn.remove();
    aPS_Btn.remove();
    editLinks_Btn.remove();

    //removing delete buttons
    const d_Btn = document.querySelectorAll('.delete');

    for(element of d_Btn){
        element.remove();
    }

    const textContent = html.outerHTML;

    const blob = new Blob([textContent], { type: "text/plain" });

      downloadHTML.download = "index.html"; // File name when downloaded
      downloadHTML.href = URL.createObjectURL(blob);
    //   downloadHTML.click(); -> extra download
}
downloadHTML.addEventListener('click',downloadHTML_Funct);
