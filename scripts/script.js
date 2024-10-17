// Define the correct answers for all 36 questions
const correctAnswers = {
    q1: 'B',
    q2: 'C',
    q3: 'A',
    q4: 'B',
    q5: 'A',
    q6: 'B',
    q7: 'B',
    q8: 'C',
    q9: 'A',
    q10: 'C',
    q11: 'B',
    q12: 'C',
    q13: 'A',
    q14: 'A',
    q15: 'B',
    q16: 'A',
    q17: 'B',
    q18: 'A',
    q19: 'C',
    q20: 'A',
    q21: 'C',
    q22: 'A',
    q23: 'A',
    q24: 'B',
    q25: 'C',
    q26: 'A',
    q27: 'B',
    q28: 'A',
    q29: 'B',
    q30: 'A',
    q31: 'C',
    q32: 'A',
    q33: 'B',
    q34: 'A',
    q35: 'C',
    q36: 'B'
};

let score = 0;

function nextPage() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const form1 = document.getElementById("examForm1");
    if (validateForm(form1, 1, 20)) {
        page1.style.display = "none";
        page2.style.display = "block";
    }
}

function submitExam() {
    const form2 = document.getElementById("examForm2");
    if (validateForm(form2, 21, 36)) {
        calculateScore();
        displayResults();
    }
}

function validateForm(form, start, end) {
    for (let i = start; i <= end; i++) {
        const question = form[`q${i}`];
        if (!question || !question.value) {
            alert(`Please answer question ${i}.`);
            return false;
        }
    }
    return true;
}

function calculateScore() {
    score = 0;
    for (let i = 1; i <= 36; i++) {
        const form = (i <= 20) ? document.getElementById("examForm1") : document.getElementById("examForm2");
        const userAnswer = form[`q${i}`].value;
        if (userAnswer === correctAnswers[`q${i}`]) {
            score++;
        }
    }
}

function displayResults() {
    const resultPage = document.getElementById("resultPage");
    const scoreText = document.getElementById("score");
    const feedbackText = document.getElementById("feedback");
    const videoList = document.getElementById("videoList");

    // Hide exam pages
    document.getElementById("page2").style.display = "none";

    // Display score and feedback
    scoreText.innerText = `You scored: ${score}/36`;
    if (score >= 30) {
        feedbackText.innerText = "Excellent work!";
    } else if (score >= 20) {
        feedbackText.innerText = "Good job! A little more practice will make you perfect.";
    } else if (score >= 11) {
        feedbackText.innerText = "Fair effort! Consider reviewing some topics.";
    } else {
        feedbackText.innerText = "Keep practicing! Here are some resources to help you improve.";
    }

    // Show video recommendations if score is between 0 and 10
    if (score <= 10) {
        videoList.style.display = "block";
    } else {
        videoList.style.display = "none";
    }

    // Show results page
    resultPage.style.display = "block";
}

function retakeExam() {
    // Reset all forms and scores
    document.getElementById("examForm1").reset();
    document.getElementById("examForm2").reset();
    score = 0;

    // Hide results page and show first page
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("page1").style.display = "block";
}
