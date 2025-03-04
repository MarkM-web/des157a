window.addEventListener('load', function () {
    "use strict"
    console.log('reading JS');
    const sections = document.querySelectorAll  ('section');
    const headerP = document.querySelector('header p');
    let sectionTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    sections.forEach(function (eachSection){
        sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top + window.scrollY));
    })
    // console.log(sectionTops);

    window.addEventListener('scroll', function () {
        pagetop = window.scrollY + 100;
        // console.log(pagetop);
        if (pagetop > sectionTops[counter]){
            counter ++;
            // console.log(`scrolling down ${counter}`);
        } else if (counter > 1 && pagetop < sectionTops[counter - 1]){
            counter --;
            // console.log(`scrolling up ${counter}`);
        }

        if (counter != prevCounter){
            // console.log(`do stuff for section ${counter}`);
            onSectionChange();
            prevCounter = counter;
        }
    });

    function onSectionChange(){
        const myStyle =`bgcolor${counter}`;
        document.querySelector('body').className = myStyle;

        switch(counter){
            case 1: headerP.innerHTML = "Wera Kraftform Kompakt 25"; break;
            case 2: headerP.innerHTML = "Gerber Multi-Plier 600 Bladeless"; break;
            case 3: headerP.innerHTML = "iFixit Minnow Driver Kit with a lttstore.com Precision Screwdriver"; break;
            case 4: headerP.innerHTML = "Miniware TS80P smart soldering iron"; break;
            case 5: headerP.innerHTML = "The fifth section is on the page"; break;
            case 6: headerP.innerHTML = "The sixth section is on the page"; break;
            case 7: headerP.innerHTML = "The 7th section is on the page"; break;
            case 8: headerP.innerHTML = "Oh No I Don't Have Anything Here Yet"; break;
            default: headerP.innerHTML = "Ooops something went wrong!"; break;
        }

        // for( const eachPost of sections){
        //     eachPost.className = 'offscreen';
        // }
        // document.querySelector(`#section0${counter}`).className = 'onscreen';
        document.querySelector('img').className = `rp${counter}`
        document.querySelector('article').className = `ap${counter}`
    }

    this.document.querySelector('.hv1').addEventListener('mouseover', function(event){
        showOverlay(1);
    });

    this.document.querySelector('.hv1').addEventListener('mouseout', function(){
        hideOverlay(1);
    });

    function showOverlay(index){
        console.log(`we have hover on ${index}`);
        document.querySelector(`.ig${index}`).style.opacity = 1;
    }

    function hideOverlay(index){
        console.log(`we have left ${index}`);
        document.querySelector(`.ig${index}`).style.opacity = 0;
    }




    // window.addEventListener('resize', function () {
    //     clearTimeout(doneResizing);
    //     doneResizing = setTimeout(function () {
    //         // console.log(window.innerWidth);
    //         resetPagePosition();
    //     }, 500);
    // });


    // function resetPagePosition() {
    //     sectionTops = [];
    //     sections.forEach(function (eachSection) {
    //         sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
    //     });

    //     const pagePosition = window.scrollY + sectionTops[0] + 10;
    //     counter = 0;
    //     sectionTops.forEach(function (eachSection) { 
    //         if (pagePosition > eachSection) { 
    //             counter++; 
    //         }
    //     });
    //     console.log(`counter is now ${counter}`);

    //     if (counter != prevCounter) {
    //         // do stuff to the page here
    //         onSectionChange();
    //         // reset the counter for the next section...
    //         prevCounter = counter;
    //     }
        
    // }


});