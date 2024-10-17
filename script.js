document.addEventListener('DOMContentLoaded', function () {
    var greeting = document.getElementById('greeting');
    var now = new Date();
    var hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        greeting.textContent = 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = 'Good Afternoon';
    } else {
        greeting.textContent = 'Good Evening';
    }
});
