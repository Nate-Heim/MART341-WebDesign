document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('dragonCanvas');
    var context = canvas.getContext('2d');

    // Drawing the dragons body here
    context.fillStyle = 'green';
    context.fillRect(100, 150, 200, 100);

    // Drawing the dragons head
    context.beginPath();
    context.arc(300, 200, 30, 0, 2 * Math.PI);
    context.fillStyle = 'green';
    context.fill();
    context.stroke();

    // Drawing the dragons tail
    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(70, 180);
    context.lineTo(70, 220);
    context.closePath();
    context.fillStyle = 'green';
    context.fill();
    context.stroke();

    // Drawing the dragons wings
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(150, 120);
    context.lineTo(150, 80);
    context.closePath();
    context.fillStyle = 'green';
    context.fill();
    context.stroke();

    // Drawing the dragons eyes
    context.beginPath();
    context.arc(310, 190, 5, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();

    // Drawing the dragons mouth
    context.beginPath();
    context.arc(310, 210, 10, 0.8 * Math.PI, 1.2 * Math.PI);
    context.lineWidth = 2;
    context.stroke();
});