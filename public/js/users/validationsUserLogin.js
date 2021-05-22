    let form = document.querySelector("#form-login");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let validationPassword = /^(?=.*[0-9])(?=.*[!@#?$%^&*.])[a-zA-Z0-9!@#?$%^&*.]{8,}$/;
    
    //Clases de Errores

    let errorEmail = document.querySelector(".error-email");
    let errorPassword = document.querySelector(".error-password");
    let errorMessages = document.querySelectorAll(".error-message");

    // Reset Message /Email

    function resetFormErrors() {
            errorMessages.forEach(errorMessage => {
                errorMessage.style.display = "none"
            });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Limpiar Mensajes on foucs

    email.addEventListener("focus", resetFormErrors);
    password.addEventListener("focus", resetFormErrors);

    form.addEventListener('submit', (e) => {
        let errors= false
        resetFormErrors();

        //Validaciones
        
        if (!validateEmail(email.value)){
            errorEmail.innerText = 'Debe ingresar un formato de E-mail válido';
            errorEmail.style.display = "block"
            errors = true

        }
        if (!validationPassword.test(password.value)) {
            errorPassword.innerText = 'La contraseña debe cumplir con la política ( Minúscula, Mayúscula, Numero y Símbolo';
            errorPassword.style.display = "block"
            errors = true
        }
        if (password.value.length < 8) {
            errorPassword.innerText = 'Debe ingresar la contraseña';
            errorPassword.style.display = "block"
            errors = true
        }
        // Enviamos o rejectamos JS Front
        if (errors) {
            e.preventDefault();
            console.log('No Mandamos Nada');
        }
    });