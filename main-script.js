document.addEventListener("DOMContentLoaded", () => {
    // Typing animation setup
    const phrases = [
        "I am cs student",
        "Damn I love vichy so much",
        "I am a developer",
        "SQL? Of course I know it :)",
        "I like telling stories, fishing and math"
    ];
    const typingText = document.getElementById('typing-text');
    let currentPhrase = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function type() {
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length; // Loop back to first phrase
        } else if (!isDeleting && charIndex === phrases[currentPhrase].length) {
            isDeleting = true;
            typingSpeed = 1100; // Wait a bit longer at the end of a phrase
        }

        typingText.textContent = phrases[currentPhrase].substring(0, charIndex);

        if (isDeleting) {
            charIndex--;
            typingSpeed = 50; // Faster deletion speed
        } else {
            charIndex++;
            typingSpeed = 150; // Normal typing speed
        }

        setTimeout(type, typingSpeed);
    }

    type(); // Start typing effect

    // Page transition setup
    let lastScrollTop = 0; // Initial scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = 0; // Start from the first section

    window.addEventListener("scroll", () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            // scrolling down
            if (currentSection < sections.length - 1) {
                currentSection++;
                sections[currentSection - 1].style.animation = 'slideOut 0.5s ease-in forwards';
                sections[currentSection].style.animation = 'slideIn 0.5s ease-out forwards';
            }
        } else {
            // scrolling up
            if (currentSection > 0) {
                currentSection--;
                sections[currentSection + 1].style.animation = 'slideOut 0.5s ease-in forwards';
                sections[currentSection].style.animation = 'slideIn 0.5s ease-out forwards';
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For negative scrolling values
    }, false);
});
