/*function updateTime() {
    const clock = document.getElementById('clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    clock.textContent = timeString;
}

function padZero(number) {
return number.toString().padStart(2, '0');
}*/

function updateTime() {
    const portlandHand = document.getElementById('portland-hand');
    const berlinHand = document.getElementById('berlin-hand');

    const portlandTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
    const berlinTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin' });

    const [portlandHours, portlandMinutes] = portlandTime.split(':').map(Number);
    const [berlinHours, berlinMinutes] = berlinTime.split(':').map(Number);

    const portlandRotation = (portlandHours % 12) * 30 + portlandMinutes / 2;
    const berlinRotation = (berlinHours % 12) * 30 + berlinMinutes / 2;

    portlandHand.style.transform = `rotate(${portlandRotation}deg)`;
    berlinHand.style.transform = `rotate(${berlinRotation}deg)`;
}

window.addEventListener('scroll', function() {
    var content = document.getElementById('content');
    var yOffset = window.pageYOffset;

    if (yOffset > 0) {
        content.classList.add('black-bg');
        content.classList.add('white-text');
    } else {
        content.classList.remove('black-bg');
        content.classList.remove('white-text');
    }
});

// Update the clock immediately
updateTime();

// Update the clock every second
setInterval(updateTime, 1000);

