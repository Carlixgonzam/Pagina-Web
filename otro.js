// Adding animations to each container except those with the class 'skills'
document.querySelectorAll('.container:not(.skills)').forEach(container => {
    container.style.transition = 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out';
    container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.1)';
        container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
        container.style.boxShadow = 'none';
    });
});

// Adding a programmer gif next to imagen.jpeg
const imgContainer = document.querySelector('.image-container');
if (imgContainer) {
    const programmerGif = document.createElement('img');
    programmerGif.src = 'tenor.gif'; // Replace with the actual path to the gif
    programmerGif.alt = 'Programmer GIF';
    programmerGif.style.marginLeft = '10px'; // Adjust the margin as needed
    programmerGif.style.transition = 'transform 0.5s ease-in-out';
    programmerGif.addEventListener('mouseover', () => {
        programmerGif.style.transform = 'scale(1.1)';
    });
    programmerGif.addEventListener('mouseout', () => {
        programmerGif.style.transform = 'scale(1)';
    });

    imgContainer.appendChild(programmerGif);
}

// Adding a smooth scroll effect to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding a fade-in effect to elements with the class 'fade-in'
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = 0;
    element.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
    element.style.transform = 'translateY(20px)';
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    observer.observe(element);
});
// Adding a typewriter effect to elements with the class 'typewriter'
document.querySelectorAll('.typewriter').forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;
    const typeWriter = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();
});

// Adding a parallax effect to elements with the class 'parallax'
window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -(window.scrollY * speed / 100);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Adding a ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const rect = this.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});



// Adding a floating back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '50px';
backToTopButton.style.right = '10px';
backToTopButton.style.padding = '10px';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = 1000;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});