let count = 0;
let interval;

const countValue = document.getElementById("count");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {

    countValue.textContent = count;

    if(count > 0){
        countValue.style.color = "green";
    }
    else if(count < 0){
        countValue.style.color = "red";
    }
    else{
        countValue.style.color = "#333";
    }

}

function startIncreasing(){

    count++;

    updateCounter();

    interval = setInterval(function(){

        count++;

        updateCounter();

    },100);

}

function startDecreasing(){

    count--;

    updateCounter();

    interval = setInterval(function(){

        count--;

        updateCounter();

    },100);

}

function stopCounter(){

    clearInterval(interval);

}

increaseBtn.addEventListener("mousedown", startIncreasing);

decreaseBtn.addEventListener("mousedown", startDecreasing);

increaseBtn.addEventListener("mouseup", stopCounter);

decreaseBtn.addEventListener("mouseup", stopCounter);

increaseBtn.addEventListener("mouseleave", stopCounter);

decreaseBtn.addEventListener("mouseleave", stopCounter);

resetBtn.addEventListener("click", function(){

    count = 0;

    updateCounter();

});