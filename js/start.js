 const main = document.querySelector("#main");
 const quiz = document.querySelector("#quiz");
 const result = document.querySelector("#result");
 const specialNames = ['Jeong', 'El-Kaissi', 'Mahesh', 'Lungidance'];
 const endPoint = 14;
 const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

 function calResult() {
    // var pointArray = [
    //     { name: 'Tatum', value: 0, key: 0 },
    //     { name: 'Smart', value: 0, key: 1 },
    //     { name: 'Brown', value: 0, key: 2 },
    //     { name: 'Horford', value: 0, key: 3 },
    //     { name: 'White', value: 0, key: 4 },
    //     { name: 'Williams', value: 0, key: 5 },
    //     { name: 'Hauser', value: 0, key: 6 },
    //     { name: 'Pritchard', value: 0, key: 7 },
    //     { name: 'Porzingis', value: 0, key: 8 },
    //     { name: 'Holiday', value: 0, key: 9 },
    //     { name: 'Brissett', value: 0, key: 10 },
    //     { name: 'Walsh', value: 0, key: 11 },
    //     { name: 'Kornet', value: 0, key: 12 },
    //     { name: 'Champagnie', value: 0, key: 13 },
    //     { name: 'Davison', value: 0, key: 14 },
    //     { name: 'Jeong', value: 0, key: 15 },
    //     { name: 'El-Kaissi', value: 0, key: 16 },
    //     { name: 'Mahesh', value: 0, key: 17 },
    //     { name: 'Lungidance', value: 0, key: 18 }
    // ]

    // for (let i = 0; i < endPoint; i++) {
    //     var target = qnaList[i].a[select[i]]

    //     for (let j = 0; j < target.type.length; j++) {
    //         for (let k = 0; k < pointArray.length; k++) {
    //             if (target.type[j] === pointArray[k].name) {
                    
    //                 if (specialNames.includes(pointArray[k].name)) {
    //                     pointArray[k].value += Math.floor(Math.random() * 7) + 5;
    //                 } else {
    //                     pointArray[k].value += 1;
    //                 }
                        
    //             }
    //         }
    //     }
    // }

    // var resultArray = pointArray.sort(function (a, b) {
    //     if (a.value > b.value) {
    //         return -1;
    //     }
        
    //     if (a.value < b.value) {
    //         return 1;
    //     }

    //     return 0;
    // });

    var result = select.indexOf(Math.max(...select));
    console.log(result);
    return result;


    // console.log(pointArray);
    // console.log(resultArray);
    // let resultWord = resultArray[0].key;
    // return resultWord;
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

    calResult();

    // console.log(calResult());
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
