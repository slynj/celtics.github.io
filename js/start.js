 const main = document.querySelector("#main");
 const quiz = document.querySelector("#quiz");
 const result = document.querySelector("#result");
 const endPoint = 14;

 function goResult() {
    quiz.style.WebkitAnimation = "fadeOut 0.5s";
    quiz.style.animation = "fadeOut 0.5s";

    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";

        setTimeout(() => {
            quiz.style.display = "none"
            result.style.display = "block"
        }, 200);

    }, 200);
 }

 function addAnswer(answerText, qIdx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    
    a.appendChild(answer);

    answer.classList.add('answerList');
    answer.classList.add('my-2');
    answer.classList.add('py-4');
    answer.classList.add('px-4');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }

        setTimeout(() => {
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }

            goNext(++qIdx);
        }, 450);

       
    }, false);
 }

function goNext(qIdx) {

    if (qIdx+1 === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx + 1) + '%';
}

 function begin(button) {
    button.disabled = true;

    main.style.WebkitAnimation = "fadeOut 0.5s";
    main.style.animation = "fadeOut 0.5s";

    setTimeout(() => {
        quiz.style.WebkitAnimation = "fadeIn 0.5s";
        quiz.style.animation = "fadeIn 0.5s";

        setTimeout(() => {
            main.style.display = "none"
            quiz.style.display = "block"
        }, 200);

    }, 200);
    
    let qIdx = 0;
    goNext(qIdx);
    
 }
