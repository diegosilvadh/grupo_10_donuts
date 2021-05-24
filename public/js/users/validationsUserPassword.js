    let form = document.querySelector("#form-register");
    let password = document.querySelector("#password");
    let confirm_password = document.querySelector("#confirm-password");
    let validationPassword = /^(?=.*[0-9])(?=.*[!@#?$%^&*.])[a-zA-Z0-9!@#?$%^&*.]{8,}$/;
    //Clases de Errores

    let errorPassword = document.querySelector(".error-password");
    let errorConfirm_password = document.querySelector(".error-confirm-password");
    let mismatchPassword = document.querySelector(".mismatch-password");
    let errorMessages = document.querySelectorAll(".error-message");

    // Reset Message

    function resetFormErrors() {
            errorMessages.forEach(errorMessage => {
                errorMessage.style.display = "none"
            });
    }
    // Limpiar Mensajes on foucs

    password.addEventListener("focus", resetFormErrors);
    confirm_password.addEventListener("focus", resetFormErrors);

    form.addEventListener('submit', (e) => {
        let errors= false
        resetFormErrors();

        //Validaciones
       
        if (!validationPassword.test(password.value)) {
            errorPassword.innerText = 'La contraseña debe cumplir con la política ( Minúscula, Mayúscula, Numero y Símbolo';
            errorPassword.style.display = "block"
            errors = true
        }
        if (password.value.length < 8) {
            errorPassword.innerText = 'Debe completar el campo con al menos 8 caracteres';
            errorPassword.style.display = "block"
            errors = true
        }
        if (!validationPassword.test(confirm_password.value)) {
            errorConfirm_password.innerText = 'La contraseña debe cumplir con la política ( Minúscula, Mayúscula, Numero y Símbolo';
            errorConfirm_password.style.display = "block"
            errors = true
        }
        if (confirm_password.value.length < 8) {
            errorConfirm_password.innerText = 'Debe completar el campo con al menos 8 caracteres';
            errorConfirm_password.style.display = "block"
            errors = true
        }
        if (!(confirm_password.value == password.value)) {
            mismatchPassword.innerText = 'Las contraseñas no coinciden';
            mismatchPassword.style.display = "block"
            errors = true
        }

        // Enviamos o rejectamos JS Front
        if (errors) {
            e.preventDefault();
            console.log('No Mandamos Nada');
        }
    });
