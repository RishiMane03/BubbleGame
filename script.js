var time = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function decreaseScore(){
    score -= 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter  = '';
    for(let i=1; i<=108; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
    var timer = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector("#timerValue").innerHTML = time;
        }else{
            clearInterval(timer);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over Darlo</h1>`
        }
    },1000)
}

/*
    IMP:
    jr apn btn vr click kela ani tya vr eventListner nasel tr mg to
    tejya parent vrti eventListner sodr.
    
    example:
    apn bubble vr click kela pn tya vrti eventListner nhi ahe so to
    tejya parent mhnje ch pbottom vrti eventListner ahe ka check krnr 

*/

document.querySelector("#pbottom")
.addEventListener('click',function(dets){
    //console.log(dets.target); //target to vakti ahe jya vr click kelay
    // dets.target.textContent >>> value in string
    // We need to convert it into Number 
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }else if(clickedNumber !== hitrn){
        decreaseScore();
    }
})

runTimer();
makeBubble();
getNewHit();