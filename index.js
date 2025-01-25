document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    let isValid = true;

   
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = '* Name is required.';
        isValid = false;
    }

 
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = '* Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = '* Enter a valid email address.';
        isValid = false;
    }


    const subject = document.getElementById('subject').value.trim();
    if (subject === '') {
        document.getElementById('subjectError').textContent = '* Subject is required.';
        isValid = false;
    }


    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = '* Message is required.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Thank you for your message!';
        document.getElementById('successMessage').classList.add('animate');
        document.getElementById('contactForm').reset();
    }
});