document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = {
        admin: { password: 'adminpass', role: 'admin', redirect: 'admin.html' },
        triciamhayanuat: { password: 'triciamhay', role: 'student', redirect: 'student1.html' },
        jeanivyblanco: { password: 'jeanivy', role: 'student', redirect: 'student2.html' },
        danacatipon: { password: 'dana', role: 'student', redirect: 'student3.html' },
        charmainemarquez: { password: 'charmaine', role: 'student', redirect: 'student4.html' },
        triciamolina: { password: 'tricia', role: 'student', redirect: 'student5.html' },
        nicolepaghubasan: { password: 'nicole', role: 'student', redirect: 'student6.html' }
    };

    const user = users[username];

    if (user && user.password === password) {
        window.location.href = user.redirect;
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});

var modal = document.getElementById('registerModal');

var btn = document.getElementById('registerBtn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regUsername && regPassword) {
        alert('Account created successfully for ' + regUsername);
        modal.style.display = 'none';
    } else {
        document.getElementById('register-error-message').textContent = 'Please fill in both fields';
    }
});