document.addEventListener('DOMContentLoaded', function () {
    const balloonsContainer = document.querySelector('.balloons');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 4;
        const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        balloon.style.left = `${randomX}%`;
        balloon.style.backgroundColor = randomColor;
        balloon.style.animationDelay = `${randomDelay}s`;
        balloonsContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 8000);
    }
    setInterval(createBalloon, 500);
});
