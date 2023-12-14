document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('dragonCanvas');
    var context = canvas.getContext('2d');

    //body
    context.fillStyle = '#00796b';
    context.fillRect(120, 180, 160, 100);

    //head
    context.beginPath();
    context.arc(200, 150, 40, 0, 2 * Math.PI);
    context.fillStyle = '#00796b';
    context.fill();
    context.stroke();

    //eyes
    context.beginPath();
    context.arc(190, 140, 5, 0, 2 * Math.PI);
    context.arc(210, 140, 5, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    // pupils
    context.beginPath();
    context.arc(190, 140, 2, 0, 2 * Math.PI);
    context.arc(210, 140, 2, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();

    //mouth
    context.beginPath();
    context.arc(200, 155, 15, 0.2 * Math.PI, 0.8 * Math.PI);
    context.lineWidth = 2;
    context.stroke();

    // wings
    context.beginPath();
    context.moveTo(120, 150);
    context.lineTo(70, 100);
    context.lineTo(70, 200);
    context.closePath();
    context.fillStyle = '#00796b';
    context.fill();
    context.stroke();

    // tail
    context.beginPath();
    context.moveTo(120, 230);
    context.lineTo(70, 250);
    context.lineTo(70, 210);
    context.closePath();
    context.fillStyle = '#00796b';
    context.fill();
    context.stroke();
});