// Contador de tempo juntos
const startDate = new Date('2019-12-27'); // Data do início do namoro
const counterElement = document.getElementById('counter');

function updateCounter() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    counterElement.textContent = `${years} anos, ${months} meses, ${days} dias`;
}

updateCounter();
setInterval(updateCounter, 1000);

// Galeria automática
const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
let index = 0;

function updateGallery() {
    index = (index + 1) % images.length;
    gallery.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(updateGallery, 3000);

// Animação de corações
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 500);
