// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons. 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."


// function tick() {
//     counter.innerHTML ++;
// }
// //why no parentheses?????????? HALP

// setInterval(tock, 1000)


// function tock() {
//     clearInterval()
// }

const counter = document.getElementById("counter");

let timer = setInterval(second, 1000)
let running = true

function second() {
   counter.innerHTML ++;
  }
  
function pauseTimer() {
    clearInterval(timer);
  }

function startTimer() {
    timer = setInterval(second, 1000);
}

//pause button

pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function() {
    if (running) {
        pauseTimer();
        running = false;
        pauseButton.innerHTML = "resume";
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;

    } else {
        startTimer();
        running = true;
        pauseButton.innerHTML = "pause"
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
    }
})

//plus and minus buttons -- WHY CAN I NOT DO +1 OR -1???? WHY ONLY ++ WORK

minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function() {
    counter.innerHTML --;
})
plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function() {
    counter.innerHTML ++;
})

//like button

let likeList = document.getElementsByClassName("likes")[0];
let likeButton = document.getElementById("heart");

likeButton.addEventListener("click", function() {
    if (!document.getElementById(`${counter.innerHTML}-like`)) {
            let liItem = document.createElement('li');
            liItem.id = `${counter.innerHTML}-like`;
            liItem.innerHTML = `${counter.innerHTML} has been liked 1 time!`;
            liItem.likes = 1;
            likeList.appendChild(liItem);
    } else {
        let liItem = document.getElementById(`${counter.innerHTML}-like`);
        liItem.likes ++;
        liItem.innerHTML = `${counter.innerHTML} has been liked ${liItem.likes} times!`;
    }
})

//comments


document.getElementById('submit').addEventListener("click", function(event) {
    event.preventDefault();

    let div = document.createElement('div');
    let commentText = document.getElementById('comment-input');
    div.innerHTML = commentText.value;
    document.getElementById("list").appendChild(div);
    commentText.value = "";
})