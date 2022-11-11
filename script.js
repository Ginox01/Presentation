const pages = document.querySelectorAll('#app-slider > .page');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
let numberOfPage = 0;

btnLeft.addEventListener('click',moveToLeft)
btnRight.addEventListener('click',moveToRight)



function manageTheButtons(){
    numberOfPage == 0 ? btnLeft.style.display = "none" : btnLeft.style.display = "block";
    numberOfPage == 10 ? btnRight.style.display = "none" : btnRight.style.display = "block"

}


function moveToLeft(){
    
}

function moveToRight(){
    let thisPage = pages[numberOfPage];
    thisPage.style.display = "none";
    numberOfPage++
    console.log(numberOfPage)
    manageTheButtons()
}
