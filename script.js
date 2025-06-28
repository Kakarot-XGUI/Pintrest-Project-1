// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
            gsap.fromTo(mobileMenu, 
                { opacity: 0, y: -20 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
            );
        } else {
            gsap.to(mobileMenu, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" });
        }

        mobileMenu.classList.toggle('hidden');
    });
}



const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg", 
    "6.jpg",
    "7.jpg"
  
];

