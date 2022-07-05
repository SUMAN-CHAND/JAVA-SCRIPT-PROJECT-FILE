let score=0;
cross=true;
    audio= new Audio('music.mp3');
    audiogo= new Audio('gameover.mp3');
    setTimeout(() => {
        audio.play();
    }, 1000);
document.onkeydown = function(e){
    // console.log("key code is : ",e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    else if(e.keyCode==39){
        dino=document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinoX+112+"px";
        
    }
    else if(e.keyCode==37){
        dino=document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinoX-112+"px";
        
    }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    btn=document.querySelector('.btn');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    // console.log(offsetX,offsetY);
    if (offsetX<73 && offsetY<50 ) {
        gameover.innerHTML='Game Over - Restart To Play Again';
        btn.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
        }, 1000);
    }
    else if(offsetX<145 && cross){
            score+=1;
            updatescore(score);
            cross=false;
            setTimeout(() => {
                cross=true;
            }, 1000);
            setTimeout(() => {
                aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newDur=aniDur-0.01;
        obstacle.style.animationDuration= newDur+'s';
            }, 700);
        
    }
}, 10);
function updatescore(score){
    scorecCont.innerHTML = "Your score : "+score
}