const timeElement = document.getElementById('time');
const btn12 = document.getElementById('btn12');
const btn24 = document.getElementById('btn24');

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    if (btn12.classList.contains('active')) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    } else {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

function toggleTimeFormat(btn) {
    btn12.classList.remove('active');
    btn24.classList.remove('active');
    btn.classList.add('active');
    updateTime();
}

btn12.addEventListener('click', () => toggleTimeFormat(btn12));
btn24.addEventListener('click', () => toggleTimeFormat(btn24));

// Update the time immediately and every second
updateTime();
setInterval(updateTime, 1000);
