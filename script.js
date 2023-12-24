const cactus = document.querySelector('#cactus');
const dino = document.querySelector('#dino');

var run = false;

dino.addEventListener('click', () => {
    if(!run){
    move();

    
    run =  true;}
    else{
        jump();
    }
});

function move() {
    if (!cactus.classList.contains('move')) {
        cactus.classList.add('move');
    }else{
        cactus.classList.remove('move');
    }
}



function jump(event) {
    
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(function() {dino.classList.remove('jump')}, 1500);
    }
}

function isCrashed() {
    let dinoPosition = dino.getBoundingClientRect();
    let cactusPosition = cactus.getBoundingClientRect();

    return dinoPosition.right > cactusPosition.left && dinoPosition.left < cactusPosition.right && dinoPosition.bottom > cactusPosition.top;
}

setInterval(() => {
    if (isCrashed()) {
        run = false;
move();        
        return;
    }
})