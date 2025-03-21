(function (){
    "use strict";
    console.log('reading js')

    const startGame = document.querySelector('#startgame');
    const resetGame = document.querySelector('#resetgame')
    // const gameControl = document.querySelector('#gamecontrol');
    // const game = document.querySelector('#game');
    // const score = document.querySelector('#score');
    // const actionArea = document.querySelector('#actions');

    const infoOverlay = document.querySelector('.intro');
    const winnerOverlay = document.querySelector('.winner')
    const gameTable = document.querySelector('.table');
    const dice1 = document.querySelector('#dice1');
    const dice2 = document.querySelector('#dice2');
    const p1roll = document.querySelector('#p1roll');
    const p2roll = document.querySelector('#p2roll');
    const p1pass = document.querySelector('#p1pass');
    const p2pass = document.querySelector('#p2pass');

    const score1 = document.querySelector('.score1');
    const score2 = document.querySelector('.score2');
    const winnerID = document.querySelector('.winnerid');



    let isActive = false;


    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
               '4die.png', '5die.png', '6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29,
        mustroll: true
    };
    

    startGame.addEventListener('click', function(){
        console.log('pressed start');
        infoOverlay.classList.replace('shown', 'hidden')
        gameData.index = Math.round(Math.random()) + 1;
        // disable start button, enable reset button
        startGame.disabled = true;
        resetGame.disabled = false;
        updateScoreDisplay();
        selectPlayer();
    });

    resetGame.addEventListener('click', function(){
        console.log('pressed reset');
        infoOverlay.classList.replace('hidden', 'shown');
        winnerOverlay.classList.replace('shown', 'hidden');

        gameData.score = [0,0];
        updateScoreDisplay();
        // enable start button, disable reset button
        dice1.innerHTML = `<img src="images/blankdie.png" alt="The first die">`
        dice2.innerHTML = `<img src="images/blankdie.png" alt="The second die">`
        startGame.disabled = false;
        resetGame.disabled = true;

    
    });

    function selectPlayer(){
        console.log('running select player')
        updateTableColor();
        isActive = true;
        // setUpTurn();
    }

    function updateTableColor(){
        console.log('updating table colors');
        if (gameData.index === 1){
            console.log('p1 colors');
            // console.log(gameTable);
            // gameTable.style.background-color = '';
            gameTable.classList = ['table table1'];
            p1roll.disabled = false;
            p1pass.disabled = false;
            p2roll.disabled = true;
            p2pass.disabled = true;
            // gameData.index = 1;
        } else if  (gameData.index === 2){
            console.log('p2 colors');
            gameTable.classList = ['table table2'];
            p1roll.disabled = true;
            p1pass.disabled = true;
            p2roll.disabled = false;
            p2pass.disabled = false;
            // gameData.index = 2;
        } else {
            console.log('error');
        }

    }

    p1roll.addEventListener('click', function(){/*stuff goes here*/
        if(gameData.index === 1){
            rollDice();
        } else {
            console.log('not your turn')
        }
    })

    p2roll.addEventListener('click', function(){/*stuff goes here*/
        if(gameData.index === 2){
            rollDice();
        } else {
            console.log('not your turn')
        }
    })

    p1pass.addEventListener('click', function(){
        swapPlayer();
    })

    p2pass.addEventListener('click', function(){
        swapPlayer();
    })


    function rollDice(){
        console.log('throwing for player ' + gameData.index);
        
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(`player ${gameData.index} rolled a sum ${gameData.rollSum}`)
        
        dice1.innerHTML = `<img src="images/${gameData.dice[gameData.roll1-1]}" alt="The first die">`
        dice2.innerHTML = `<img src="images/${gameData.dice[gameData.roll2-1]}" alt="The second die">`

        if( gameData.rollSum === 2 ){
            //snake eyes
            console.log('snake eyes');
            gameData.score[gameData.index-1] = 0;
            swapPlayer();
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            // one is 1
            console.log('one is 1')
            swapPlayer();
        } else {
            // if neither die is a 1...
            console.log('neither is 1')
            gameData.score[gameData.index-1] += gameData.rollSum;
            console.log(`player ${gameData.index} now has ${gameData.score[gameData.index-1]} pts`);
        }
        checkWinningCondition();
        updateScoreDisplay();
    }

    function swapPlayer(){
        if (gameData.index === 1){
            gameData.index = 2;
            console.log('switched to p2')
        } else if (gameData.index === 2){
            gameData.index=1;
            console.log('switched to p1')
        }
        updateTableColor();
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index-1]>gameData.gameEnd){
            console.log(`player ${gameData.index} has won`);
            winnerID.innerHTML = gameData.index;
            winnerOverlay.classList.replace('hidden', 'shown');
            p1roll.disabled = true;
            p1pass.disabled = true;
            p2roll.disabled = true;
            p2pass.disabled = true;
        }
    }

    function updateScoreDisplay(){
        score1.innerHTML = gameData.score[0];
        score2.innerHTML = gameData.score[1];
    }
    


})();