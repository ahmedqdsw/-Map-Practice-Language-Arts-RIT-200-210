function nextPage() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    page1.style.display = "none";
    page2.style.display = "block";
}

function submitExam() {
    const form1 = document.getElementById("examForm1");
    const form2 = document.getElementById("examForm2");
    let score = 0;

    // Scoring logic for form 1
    if (form1.q1.value === "B") score++;
    if (form1.q2.value === "C") score++;
    if (form1.q3.value === "A") score++;
    if (form1.q4.value === "B") score++;
    if (form1.q5.value === "A") score++;
    if (form1.q6.value === "B") score++;
    if (form1.q7.value === "B") score++;
    if (form1.q8.value === "C") score++;

    // Scoring logic for form 2
    if (form2.q9.value === "A") score++;
    if (form2.q10.value === "C") score++;
    if (form2.q11.value === "B") score++;
    if (form2.q12.value === "C") score++;
    if (form2.q13.value === "A") score++;
    if (form2.q14.value === "B") score++;
    if (form2.q15.value === "B") score++;
    if (form2.q16.value === "C") score++;
    if (form2.q17.value === "B") score++;
    if (form2.q18.value === "A") score++;
    if (form2.q19.value === "C") score++;
    if (form2.q20.value === "A") score++;
    if (form2.q21.value === "C") score++; 
    if (form2.q22.value === "A") score++;
    if (form2.q23.value === "B") score++;
    if (form2.q24.value === "C") score++;
    if (form2.q25.value === "C") score++;
    if (form2.q26.value === "A") score++;
    if (form2.q27.value === "B") score++;
    if (form2.q28.value === "C") score++;
    if (form2.q29.value === "B") score++;
    if (form2.q30.value === "A") score++;
    if (form2.q31.value === "C") score++;
    if (form2.q32.value === "A") score++;
    if (form2.q33.value === "B") score++;
    if (form2.q34.value === "A") score++;
    if (form2.q35.value === "C") score++;
    if (form2.q36.value === "B") score++;


    // Show results on the results page
    localStorage.setItem("score", score);
    window.location.href = "results.html";
}

window.onload = function() {
    const score = localStorage.getItem("score");
    if (score !== null) {
        document.getElementById("score").innerText = "Your Score: " + score + "/36";

        if (score <= 10) {
            const videos = [
                {
                    title: "What Are Prepositions? | Grammar for Kids | The Wild World of Language",
                    url: "https://www.youtube.com/embed/xyMrLQ4ZI-4"
                },
                {
                    title: "Interjections: Understanding Interjections in English",
                    url: "https://www.youtube.com/embed/nVJDoD2THa4"
                },
                {
                    title: "Conjunctions for Kids: Coordinating, Subordinating, and Correlative",
                    url: "https://www.youtube.com/embed/3qbfcHiUrcI"
                },
                {
                    title: "What is a Prepositional Phrase?",
                    url: "https://www.youtube.com/embed/brxQFHE3b6Q"
                }
            ];

            const videoContainer = document.getElementById("videoContainer");
            videos.forEach(video => {
                const videoElement = document.createElement("div");
                videoElement.innerHTML = `
                    <h3>${video.title}</h3>
                    <iframe width="560" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                `;
                videoContainer.appendChild(videoElement);
            });
        }
    }
}
