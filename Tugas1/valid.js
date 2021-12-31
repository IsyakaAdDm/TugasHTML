const name = document.getElementById("form");
const email = document.getElementById("username");
const jamber = document.getElementById("email");
const form = document.getElementById("jamber");


form.addEventListener("submit", e => {
    e.preventDefault();
    
    validateInputs();
    });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidateEmail = email => {
    const re = ''
    return re.test(String(email).toLocaleLowerCase());
}



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const jamberValue = jamber.value.trim();

    if(usernameValue === '') {
        setError(username, 'maksimum 30 karakter')
        
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
    } else if (!isValidateEmail(emailValue)) {
        setError(email, 'Provide a valid email address' );
    }  else {
        setSuccess(email);
    }



}