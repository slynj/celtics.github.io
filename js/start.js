// section selection const
 const main = document.querySelector("#main");
 const quiz = document.querySelector("#quiz")

 function begin() {
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
    
    
 }
