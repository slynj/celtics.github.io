 const main = document.querySelector("#main");
 const quiz = document.querySelector("#quiz");
 const result = document.querySelector("#result");
 const specialNames = ['Jeong', 'El-Kaissi', 'Mahesh', 'Lungidance'];
 const endPoint = 14;
 const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

 function calResult() {
    var result = select.indexOf(Math.max(...select));
    console.log(result);
    return result;
 }

function setResult() {
    let point =  calResult();
    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'src/image-' + point + '.png';

    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc
}

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

    setResult();

   
 }

 function addAnswer(answerText, qIdx, idx) {
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
            var target = qnaList[qIdx].a[idx].type;

            for (let j = 0; j < target.length; j++) {
                if (target[j] === 15 || target[j] === 16 || target[j] === 17 || target[j] === 18) {
                    select[target[j]] += Math.floor(Math.random() * 7) + 5;
                } else {
                    select[target[j]] += 1;
                }
            }

            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }

            goNext(++qIdx);
        }, 450);

       
    }, false);
 }

function goNext(qIdx) {

    if (qIdx === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
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
