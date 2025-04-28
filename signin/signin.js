// Обработчик отправки формы авторизации
document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получаем значения полей
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;

  // Получаем список пользователей из localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Проверяем, существует ли пользователь с введёнными данными
  const foundUser = users.find(user =>
    user.email === emailInput && user.password === passwordInput
  );

  // Если пользователь найден, сохраняем его в localStorage и перенаправляем
  if (foundUser) {
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    alert(`Bun venit, ${foundUser.name}!`);
    window.location.href = '../main/index.html';
  } else {
    alert('Email sau parolă greșită.');
  }
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