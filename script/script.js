
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const btnOpenModal = document.querySelector('#btnOpenModal'),
        modalBlock = document.querySelector('#modalBlock'),
        btnCloseModal = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#question'),
        formAnswers = document.querySelector('#formAnswers');

    btnOpenModal.addEventListener('click', (e) => {
        modalBlock.classList.add('d-block');
        playTest();
    });

    btnCloseModal.addEventListener('click', (e) => {
        modalBlock.classList.remove('d-block');
    });

    const playTest = () => {
        let questionsArray = [
            { "question": "Какого цвета бургер вы хотите?",
                "answers": [
                    {
                        title: 'Стандарт',
                        url: './image/burger.png'
                    },
                    {
                        title: 'Черный',
                        url: './image/burgerBlack.png'
                    }
                ]
            }
        ];

        const renderQuestions = (question, answers) => {
            questionTitle.textContent = question;
            
            formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answers[0].url}" alt="burger">
                  <span>${answers[0].title}</span>
                </label>
              </div>
              <div class="answers-item d-flex justify-content-center">
                <input type="radio" id="answerItem2" name="answer" class="d-none">
                <label for="answerItem2" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answers[1].url}" alt="burger">
                  <span>${answers[1].title}</span>
                </label>
            </div>
            `;
        };
        let {question, answers} = questionsArray[0];
        renderQuestions(question, answers);
    };
});