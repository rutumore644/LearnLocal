/* =========================================
   LEARNLOCAL - MAIN JAVASCRIPT
   ========================================= */


/* =========================================
   VOCABULARY DATA
   ========================================= */

const vocabulary = {

    Marathi: [
        {
            english: "Hello",
            translation: "नमस्कार",
            pronunciation: "Namaskar",
            category: "Greetings",
            meaning: "A common greeting."
        },

        {
            english: "Thank you",
            translation: "धन्यवाद",
            pronunciation: "Dhanyavaad",
            category: "Greetings",
            meaning: "An expression of gratitude."
        },

        {
            english: "Water",
            translation: "पाणी",
            pronunciation: "Paani",
            category: "Daily Life",
            meaning: "A liquid used for drinking."
        },

        {
            english: "House",
            translation: "घर",
            pronunciation: "Ghar",
            category: "Places",
            meaning: "A place where people live."
        },

        {
            english: "Mother",
            translation: "आई",
            pronunciation: "Aai",
            category: "Family",
            meaning: "A female parent."
        },

        {
            english: "Father",
            translation: "वडील",
            pronunciation: "Vadil",
            category: "Family",
            meaning: "A male parent."
        },

        {
            english: "Book",
            translation: "पुस्तक",
            pronunciation: "Pustak",
            category: "Objects",
            meaning: "A written or printed work."
        },

        {
            english: "Food",
            translation: "अन्न",
            pronunciation: "Anna",
            category: "Food",
            meaning: "Something people eat."
        }
    ],


    Hindi: [
        {
            english: "Hello",
            translation: "नमस्ते",
            pronunciation: "Namaste",
            category: "Greetings",
            meaning: "A common greeting."
        },

        {
            english: "Thank you",
            translation: "धन्यवाद",
            pronunciation: "Dhanyavaad",
            category: "Greetings",
            meaning: "An expression of gratitude."
        },

        {
            english: "Water",
            translation: "पानी",
            pronunciation: "Paani",
            category: "Daily Life",
            meaning: "A liquid used for drinking."
        },

        {
            english: "House",
            translation: "घर",
            pronunciation: "Ghar",
            category: "Places",
            meaning: "A place where people live."
        },

        {
            english: "Mother",
            translation: "माँ",
            pronunciation: "Maa",
            category: "Family",
            meaning: "A female parent."
        },

        {
            english: "Father",
            translation: "पिता",
            pronunciation: "Pita",
            category: "Family",
            meaning: "A male parent."
        }
    ],


    French: [
        {
            english: "Hello",
            translation: "Bonjour",
            pronunciation: "Bon-zhoor",
            category: "Greetings",
            meaning: "A common greeting."
        },

        {
            english: "Thank you",
            translation: "Merci",
            pronunciation: "Mer-see",
            category: "Greetings",
            meaning: "An expression of gratitude."
        },

        {
            english: "Water",
            translation: "Eau",
            pronunciation: "Oh",
            category: "Daily Life",
            meaning: "A liquid used for drinking."
        },

        {
            english: "House",
            translation: "Maison",
            pronunciation: "May-zon",
            category: "Places",
            meaning: "A place where people live."
        }
    ],


    Korean: [
        {
            english: "Hello",
            translation: "안녕하세요",
            pronunciation: "Annyeonghaseyo",
            category: "Greetings",
            meaning: "A polite greeting."
        },

        {
            english: "Thank you",
            translation: "감사합니다",
            pronunciation: "Gamsahamnida",
            category: "Greetings",
            meaning: "An expression of gratitude."
        },

        {
            english: "Water",
            translation: "물",
            pronunciation: "Mul",
            category: "Daily Life",
            meaning: "A liquid used for drinking."
        },

        {
            english: "House",
            translation: "집",
            pronunciation: "Jip",
            category: "Places",
            meaning: "A place where people live."
        }
    ]

};


/* =========================================
   LESSON DATA
   ========================================= */

const lessons = {

    Marathi: [

        {
            title: "Greetings",
            description: "Learn common Marathi greetings.",
            words: ["Hello", "Thank you"]
        },

        {
            title: "Everyday Words",
            description: "Learn useful everyday words.",
            words: ["Water", "House", "Book"]
        },

        {
            title: "Family",
            description: "Learn common family vocabulary.",
            words: ["Mother", "Father"]
        },

        {
            title: "Food",
            description: "Learn basic food vocabulary.",
            words: ["Water", "Food"]
        },

        {
            title: "Daily Conversation",
            description: "Practice useful everyday expressions.",
            words: ["Hello", "Thank you"]
        }

    ],


    Hindi: [

        {
            title: "Greetings",
            description: "Learn common Hindi greetings.",
            words: ["Hello", "Thank you"]
        },

        {
            title: "Everyday Words",
            description: "Learn useful Hindi words.",
            words: ["Water", "House"]
        },

        {
            title: "Family",
            description: "Learn common family words.",
            words: ["Mother", "Father"]
        }

    ],


    French: [

        {
            title: "Greetings",
            description: "Learn common French greetings.",
            words: ["Hello", "Thank you"]
        },

        {
            title: "Everyday Words",
            description: "Learn useful French words.",
            words: ["Water", "House"]
        }

    ],


    Korean: [

        {
            title: "Greetings",
            description: "Learn common Korean greetings.",
            words: ["Hello", "Thank you"]
        },

        {
            title: "Everyday Words",
            description: "Learn useful Korean words.",
            words: ["Water", "House"]
        }

    ]

};


/* =========================================
   PROGRESS
   ========================================= */

function getProgress() {

    return JSON.parse(
        localStorage.getItem("learnLocalProgress")
        || '{"lessons":0,"attempts":0,"best":0}'
    );

}


function saveProgress(progress) {

    localStorage.setItem(
        "learnLocalProgress",
        JSON.stringify(progress)
    );

}


/* =========================================
   LESSON PAGE
   ========================================= */

function initLessons() {

    const lessonGrid =
        document.getElementById("lessonGrid");

    if (!lessonGrid) {
        return;
    }


    const languageSelect =
        document.getElementById("lessonLanguage");

    const lessonDetail =
        document.getElementById("lessonDetail");

    const lessonNumber =
        document.getElementById("lessonNumber");

    const lessonTitle =
        document.getElementById("lessonTitle");

    const lessonDescription =
        document.getElementById("lessonDescription");

    const lessonWords =
        document.getElementById("lessonWords");


    function displayLessons() {

        const language =
            languageSelect.value;

        const languageLessons =
            lessons[language] || [];

        lessonGrid.innerHTML = "";


        languageLessons.forEach(
            (lesson, index) => {

                const card =
                    document.createElement("article");

                card.className =
                    "lesson-card";


                card.innerHTML = `

                    <p class="eyebrow">
                        LESSON ${index + 1}
                    </p>

                    <h2>
                        ${lesson.title}
                    </h2>

                    <p>
                        ${lesson.description}
                    </p>

                    <button
                        class="button secondary"
                        type="button">

                        Open Lesson

                    </button>

                `;


                const openButton =
                    card.querySelector("button");


                openButton.addEventListener(
                    "click",
                    function () {

                        openLesson(
                            language,
                            lesson,
                            index
                        );

                    }
                );


                lessonGrid.appendChild(card);

            }
        );

    }


    function openLesson(
        language,
        lesson,
        index
    ) {

        lessonNumber.textContent =
            `LESSON ${index + 1}`;


        lessonTitle.textContent =
            lesson.title;


        lessonDescription.textContent =
            lesson.description;


        lessonWords.innerHTML = "";


        const languageVocabulary =
            vocabulary[language] || [];


        lesson.words.forEach(
            function (word) {

                const item =
                    languageVocabulary.find(
                        function (vocabularyItem) {

                            return vocabularyItem.english
                                === word;

                        }
                    );


                if (!item) {
                    return;
                }


                const row =
                    document.createElement("div");


                row.className =
                    "word-row";


                row.innerHTML = `

                    <strong>
                        ${item.english}
                    </strong>

                    <strong>
                        ${item.translation}
                    </strong>

                    <span>
                        ${item.pronunciation}
                    </span>

                `;


                lessonWords.appendChild(row);

            }
        );


        lessonGrid.classList.add("hidden");

        lessonDetail.classList.remove("hidden");

    }


    languageSelect.addEventListener(
        "change",
        displayLessons
    );


    document
        .getElementById("closeLesson")
        .addEventListener(
            "click",
            function () {

                lessonDetail.classList.add(
                    "hidden"
                );

                lessonGrid.classList.remove(
                    "hidden"
                );

            }
        );


    document
        .getElementById("completeLesson")
        .addEventListener(
            "click",
            function () {

                const progress =
                    getProgress();


                progress.lessons += 1;


                saveProgress(progress);


                alert(
                    "Lesson marked as completed!"
                );

            }
        );


    displayLessons();

}


/* =========================================
   VOCABULARY PAGE
   ========================================= */

function initVocabulary() {

    const vocabularyBody =
        document.getElementById(
            "vocabularyBody"
        );


    if (!vocabularyBody) {
        return;
    }


    const searchBox =
        document.getElementById(
            "vocabularySearch"
        );


    const languageSelect =
        document.getElementById(
            "vocabularyLanguage"
        );


    function displayVocabulary() {

        const searchText =
            searchBox.value
                .toLowerCase()
                .trim();


        const selectedLanguage =
            languageSelect.value;


        const data =
            vocabulary[selectedLanguage] || [];


        vocabularyBody.innerHTML = "";


        const filteredData =
            data.filter(
                function (item) {

                    const searchableText = `

                        ${item.english}
                        ${item.translation}
                        ${item.category}
                        ${item.meaning}

                    `.toLowerCase();


                    return searchableText.includes(
                        searchText
                    );

                }
            );


        filteredData.forEach(
            function (item) {

                const row =
                    document.createElement("tr");


                row.innerHTML = `

                    <td>
                        ${item.english}
                    </td>

                    <td>
                        ${item.translation}
                    </td>

                    <td>
                        ${item.pronunciation}
                    </td>

                    <td>
                        ${item.category}
                    </td>

                    <td>
                        ${item.meaning}
                    </td>

                `;


                vocabularyBody.appendChild(row);

            }
        );

    }


    searchBox.addEventListener(
        "input",
        displayVocabulary
    );


    languageSelect.addEventListener(
        "change",
        displayVocabulary
    );


    displayVocabulary();

}


/* =========================================
   TRANSLATOR PAGE
   ========================================= */

function initTranslator() {

    const input =
        document.getElementById(
            "translateInput"
        );


    if (!input) {
        return;
    }


    const sourceLanguage =
        document.getElementById(
            "sourceLanguage"
        );


    const targetLanguage =
        document.getElementById(
            "targetLanguage"
        );


    const translationResult =
        document.getElementById(
            "translationResult"
        );


    const pronunciationResult =
        document.getElementById(
            "pronunciationResult"
        );


    const meaningResult =
        document.getElementById(
            "meaningResult"
        );


    const speechStatus =
        document.getElementById(
            "speechStatus"
        );


    function translateText() {

        const enteredText =
            input.value
                .trim()
                .toLowerCase();


        if (!enteredText) {

            translationResult.textContent =
                "Please enter a word.";

            pronunciationResult.textContent =
                "—";

            meaningResult.textContent =
                "—";

            return;

        }


        const targetVocabulary =
            vocabulary[
                targetLanguage.value
            ] || [];


        const directMatch =
            targetVocabulary.find(
                function (item) {

                    return item.english
                        .toLowerCase()
                        === enteredText;

                }
            );


        if (
            sourceLanguage.value === "English"
            && directMatch
        ) {

            translationResult.textContent =
                directMatch.translation;


            pronunciationResult.textContent =
                directMatch.pronunciation;


            meaningResult.textContent =
                directMatch.meaning;


            return;

        }


        const reverseMatch =
            targetVocabulary.find(
                function (item) {

                    return item.translation
                        .toLowerCase()
                        === enteredText;

                }
            );


        if (reverseMatch) {

            translationResult.textContent =
                reverseMatch.english;


            pronunciationResult.textContent =
                reverseMatch.pronunciation;


            meaningResult.textContent =
                reverseMatch.meaning;


            return;

        }


        translationResult.textContent =
            "Translation not found";


        pronunciationResult.textContent =
            "—";


        meaningResult.textContent =
            "This word is not currently available in the demo vocabulary.";

    }


    document
        .getElementById("translateButton")
        .addEventListener(
            "click",
            translateText
        );


    document
        .getElementById("clearButton")
        .addEventListener(
            "click",
            function () {

                input.value = "";

                translationResult.textContent =
                    "—";

                pronunciationResult.textContent =
                    "—";

                meaningResult.textContent =
                    "—";

                speechStatus.textContent =
                    "";

            }
        );


    document
        .getElementById("swapLanguages")
        .addEventListener(
            "click",
            function () {

                const oldSource =
                    sourceLanguage.value;


                sourceLanguage.value =
                    targetLanguage.value;


                targetLanguage.value =
                    oldSource;


                translationResult.textContent =
                    "—";

                pronunciationResult.textContent =
                    "—";

                meaningResult.textContent =
                    "—";

            }
        );


    /*
       SPEECH INPUT

       This uses the browser's speech
       recognition feature when available.
    */

    document
        .getElementById("speakButton")
        .addEventListener(
            "click",
            function () {

                const SpeechRecognition =
                    window.SpeechRecognition
                    ||
                    window.webkitSpeechRecognition;


                if (!SpeechRecognition) {

                    speechStatus.textContent =
                        "Speech recognition is not supported by this browser.";

                    return;

                }


                const recognition =
                    new SpeechRecognition();


                if (
                    sourceLanguage.value
                    === "Marathi"
                ) {

                    recognition.lang =
                        "mr-IN";

                } else if (
                    sourceLanguage.value
                    === "Hindi"
                ) {

                    recognition.lang =
                        "hi-IN";

                } else if (
                    sourceLanguage.value
                    === "French"
                ) {

                    recognition.lang =
                        "fr-FR";

                } else if (
                    sourceLanguage.value
                    === "Korean"
                ) {

                    recognition.lang =
                        "ko-KR";

                } else {

                    recognition.lang =
                        "en-US";

                }


                recognition.interimResults =
                    false;


                recognition.maxAlternatives =
                    1;


                speechStatus.textContent =
                    "Listening... Speak now.";


                recognition.onresult =
                    function (event) {

                        input.value =
                            event
                                .results[0][0]
                                .transcript;


                        speechStatus.textContent =
                            "Speech captured successfully.";


                        translateText();

                    };


                recognition.onerror =
                    function () {

                        speechStatus.textContent =
                            "Speech recognition could not complete.";

                    };


                recognition.start();

            }
        );

}


/* =========================================
   QUIZ DATA
   ========================================= */

const quizQuestions = [

    {
        question:
            "What is 'Water' in Marathi?",

        options: [
            "घर",
            "पाणी",
            "आई",
            "पुस्तक"
        ],

        answer:
            "पाणी"
    },


    {
        question:
            "What is 'Mother' in Marathi?",

        options: [
            "आई",
            "घर",
            "अन्न",
            "पाणी"
        ],

        answer:
            "आई"
    },


    {
        question:
            "What is 'House' in Marathi?",

        options: [
            "पुस्तक",
            "घर",
            "आई",
            "वडील"
        ],

        answer:
            "घर"
    },


    {
        question:
            "What is 'Book' in Marathi?",

        options: [
            "अन्न",
            "पाणी",
            "पुस्तक",
            "घर"
        ],

        answer:
            "पुस्तक"
    },


    {
        question:
            "What is 'Hello' in Marathi?",

        options: [
            "धन्यवाद",
            "नमस्कार",
            "पाणी",
            "आई"
        ],

        answer:
            "नमस्कार"
    }

];


/* =========================================
   QUIZ
   ========================================= */

function initQuiz() {

    const questionElement =
        document.getElementById(
            "quizQuestion"
        );


    if (!questionElement) {
        return;
    }


    let currentQuestion = 0;

    let score = 0;

    let selectedAnswer = null;


    const optionBox =
        document.getElementById(
            "quizOptions"
        );


    const feedback =
        document.getElementById(
            "quizFeedback"
        );


    const nextButton =
        document.getElementById(
            "nextQuestion"
        );


    const progressBar =
        document.getElementById(
            "quizProgress"
        );


    function displayQuestion() {

        const question =
            quizQuestions[
                currentQuestion
            ];


        document.getElementById(
            "questionNumber"
        ).textContent =
            `Question ${currentQuestion + 1} of ${quizQuestions.length}`;


        document.getElementById(
            "quizScore"
        ).textContent =
            `Score: ${score}`;


        questionElement.textContent =
            question.question;


        optionBox.innerHTML = "";

        feedback.textContent = "";

        selectedAnswer = null;


        nextButton.textContent =
            "Check Answer";


        progressBar.style.width =
            `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;


        question.options.forEach(
            function (option) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type = "button";

                button.className =
                    "quiz-option";


                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function () {

                        document
                            .querySelectorAll(
                                ".quiz-option"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        button.classList.add(
                            "selected"
                        );


                        selectedAnswer =
                            option;

                    }
                );


                optionBox.appendChild(button);

            }
        );

    }


    nextButton.addEventListener(
        "click",
        function () {

            if (!selectedAnswer) {

                feedback.textContent =
                    "Please select an answer.";

                return;

            }


            const current =
                quizQuestions[
                    currentQuestion
                ];


            if (
                nextButton.textContent
                === "Check Answer"
            ) {

                if (
                    selectedAnswer
                    === current.answer
                ) {

                    score += 1;

                    feedback.textContent =
                        "Correct! 🎉";

                } else {

                    feedback.textContent =
                        `Correct answer: ${current.answer}`;

                }


                if (
                    currentQuestion
                    === quizQuestions.length - 1
                ) {

                    nextButton.textContent =
                        "Finish Quiz";

                } else {

                    nextButton.textContent =
                        "Next Question";

                }


                return;

            }


            if (
                nextButton.textContent
                === "Next Question"
            ) {

                currentQuestion += 1;

                displayQuestion();

                return;

            }


            if (
                nextButton.textContent
                === "Finish Quiz"
            ) {

                finishQuiz();

            }

        }
    );


    function finishQuiz() {

        document
            .getElementById("quizCard")
            .classList.add("hidden");


        document
            .getElementById("quizResult")
            .classList.remove("hidden");


        const percentage =
            Math.round(
                (score / quizQuestions.length)
                * 100
            );


        document.getElementById(
            "finalScore"
        ).textContent =
            `${score} / ${quizQuestions.length}`;


        document.getElementById(
            "resultMessage"
        ).textContent =

            percentage >= 80
                ? "Great work! Keep practicing."

                : percentage >= 50
                    ? "Good attempt. Review the lessons and try again."

                    : "Keep practicing. You can improve with another attempt.";


        const progress =
            getProgress();


        progress.attempts += 1;


        progress.best =
            Math.max(
                progress.best,
                percentage
            );


        saveProgress(progress);

    }


    displayQuestion();

}


/* =========================================
   PROGRESS PAGE
   ========================================= */

function initProgress() {

    const lessonProgress =
        document.getElementById(
            "lessonProgress"
        );


    if (!lessonProgress) {
        return;
    }


    const progress =
        getProgress();


    lessonProgress.textContent =
        progress.lessons;


    document.getElementById(
        "quizAttempts"
    ).textContent =
        progress.attempts;


    document.getElementById(
        "bestScore"
    ).textContent =
        `${progress.best}%`;

}


/* =========================================
   FEEDBACK PAGE
   ========================================= */

function initFeedback() {

    const feedbackForm =
        document.getElementById(
            "feedbackForm"
        );


    if (!feedbackForm) {
        return;
    }


    feedbackForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            document.getElementById(
                "feedbackMessage"
            ).textContent =
                "Thank you! Your feedback has been recorded for this prototype.";


            feedbackForm.reset();

        }
    );

}


/* =========================================
   START ALL FEATURES
   ========================================= */

initLessons();

initVocabulary();

initTranslator();

initQuiz();

initProgress();

initFeedback();
