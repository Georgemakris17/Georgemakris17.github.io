function showSection(sectionId) {
  
  let sections = document.querySelectorAll("aside > ul > div");
 
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId) {
      sections[i].classList.remove("hidden");
      let sections1 =document.querySelectorAll("main>p");
      showSection1(sections1);
      showSection2(sections1);
      showSection3(sections1);
      showSection4(sections1);
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection1(sectionId1) {
  
  let sections = document.querySelectorAll("main >p");
  
  for (let i = 0; i < sections.length; i++) {
   
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection2(sectionId1) {
  
  let sections = document.querySelectorAll("footer >p");
 
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
      if(sectionId1=="link"){
        var footer = document.getElementById("link");
        footer.scrollIntoView();
      }
      else if(sectionId1=="link1"){
        var footer = document.getElementById("link1");
        footer.scrollIntoView();
      }
      else{
        var footer = document.getElementById("link2");
        footer.scrollIntoView();
      }
    } else { 
      sections[i].classList.add("hidden");
    }
  }
}
function showSection3(sectionId1) {
  
  let sections = document.querySelectorAll("main > div");
  
  for (let i = 0; i < sections.length; i++) {
    
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { // Otherwise, hide it
      sections[i].classList.add("hidden");
    }
  }
}
function showSection4(sectionId1) {
  
  let sections = document.querySelectorAll("main > div >div");
  
  for (let i = 0; i < sections.length; i++) {
   
    if (sections[i].id == sectionId1) {
      sections[i].classList.remove("hidden");
    } else { // Otherwise, hide it
      sections[i].classList.add("hidden");
    }
  }
}

var music = document.getElementById("music");
    function playMusic() {
      music.play();
    }
    function login() {
      
      document.getElementById("syndesh").style.display = "block"
      document.getElementById("syndesh").style.display = "none";
      //document.getElementById("aposindesh").style.display = "block";
      document.getElementById("admin-form").style.display = "block";
    }
    function logout() {
      
      //document.getElementById("syndesh").style.display = "block";
      document.getElementById("aposindesh").style.display = "none";
      document.getElementById("admin-form").style.display = "none";
    }
    function addProject() {
      
    }
    function editProject() {
      
    }
    function deleteProject() {
      
    }
    function addLink() {
      
    }
    function editLink() {
     
    }
    function deleteLink() {
      
    }
    
    

