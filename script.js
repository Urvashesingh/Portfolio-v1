
  const words = ["Tech Architect", "Developer"];
  let i = 0;
  let timer;
  let isDeleting = false;
  let txt = '';
  const speed = 150;
  const wait = 1000;
  const element = document.getElementById("typewriter");

  

  function type() {
    const current = words[i % words.length];
    if (isDeleting) {
      txt = current.substring(0, txt.length - 1);
    } else {
      txt = current.substring(0, txt.length + 1);
    }

    element.innerHTML = txt;

    if (!isDeleting && txt === current) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, wait);
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      i++;
      type();
    } else {
      timer = setTimeout(type, isDeleting ? speed / 2 : speed);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    type();
  });
  window.onscroll = function() {
    var header = document.querySelector(".header");
    
    
    if (window.scrollY > 27) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};
