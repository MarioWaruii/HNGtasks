window.onload = function() {
const userName = document.getElementById("namel");
const userEmail = document.getElementById("emaill");
const userSubject = document.getElementById("subjectt");
const userMessage = document.getElementById("messagee");
const hintName = document.getElementById("enterName");
const hintEmail = document.getElementById("enterEmail");
const hintSubject = document.getElementById("enterSubject");
const hintMessage = document.getElementById("enterMessage");
const invalidEmail = document.getElementById("invalidEmail");

userName.addEventListener("focus", () => {
    hintName.style.display = "block";
})
userEmail.addEventListener("focus", () => {
    hintEmail.style.display = "block";
})
userSubject.addEventListener("focus", () => {
    hintSubject.style.display = "block";
})
userMessage.addEventListener("focus", () => {
    hintMessage.style.display = "block";
})
userName.addEventListener("blur", () => {
    hintName.style.display = "none";
})
userEmail.addEventListener("blur", () => {
    hintEmail.style.display = "none";
})
userSubject.addEventListener("blur", () => {
    hintSubject.style.display = "none";
})
userMessage.addEventListener("blur", () => {
    hintMessage.style.display = "none";
})


function containsKeyword(inputValue) {
  const keywords = ["@gmail", "@yahoo", ".com"]; 
  return keywords.some(word => inputValue.toLowerCase().includes(word));
}

userEmail.addEventListener("input", () => {
  if (containsKeyword(userEmail.value)) {
    invalidEmail.style.display = "none"
    ;
  } else {
    invalidEmail.style.display = "block";
  }
});
};

  const form = document.getElementById("myForm");
  const displayText = document.getElementById("submitSuccess");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    displayText.style.display = "block";

      setTimeout(() => {
    displayText.style.display = "none";
  }, 3000); 
  });
