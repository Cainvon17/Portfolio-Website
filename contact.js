document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageTextarea = document.querySelector('textarea');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); //Prevent default form submission
        let isValid = true;

        //validation for Name
        if (nameInput.value.trim() === '') {
            
            alert('Please enter your name.');
            nameInput.focus();
            isValid = false;
        }

        //validation for Email
        if (isValid && emailInput.value.trim() === '') {
            alert('Please enter your email address.');
            emailInput.focus();
            isValid = false;


        } else if (isValid && !isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            isValid = false;

        }

        //validation for Message
        if (isValid && messageTextarea.value.trim() === '') {
            alert('Please enter your message.');
            messageTextarea.focus();
            isValid = false;
        }

        if (isValid) {
            
            console.log('Form submitted successfully!');
            console.log('Name:', nameInput.value.trim());
            console.log('Email:', emailInput.value.trim());
            console.log('Message:', messageTextarea.value.trim());
            alert('Thank you for your message! We will get back to you shortly.');

            // Clear the form after successful submission
            form.reset();


        }

    });

    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    submitButton.addEventListener('mouseover', () => {

        submitButton.style.backgroundColor = '#87A2FF'; // change color on hover
    });

    submitButton.addEventListener('mouseout', () => {

        submitButton.style.backgroundColor = '#333446'; // Revert to original color
    });

    submitButton.addEventListener('focus', () => {
        submitButton.style.boxShadow = '0 0 0 3px rgba(51, 52, 70, 0.5)'; //add focus style
    });

    submitButton.addEventListener('blur', () => {

        submitButton.style.boxShadow = 'none'; //Remove focus style
    });
});