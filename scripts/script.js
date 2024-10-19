// script.js

// Array of correct answers for the exam
const correctAnswers = {
    q1: 'B',
    q2: 'C',
    q3: 'A',
    q4: 'B',
    q5: 'A',
    q6: 'B',
    q7: 'B',
    q8: 'C',
    q9: 'B',
    q10: 'A',
    q11: 'C',
    q12: 'B',
    q13: 'A',
    q14: 'A',
    q15: 'B',
    q16: 'C',
    q17: 'B',
    q18: 'A',
    q19: 'C',
    q20: 'A',
    q21: 'C',
    q22: 'A',
    q23: 'B',
    q24: 'C',
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

// Function to calculate the score based on answers
function calculateScore(formId) {
    const form = document.getElementById(formId);
    let score = 0;

    // Iterate over the correct answers and check the selected options
    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const selectedAnswer = form.elements[question]?.value;
        if (selectedAnswer === correctAnswer) {
            score++;
        }
    }

    return score;
}

// Function to display the result and feedback
function showResults(score) {
    const resultPage = document.getElementById("resultPage");
    const scoreText = document.getElementById("score");
    const feedbackText = document.getElementById("feedback");
    const videoList = document.getElementById("videoList");

    resultPage.style.display = "block"; // Show result page
    scoreText.textContent = `Your score is: ${score}/36`;

    // Display feedback based on score
    if (score >= 30) {
        feedbackText.innerHTML = 'Congratulations! You earned a <strong>Trophy!</strong>';
        feedbackText.innerHTML += '<br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1AT5EPun5HnuA6cvGkjaEFcycnM5b0408A&s" alt="Trophy" style="width:250px;">';
    } else if (score >= 20) {
        feedbackText.textContent = "Good job! Keep practicing!";
    } else {
        feedbackText.textContent = "Keep learning! You can improve!";
    }

    // Show recommended videos if the score is less than 30
    if (score < 30) {
        videoList.style.display = "block";
    } else {
        videoList.style.display = "none";
    }
}

// Function to handle page navigation (Page 1 to Page 2)
function nextPage() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    const form1 = document.getElementById("examForm1");

    // Check if all fields on page 1 are filled
    if (form1.checkValidity()) {
        page1.style.display = "none";
        page2.style.display = "block";
    } else {
        alert("Please fill out all required fields on this page.");
    }
}

// Function to submit the exam and show the result
function submitExam() {
    const page2 = document.getElementById("page2");
    const form1 = document.getElementById("examForm1");
    const form2 = document.getElementById("examForm2");

    // Calculate total score from both pages
    const score = calculateScore('examForm1') + calculateScore('examForm2');

    // Hide exam pages and show the result
    page2.style.display = "none";
    showResults(score);
}

// Function to retake the exam (reload the page)
function retakeExam() {
    location.reload();
}
