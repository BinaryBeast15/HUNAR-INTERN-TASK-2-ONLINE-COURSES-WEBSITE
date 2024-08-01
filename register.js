function showForm(formType) {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    
    if (formType === 'register') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else if (formType === 'login') {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}
