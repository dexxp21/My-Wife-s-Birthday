// Countdown Timer
var deadline = new Date("July 4, 2025 00:00:00").getTime();  // Set the date you want the countdown to
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = deadline - now;

    // Time calculation
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    // If the countdown is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("elapseClock").innerHTML = "It's time!";
    }
}, 1000);

// Show hidden messages after a delay or based on clicks
window.onload = function() {
    setTimeout(function() {
        document.getElementById('message1').style.display = 'block';
    }, 1000); // Message 1 appears after 1 second

    setTimeout(function() {
        document.getElementById('message2').style.display = 'block';
    }, 3000); // Message 2 appears after 3 seconds

    setTimeout(function() {
        document.getElementById('message3').style.display = 'block';
    }, 5000); // Message 3 appears after 5 seconds
}
