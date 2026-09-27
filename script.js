let currentCandidate = null;
let timerInterval = null;
let totalTimeSeconds = 50 * 60; // 50 minutes
let timeElapsedSeconds = 0;

// Initialize Study Material View
document.addEventListener("DOMContentLoaded", () => {
    renderStudyMaterials();
});

function renderStudyMaterials() {
    const grid = document.getElementById("pdfGrid");
    grid.innerHTML = "";
    
    let materials = JSON.parse(localStorage.getItem("safetyMaterials")) || defaultMaterials;
    
    materials.forEach((mat, idx) => {
        grid.innerHTML += `
            <div class="pdf-card">
                <h4>📖 ${mat.title}</h4>
                <a href="${mat.url}" target="_blank" class="btn-secondary" style="text-decoration:none; font-size:12px;">View PDF / पढ़ें</a>
            </div>
        `;
    });
}

// Modal Handlers
function openCandidateModal() {
    document.getElementById("candidateModal").style.display = "block";
}

function closeCandidateModal() {
    document.getElementById("candidateModal").style.display = "none";
}

function openAdminModal() {
    document.getElementById("adminModal").style.display = "block";
}

function closeAdminModal() {
    document.getElementById("adminModal").style.display = "none";
}

function closeViewModal() {
    document.getElementById("viewModal").style.display = "none";
}

// Start Test
function startTest(e) {
    e.preventDefault();

    currentCandidate = {
        name: document.getElementById("candName").value,
        vendor: document.getElementById("candVendor").value,
        passNo: document.getElementById("candPassNo").value,
        dept: document.getElementById("candDept").value,
        date: new Date().toLocaleString()
    };

    closeCandidateModal();

    document.getElementById("studySection").classList.add("hidden");
    document.getElementById("testSection").classList.remove("hidden");

    document.getElementById("candidateBar").innerText = 
        `Candidate: ${currentCandidate.name} | Vendor: ${currentCandidate.vendor} | Dept: ${currentCandidate.dept}`;

    renderQuestions();
    startTimer();
}

// Render Questions
function renderQuestions() {
    const container = document.getElementById("questionsContainer");
    container.innerHTML = "";

    safetyData.forEach((topicObj, tIdx) => {
        let topicHTML = `<div class="topic-heading"><h3>${topicObj.topic}</h3></div>`;

        topicObj.questions.forEach((qObj, qIdx) => {
            let qNum = tIdx * 5 + qIdx + 1;
            topicHTML += `
                <div class="question-block">
                    <p class="question-text">${qObj.q}</p>
                    ${qObj.options.map((opt, oIdx) => `
                        <label class="option-label">
                            <input type="radio" name="q_${tIdx}_${qIdx}" value="${oIdx}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
        });

        container.innerHTML += topicHTML;
    });
}

// Timer Engine
function startTimer() {
    const timerElem = document.getElementById("timer");

    timerInterval = setInterval(() => {
        timeElapsedSeconds++;
        let remaining = totalTimeSeconds - timeElapsedSeconds;

        if (remaining <= 0) {
            clearInterval(timerInterval);
            alert("Time is up! Submitting test automatically. / समय समाप्त हो गया है!");
            submitTest();
            return;
        }

        let mins = Math.floor(remaining / 60);
        let secs = remaining % 60;
        timerElem.innerText = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }, 1000);
}

// Submit Test
function submitTest() {
    clearInterval(timerInterval);

    let score = 0;
    let userAnswers = [];

    safetyData.forEach((topicObj, tIdx) => {
        topicObj.questions.forEach((qObj, qIdx) => {
            const selectedOpt = document.querySelector(`input[name="q_${tIdx}_${qIdx}"]:checked`);
            let userVal = selectedOpt ? parseInt(selectedOpt.value) : -1;

            if (userVal === qObj.ans) {
                score++;
            }

            userAnswers.push({
                topic: topicObj.topic,
                question: qObj.q,
                selected: userVal >= 0 ? qObj.options[userVal] : "Not Answered",
                correct: qObj.options[qObj.ans],
                isCorrect: userVal === qObj.ans
            });
        });
    });

    let minsTaken = Math.floor(timeElapsedSeconds / 60);
    let secsTaken = timeElapsedSeconds % 60;
    let timeTakenFormatted = `${minsTaken}m ${secsTaken}s`;

    let finalRecord = {
        ...currentCandidate,
        score: score,
        timeTaken: timeTakenFormatted,
        details: userAnswers
    };

    // Save Record to LocalStorage
    let allResults = JSON.parse(localStorage.getItem("safetyTestResults")) || [];
    allResults.push(finalRecord);
    localStorage.setItem("safetyTestResults", JSON.stringify(allResults));

    // Show User Result
    document.getElementById("testSection").classList.add("hidden");
    document.getElementById("userResultSection").classList.remove("hidden");

    document.getElementById("resName").innerText = currentCandidate.name;
    document.getElementById("resVendor").innerText = currentCandidate.vendor;
    document.getElementById("resScore").innerText = score;
    document.getElementById("resTime").innerText = timeTakenFormatted;
}

// Admin Operations
function handleAdminLogin(e) {
    e.preventDefault();
    let id = document.getElementById("adminId").value;
    let pass = document.getElementById("adminPass").value;

    if (id === "admin" && pass === "admin123") {
        closeAdminModal();
        document.getElementById("studySection").classList.add("hidden");
        document.getElementById("adminDashboard").classList.remove("hidden");
        loadAdminResults();
    } else {
        alert("Invalid ID or Password! (Default ID: admin, Pass: admin123)");
    }
}

function logoutAdmin() {
    document.getElementById("adminDashboard").classList.add("hidden");
    document.getElementById("studySection").classList.remove("hidden");
}

function loadAdminResults() {
    const tbody = document.getElementById("resultsTableBody");
    tbody.innerHTML = "";

    let results = JSON.parse(localStorage.getItem("safetyTestResults")) || [];

    results.forEach((res, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${res.date}</td>
                <td>${res.name}</td>
                <td>${res.vendor}</td>
                <td>${res.passNo}</td>
                <td>${res.dept}</td>
                <td>${res.timeTaken}</td>
                <td><strong>${res.score} / 50</strong></td>
                <td>
                    <button class="btn-primary" style="padding:4px 8px; font-size:12px;" onclick="viewCandidateDetails(${index})">View / देखें</button>
                </td>
            </tr>
        `;
    });
}

function viewCandidateDetails(idx) {
    let results = JSON.parse(localStorage.getItem("safetyTestResults")) || [];
    let candidate = results[idx];

    let contentHTML = `
        <p><strong>Name:</strong> ${candidate.name} | <strong>Vendor:</strong> ${candidate.vendor}</p>
        <p><strong>Score:</strong> ${candidate.score}/50 | <strong>Time Taken:</strong> ${candidate.timeTaken}</p>
        <hr style="margin: 15px 0;">
    `;

    candidate.details.forEach((d, i) => {
        contentHTML += `
            <div style="margin-bottom: 10px; padding: 10px; background:${d.isCorrect ? '#f0fff4' : '#fff5f5'}; border: 1px solid ${d.isCorrect ? '#38a169' : '#e53e3e'}; border-radius: 4px;">
                <p><strong>Q${i+1}: ${d.question}</strong></p>
                <p>User Selected: <span style="color:${d.isCorrect ? 'green' : 'red'};">${d.selected}</span></p>
                ${!d.isCorrect ? `<p>Correct Answer: <strong>${d.correct}</strong></p>` : ''}
            </div>
        `;
    });

    document.getElementById("viewDetailsContent").innerHTML = contentHTML;
    document.getElementById("viewModal").style.display = "block";
}

function addStudyMaterial() {
    let title = document.getElementById("pdfTitleInput").value;
    let url = document.getElementById("pdfUrlInput").value;

    if (!title || !url) {
        alert("Please provide title and URL!");
        return;
    }

    let materials = JSON.parse(localStorage.getItem("safetyMaterials")) || defaultMaterials;
    materials.push({ title: title, url: url });

    localStorage.setItem("safetyMaterials", JSON.stringify(materials));
    alert("New Study Module Added!");

    document.getElementById("pdfTitleInput").value = "";
    document.getElementById("pdfUrlInput").value = "";

    renderStudyMaterials();
}

function exportToExcel() {
    let results = JSON.parse(localStorage.getItem("safetyTestResults")) || [];

    if (results.length === 0) {
        alert("No candidate records found to export!");
        return;
    }

    let excelData = results.map(r => ({
        "Date & Time": r.date,
        "Name": r.name,
        "Vendor Name": r.vendor,
        "Safety Pass No.": r.passNo,
        "Department": r.dept,
        "Time Taken": r.timeTaken,
        "Score Out of 50": r.score
    }));

    let worksheet = XLSX.utils.json_to_sheet(excelData);
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Safety Results");

    XLSX.writeFile(workbook, "Manpower_Safety_Test_Results.xlsx");
}