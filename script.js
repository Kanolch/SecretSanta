// script.js
document.getElementById("revealBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value.trim();
  const resultEl = document.getElementById("result");

  if (!nameInput) {
    resultEl.textContent = "❌ Please enter your name!";
    return;
  }

  // Find the assignment for the entered name
  const entry = assignmentsPublic.find(a => a.name === nameInput);

  if (!entry) {
    resultEl.textContent = "❌ Name not found. Please enter your exact name.";
    return;
  }

  resultEl.textContent = `🎅 You are Secret Santa for: ${entry.recipient}!`;
});
