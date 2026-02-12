/* Category active state */
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".category-card")
      .forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length; // This is now 6

setInterval(() => {
  const slideWidth = slider.offsetWidth;

  // 1. Move to the next slide smoothly
  slider.scrollBy({ left: slideWidth, behavior: 'smooth' });

  // 2. Check if we just landed on the CLONE (the last image)
  // We wait 600ms for the smooth scroll animation to finish first
  setTimeout(() => {
    if (slider.scrollLeft >= (totalSlides - 1) * slideWidth) {
      // 3. JUMP back to the real first image INSTANTLY
      slider.scrollTo({ left: 0, behavior: 'auto' }); 
    }
  }, 600); 
}, 5000);


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Optional: Animate hamburger to an 'X'
    const dots = hamburger.children;
    dots[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
    dots[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    dots[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
});



  