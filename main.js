(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });
  
  

}());

  let slideIndex = 0;
  const slides = document.getElementsByClassName("slideshow");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500); // Change image every 2 seconds
  }

  showSlides();

  const audio = document.getElementById('birthdayAudio');
  const btn = document.getElementById('audioToggle');
  const openBtn = document.getElementById('open');
  const closeBtn = document.getElementById('close'); // 👈 new line

  // Toggle Audio Manually
  btn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = '🔊';
    } else {
      audio.pause();
      btn.textContent = '🔈';
    }
  });

  // Autoplay on Card Open
  openBtn.addEventListener('click', () => {
    audio.play();
  });

  // Stop Audio on Card Close
  closeBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0; // optional: resets audio to start
    btn.textContent = '🔈'; // reset toggle icon
  });

function checkView() {
    const isMobile = window.innerWidth < 768;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (isMobile) {
      document.getElementById('desktopPrompt').style.display = 'block';
    }

    if (isPortrait) {
      document.getElementById('rotatePrompt').style.display = 'block';
    } else {
      document.getElementById('rotatePrompt').style.display = 'none';
    }
  }

  window.addEventListener('load', checkView);
  window.addEventListener('resize', checkView);
  window.addEventListener('orientationchange', checkView);

  document.getElementById("nextPageBtn").addEventListener("click", () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "crak.html";
    }, 1000); // match the fadeOut animation duration
  });
