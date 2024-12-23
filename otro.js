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
// Adding a dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙'
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '10px';
darkModeToggle.style.right = '10px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.zIndex = 1000;
document.body.appendChild(darkModeToggle);
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});



// Adding a collapsible section functionality
document.querySelectorAll('.collapsible').forEach(collapsible => {
    const content = collapsible.nextElementSibling;
    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.5s ease-out';

    collapsible.addEventListener('click', () => {
        collapsible.classList.toggle('active');
        if (collapsible.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});


// Adding a hover effect to cards with the class 'card-hover'
document.querySelectorAll('.card-hover').forEach(card => {
    card.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Adding a rotating text effect to elements with the class 'rotate-text'
document.querySelectorAll('.rotate-text').forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;
    const rotateText = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(rotateText, 150);
        } else {
            setTimeout(() => {
                element.textContent = '';
                index = 0;
                rotateText();
            }, 2000);
        }
    };
    rotateText();
});

// Adding a bouncing effect to elements with the class 'bounce'
document.querySelectorAll('.bounce').forEach(element => {
    element.style.position = 'relative';
    element.style.animation = 'bounce 2s infinite';
});

// Adding keyframes for bounce animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}`;
document.head.appendChild(style);

// Adding a glow effect to elements with the class 'glow'
document.querySelectorAll('.glow').forEach(element => {
    element.style.transition = 'box-shadow 0.5s ease-in-out';
    element.addEventListener('mouseover', () => {
        element.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
    });
    element.addEventListener('mouseout', () => {
        element.style.boxShadow = 'none';
    });
});