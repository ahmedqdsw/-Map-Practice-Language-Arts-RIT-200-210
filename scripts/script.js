function submitExam() {
    let score = 0;

    // Retrieve the form data and check answers (this is just an example, adjust based on your questions and correct answers)
    const correctAnswers = ['B', 'C', 'A', 'B', 'A', 'B', 'B', 'C', 'B', 'A', 'C', 'B', 'A', 'A', 'B', 'C', 'B', 'A', 'C', 'A', 'C', 'A', 'B', 'C', 'C', 'A', 'B', 'A', 'B', 'C', 'A', 'B', 'C', 'B', 'C', 'B'];
    const form1Answers = Array.from(document.querySelectorAll("#examForm1 input[type='radio']:checked")).map(input => input.value);
    const form2Answers = Array.from(document.querySelectorAll("#examForm2 input[type='radio']:checked")).map(input => input.value);

    const allAnswers = form1Answers.concat(form2Answers);

    allAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    // Display the result page
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    // Display score
    document.getElementById("score").textContent = `Your Score: ${score} / 36`;

    // Provide feedback based on the score
    const feedback = score >= 30 ? "Great job! You've mastered the material." : "Keep practicing!";
    document.getElementById("feedback").textContent = feedback;

    // Show trophy if the score is 30 or higher
    if (score >= 30) {
        document.getElementById("trophy").style.display = "block";
    } else {
        document.getElementById("trophy").style.display = "none";
    }

    // Show video list if score is below 30
    if (score < 30) {
        document.getElementById("videoList").style.display = "block";
    } else {
        document.getElementById("videoList").style.display = "none";
    }
}
