function animateNumber(elementId, endValue) {
    const element = document.getElementById(elementId);
    let startValue = 0;
    const duration = 2000; 
    const stepTime = 50; 
    const stepValue = endValue / (duration / stepTime);

    function updateNumber() {
        startValue += stepValue;
        if (startValue >= endValue) {
            element.innerText = endValue;
        } else {
            element.innerText = Math.floor(startValue);
            requestAnimationFrame(updateNumber);
        }
    }

    updateNumber();
}

document.addEventListener("DOMContentLoaded", function() {
    animateNumber("happy-clients", 1200); 
    animateNumber("ranking", 350);       
    animateNumber("projects", 50);       
    animateNumber("awards", 15);         
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    function toggleButtonVisibility() {
        if (window.scrollY > 50) { 
            scrollToTopBtn.classList.add('show');
            scrollToTopBtn.classList.remove('hide');
        } else {
            scrollToTopBtn.classList.add('hide');
            scrollToTopBtn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', toggleButtonVisibility);

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    toggleButtonVisibility();
});
