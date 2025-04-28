document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const validDomains = ["@gmail.com", "@mail.ru", "@yahoo.com"];
  const hasValidDomain = validDomains.some(domain => email.toLowerCase().endsWith(domain));
  if (!hasValidDomain) {
    alert("Emailul trebuie să fie de la @gmail.com, @mail.ru sau @yahoo.com.");
    return;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Parola trebuie să conțină minim 8 caractere, cel puțin o literă mare și o cifră.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.some(user => user.email === email);
  if (emailExists) {
    alert("Emailul este deja folosit.");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cont creat cu succes!");
  window.location.href = "../signin/index.html";
});

// Функция для переключения видимости пароля
function togglePassword(inputId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = passwordInput.nextElementSibling;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = '👁️‍🗨️';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = '👁️';
  }
}