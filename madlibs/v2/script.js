(function() {
    "use strict";
    console.log('reading JS');

    let step = 1;

    // let prompts = [
    //     "one",
    //     "two",
    //     "three",
    //     "four"
    // ]

    let prompts = [
        "Verb",
        "Adjective",
        "Noun",
        "Adjective",
        "Number",
        "Noun",
        "Adjective",

        "Adjective",
        "Noun",
        "Verb ending with ing",
        "Adjective",
        "Number",
        "Verb ending with ing",

        "Verb ending with ing",
        "Another verb ending with ing",
        "A third verb ending with ing",
        "Adjective",

        "Adjective",
        "Noun"

    ]
    document.querySelector('#prompt').innerHTML = prompts[0];
    document.querySelector('#progress').innerHTML = `${step}/${prompts.length}`;

    document.querySelector('#reset').addEventListener('click', function(e){
        e.preventDefault();
        // console.log('lol');
        step = 1;
        document.querySelector('#prompt').innerHTML = prompts[step-1];
        document.querySelector('#progress').innerHTML = `${step}/${prompts.length}`;
        document.querySelector('.main').className = 'main hidden';
        document.querySelector('#olG').className = 'overlay showing';
    })


    document.querySelector('#nextG').addEventListener('click', function(e){
        mainStep();
    })
    

    function mainStep(){
        // assign myword with box value
        let myword = document.getElementById("inG").value;
        if (myword == ''){
            console.log('no input');
            alert("please enter a word.");
        } else {
            // change html
            // console.log(myword);
            document.querySelector(`#word${step}`).innerHTML = myword;
            if(myword === 'supersecretpassword' && step == 1){
                document.querySelector('#olG').className = 'overlay hidden';
                document.querySelector('.main').className = 'main showing';    
            }
            //prompt inner html change to prompt array step
            document.querySelector('#prompt').innerHTML = prompts[step]; //updates next
            document.getElementById("inG").value = '';
            if(step == 1){
                //do special case
                document.querySelector('#titleword').innerHTML = myword;
                document.querySelector('#word1a').innerHTML = myword;
            }
            step++;
            document.querySelector('#progress').innerHTML = `${step}/${prompts.length}`;
        }        

        if (step > prompts.length){
            document.querySelector('#olG').className = 'overlay hidden';
            document.querySelector('.main').className = 'main showing';
        }
    }

    document.querySelector('#backG').addEventListener('click', function(e){
        if (step >1){
            step--;
            document.querySelector('#progress').innerHTML = `${step}/${prompts.length}`;
            document.querySelector('#prompt').innerHTML = prompts[step-1];
            console.log('setpped back to' + step);
            document.getElementById("inG").value = '';
        } else {
            console.log('at beginning');
            alert("you can't go back any more");
        }

    })


})();