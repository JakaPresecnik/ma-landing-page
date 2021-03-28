const Canvas = () => {

    let circles = [];
    const colors = ['62,19,175', '255,131,0', '6,121,159', '88,224,0', '118,89,195', '255,179,99', '76,156,183', '146,232,90', '90,55,180', '255,179,99', '42,134,165', '120,226, 50', '47,14,135', '197,101,0', '4,93,123', '68,173,0', '54,136,0', '3,73,97', '155, 79,0', '36,9,106'];

    function Circle(radius, speed, width, xPos, yPos, fill) {
        this.radius = radius;
        this.speed = speed;
        this.width = width;
        this.xPos = xPos;
        this.yPos = yPos;
        this.opacity = .05 + Math.random() * .5;
        this.fill = fill;
        
        this.counter = 0;
        
        let signHelper = Math.floor(Math.random() * 2);
        
        if (signHelper === 1) {
            this.sign = -1;
        } else {
            this.sign = 1;
        }
    }

    Circle.prototype.update = function (mainContext) {
        this.counter += this.sign * this.speed;
     
        mainContext.beginPath();
        
        mainContext.arc(this.xPos + Math.cos(this.counter / 100) * this.radius, 
                        this.yPos + Math.sin(this.counter / 100) * this.radius, 
                        this.width, 
                        0, 
                        Math.PI * 2,
                        false);
                         
        mainContext.closePath();
     
        mainContext.fillStyle = this.fill;
        mainContext.fill();
    };

    function setupCircles() {
        for (let i = 0; i < 40; i++) {
            let randomX = Math.round(-200 + Math.random() * 700);
            let randomY = Math.round(-200 + Math.random() * 400);
            let speed = .4 + Math.random();
            let size = 10 + Math.random() * 80;
            let radius = 5 + Math.random() * 45;
            let fill = `RGBA(${colors[Math.floor(Math.random() * colors.length)]},0.4)`;

     
            let circle = new Circle(radius, speed, size, randomX, randomY, fill);
            circles.push(circle);
        }
        drawAndUpdate();
    }
 
    function drawAndUpdate() {
        let canvas = document.getElementById('canvas');
        let mainContext = canvas.getContext('2d');
        
        mainContext.clearRect(0, 0, 300, 300);
    
        for (let i = 0; i < circles.length; i++) {
        
            let myCircle = circles[i];
            myCircle.update(mainContext);
        }
        
        requestAnimationFrame(drawAndUpdate);
    }
    setupCircles();
}

export default Canvas;