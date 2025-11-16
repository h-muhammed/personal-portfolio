'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


function showAppOptions() {
  document.getElementById("appOptionsModal").style.display = "flex";
}

function closeAppOptions() {
  document.getElementById("appOptionsModal").style.display = "none";
}



/*-----------------------------------*\
  #DEMO MODAL FUNCTIONALITY
\*-----------------------------------*/

// Demo modal functionality for American Premium Water App
// function openDemoModal() {
//     const demoModal = document.getElementById('demoModal');
//     if (demoModal) {
//         demoModal.classList.add('active');
//         document.body.style.overflow = 'hidden';
//     }
// }

// function closeDemoModal() {
//     const demoModal = document.getElementById('demoModal');
//     if (demoModal) {
//         demoModal.classList.remove('active');
//         document.body.style.overflow = 'auto';
        
//         // Pause video when closing
//         const video = document.getElementById('demoVideo');
//         if (video) {
//             video.pause();
//         }
//     }
// }

// function selectPlatform(platform) {
//     const iosBtn = document.getElementById('iosBtn');
//     const androidBtn = document.getElementById('androidBtn');
//     const videoSource = document.getElementById('videoSource');
//     const video = document.getElementById('demoVideo');
    
//     if (!iosBtn || !androidBtn || !videoSource || !video) return;
    
//     // Update button states
//     iosBtn.classList.remove('active');
//     androidBtn.classList.remove('active');
    
//     if (platform === 'ios') {
//         iosBtn.classList.add('active');
//         videoSource.src = './assets/videos/apws-ios-demo.mp4';
//     } else if (platform === 'android') {
//         androidBtn.classList.add('active');
//         videoSource.src = './assets/videos/apws-android-demo.mp4';
//     }
    
//     // Reload video with new source
//     video.load();
// }

// // Initialize demo modal event listeners when DOM is loaded
// document.addEventListener('DOMContentLoaded', function() {
    
//     // Close modal when clicking outside
//     const demoModal = document.getElementById('demoModal');
//     if (demoModal) {
//         demoModal.addEventListener('click', function(e) {
//             if (e.target === this) {
//                 closeDemoModal();
//             }
//         });
//     }
    
//     // Close modal with Escape key
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape') {
//             const demoModal = document.getElementById('demoModal');
//             if (demoModal && demoModal.classList.contains('active')) {
//                 closeDemoModal();
//             }
//         }
//     });
    
// });



// Updated JavaScript functions
function openDemoModal(type) {
    const modal = document.getElementById('demoModal');
    const modalTitle = document.getElementById('demoModalTitle');
    const platformSelector = document.getElementById('platformSelector');
    const storeLinks = document.getElementById('storeLinks');
    const webDemoLinks = document.getElementById('webDemoLinks');
    const videoSource = document.getElementById('videoSource');
    const demoVideo = document.getElementById('demoVideo');
    
    if (type === 'mobile') {
        modalTitle.textContent = 'American Premium Water App Demo';
        platformSelector.style.display = 'flex';
        storeLinks.style.display = 'flex';
        webDemoLinks.style.display = 'none';
        
        // Set default to iOS
        videoSource.src = './assets/videos/apws-ios-demo.mp4';
        selectPlatform('ios');
    } else if (type === 'web') {
        modalTitle.textContent = 'American Water Selfcare Web Demo';
        platformSelector.style.display = 'none';
        storeLinks.style.display = 'none';
        webDemoLinks.style.display = 'block';
        
        // Set web demo video
        videoSource.src = './assets/videos/flutter-web.mp4';
        
        // Adjust video styles for web demo (wider aspect ratio)
        demoVideo.style.maxWidth = '100%';
        demoVideo.style.width = '100%';
        demoVideo.style.height = 'auto';
        demoVideo.style.maxHeight = '400px';
    } else if (type === 'joozy') {
        modalTitle.textContent = 'Business Card Reader with OCR Demo';
        platformSelector.style.display = 'none';
        storeLinks.style.display = 'none';
        webDemoLinks.style.display = 'none';
        
        // Set joozy demo video
        videoSource.src = './assets/videos/joozy-app.mp4';
        
        // Adjust video styles for joozy demo
        demoVideo.style.maxWidth = '100%';
        demoVideo.style.width = '100%';
        demoVideo.style.height = 'auto';
        demoVideo.style.maxHeight = '600px';
    }
    
    demoVideo.load(); // Reload video with new source
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDemoModal() {
    const modal = document.getElementById('demoModal');
    const demoVideo = document.getElementById('demoVideo');
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    demoVideo.pause();
    
    // Reset video styles
    demoVideo.style.maxWidth = '300px';
    demoVideo.style.width = '100%';
    demoVideo.style.height = '500px';
    demoVideo.style.maxHeight = 'none';
}

function selectPlatform(platform) {
    const videoSource = document.getElementById('videoSource');
    const demoVideo = document.getElementById('demoVideo');
    const iosBtn = document.getElementById('iosBtn');
    const androidBtn = document.getElementById('androidBtn');
    
    // Remove active class from all buttons
    iosBtn.classList.remove('active');
    androidBtn.classList.remove('active');
    
    if (platform === 'ios') {
        videoSource.src = './assets/videos/apws-ios-demo.mp4';
        iosBtn.classList.add('active');
    } else if (platform === 'android') {
        videoSource.src = './assets/videos/apws-android-demo.mp4';
        androidBtn.classList.add('active');
    }
    
    demoVideo.load();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('demoModal');
    const modalContent = modal.querySelector('.demo-modal');
    
    if (event.target === modal && !modalContent.contains(event.target)) {
        closeDemoModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDemoModal();
    }
});