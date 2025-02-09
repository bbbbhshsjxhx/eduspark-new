// 🔹 Create the loading screen dynamically
document.write(`
    <div class="loading-screen" id="loadingScreen">
        <div class="particles"></div>
        <div class="logo-container">
            <div class="ripple"></div>
            <img src="https://i.postimg.cc/qMJFwgZJ/Picsart-24-12-28-12-42-37-810.png" alt="EduSparK Logo" class="logo">
        </div>
        <div class="loading-text">Loading...</div>
        <div class="loading-bar"><div class="bar"></div></div>
    </div>
    <script>
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            for (let i = 0; i < 30; i++) {
                let particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.animationDuration = (Math.random() * 5 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            createParticles(); // Create animated particles
            setTimeout(() => {
                document.getElementById('loadingScreen').classList.add('hidden');
            }, 3500);
        });
    <\/script>
`);
