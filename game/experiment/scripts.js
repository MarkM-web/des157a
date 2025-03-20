(function(){
    "use strict"

    const paddleSpeedInit = 10;
    const paddleAcc = 1;

    let ballX = 240;
    let ballY = 240;
    let dx = 3;
    let dy = -2;
    let RPP = 0;
    let dRPP = paddleSpeedInit;
    let rDir = 0;
    let prevrdir = 0;


    
    const theBall = document.querySelector('.ball');
    const rightPad = document.querySelector('.rpaddle');
    // console.log(myBall.ballX);
    // console.log(theBall);

    draw();

    document.addEventListener("keydown", logKey);
    function logKey(e){
        if (e.code === 'ArrowDown'){
            if (RPP < 500 ){
                // console.log(e.code);
                prevrdir = rDir;
                rDir = 1;
                if (prevrdir != rDir){
                    // console.log('changed direction to down');
                    dRPP = paddleSpeedInit;
                } 
                RPP += dRPP;
                dRPP += paddleAcc;
                rightPad.style.top = `${RPP}px`
            } 
        }

        if (e.code === 'ArrowUp'){
            if (RPP > 0){
                // console.log(e.code);
                prevrdir = rDir;
                rDir = 0;
                if (prevrdir != rDir){
                    // console.log('changed direction to up');
                    dRPP = paddleSpeedInit;
                } 
                RPP -= dRPP;
                dRPP += paddleAcc;
                rightPad.style.top = `${RPP}px`
            }
        }
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function checkHit(){
        if (ballX > 250){
            console.log(`ballY at ${ballY}`);
            // slightly large area for "cyote time"
            if (ballY > RPP - 25 && ballY < RPP+125){
                console.log('hit');
            } else {
                console.log('miss');
            }
        }
    }
     
    function checkInbound(){
        if (ballX > 580){
            ballX = 580; 
            // console.log('reset ball x 580');
        }
        if (ballY > 580){
            ballY = 580; 
            // console.log('reset ball y 580');
        }

        if (ballX < 0){
            ballX = 0; 
            // console.log('reset ball x 0');
        }
        if (ballY < 0){
            ballY = 0; 
            // console.log('reset ball y 0');
        }
    }

    function matchDX(){
        if (dx >= 0){
            dx = Math.sqrt(9.0 - Math.pow(dy, 2));
        } else {
            dx = Math.sqrt(9.0 - Math.pow(dy, 2)) * -1;
        }
    }
    function draw(event) {
        // drawing code
        ballX += dx;
        ballY += dy;
        theBall.style.top = `${ballY}px`;
        theBall.style.left = `${ballX}px`;

        if (ballX > 580 || ballX < 0){
            dx = dx * -1;
            checkHit();
            checkInbound();
        } 

        if (ballY > 580 || ballY < 0){
            dy += getRandomArbitrary(-1,1);
            if (Math.abs(dy) >5 || Math.abs(dy)<1){
                dy = 3; 
                // console.log('dy reset');
            }
            dy = dy * -1;
            checkInbound();
            // matchDX();
            console.log(`dy is ${dy}, dx is ${dx}`);

        } 

      }
      setInterval(draw, 10);
      

      

})();