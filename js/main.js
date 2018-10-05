(() => { // SELF EXECUTING FUNCTION

const NAV_OPENED_CLASS = "change";
const NAV_CLOSED_CLASS = "changeBack";
// FIRST MEMBER querys
const name1 = document.querySelector('#name1');
const bio1 = document.querySelector('#bio1');
const position1 = document.querySelector("#position1");
// SECOND MEMBER querys
const name2 = document.querySelector('#name2');
const bio2 = document.querySelector('#bio2');
const position2 = document.querySelector("#position2");

let desktopQ = window.matchMedia("(min-width: 768px)");

function setPort1Info(data) {
  name1.textContent = data.memberName;
  bio1.textContent = data.memberBio;
  position1.textContent = "//" + data.memberPosition;
}

function setPort2Info(data) {
  name2.textContent = data.memberName;
  bio2.textContent = data.memberBio;
  position2.textContent = "//" + data.memberPosition; 
}

window.onload = function() {
  const navBtn = document.getElementById("nav-btn");
  const classes = navBtn.classList;
  const navbar = document.getElementById("navbar");

  navBtn.addEventListener("click", function() {
    if (classes.contains(NAV_OPENED_CLASS)) {
      openNav();
    } else {
      closeNav();
    }
  });
  const navLinks = document.getElementsByClassName("nav-link");
  [...navLinks].forEach(function(elem) {
    elem.addEventListener("click", function() {
      closeNav();
    });
  });

  function closeNav() {
    classes.remove(NAV_CLOSED_CLASS);
    classes.add(NAV_OPENED_CLASS);
    navbar.classList.add("hide");
  }
  function openNav() {
    classes.remove(NAV_OPENED_CLASS);
    classes.add(NAV_CLOSED_CLASS);
    navbar.classList.remove("hide");
  }
};

function getData() {
  fetch('admin/connect.php')
  .then(res => res.json())
  .then(data => {
    setPort1Info(data[0]);
    setPort2Info(data[1]);
  })
  .catch(function(error) {
    console.log(error);
  });
}

function reassignImages(x){
  if (x.matches) { // it is DESKTOP SIZE
    // INDEX
    document.getElementById('imgHead').src='./images/desktop_index/bckgrd_face.png';
    // BRENDAN pics
    document.getElementById('imgCeltic').src='./images/desktop_port/brendan_port_desk1.png';
    document.getElementById('imgMaritimes').src='./images/desktop_port/brendan_port_desk2.png';
    document.getElementById('imgVolume').src='./images/desktop_port/brendan_port_desk3.png';
    // AIDEN pics
    document.getElementById('imgBuilding').src='./images/desktop_port/aiden_port_desk1.png';
    document.getElementById('imgMan').src='./images/desktop_port/aiden_port_desk2.png';
    document.getElementById('imgBall').src='./images/desktop_port/aiden_port_desk3.png';
    // CONTACT face
    document.getElementById('contactFace').src='./images/desktop_index/contact_desktop.png';
   } else { // it is NOT DESKTOP SIZE
    // INDEX 
    document.getElementById('imgHead').src='./images/mobile_index/mobile_face.png';
    // BRENDAN pics
    document.getElementById('imgCeltic').src='./images/mobile_port/brendan_port_1_mobile.png';
    document.getElementById('imgMaritimes').src='./images/mobile_port/brendan_port_2_mobile.png';
    document.getElementById('imgVolume').src='./images/mobile_port/brendan_port_3_mobile.png';
    // AIDEN pics
    document.getElementById('imgBuilding').src='./images/mobile_port/aiden_port_1_mobile.png';
    document.getElementById('imgMan').src='./images/mobile_port/aiden_port_2_mobile.png';
    document.getElementById('imgBall').src='./images/mobile_port/aiden_port_3_mobile.png';
    // CONTACT face
    document.getElementById('contactFace').src='./images/mobile_index/contact_mobile.png';
  }
}


// call FUNCTIONS
reassignImages(desktopQ);
getData();

// EVENT HANDLING
desktopQ.addListener(reassignImages);


})();

