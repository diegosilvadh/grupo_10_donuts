
    let form = document.querySelector("#form-register");
    let first_name = document.querySelector("#first_name");
    let last_name = document.querySelector("#last_name");
    let username = document.querySelector("#username");
    let birthday = document.querySelector("#birthday");
    let email = document.querySelector("#email");
    let avatar = document.querySelector("#avatar");
    let validExtensionFormat = (/\.(jpg|png|gif|jpeg)$/i);

    //Clases de Errores

    let errorFirst_name = document.querySelector(".error-first_name");
    let errorLast_name = document.querySelector(".error-last_name");
    let errorUsername = document.querySelector(".error-username");
    let errorBirthday = document.querySelector(".error-birthday");
    let errorEmail = document.querySelector(".error-email");
    let errorAvatar = document.querySelector(".error-avatar");
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

    first_name.addEventListener("focus", resetFormErrors);
    last_name.addEventListener("focus", resetFormErrors);
    username.addEventListener("focus", resetFormErrors);
    email.addEventListener("focus", resetFormErrors);
    avatar.addEventListener("focus", resetFormErrors);

    form.addEventListener('submit', (e) => {
        let errors= false
        resetFormErrors();

        //Validaciones
        if (first_name.value.length < 3) {

            errorFirst_name.innerText = 'Debe completar el campo con al menos 3 caracteres';
            errorFirst_name.style.display = "block";
            errorIconFirst_name.style.display = "block";
            errors = true;
        } else {
            successIconFirst_name.style.display = "block";
        }
        if (last_name.value.length < 3) {
            errorLast_name.innerText = 'Debe completar el campo con al menos 3 caracteres';
            errorLast_name.style.display = "block"
            errors = true
        }
        if (username.value.length < 3) {
            errorUsername.innerText = 'Debe completar el campo con al menos 3 caracteres';
            errorUsername.style.display = "block"
            errors = true
        }
        if (username.value.length < 3) {
            errorUsername.innerText = 'Debe completar el campo con al menos 3 caracteres';
            errorUsername.style.display = "block"
            errors = true
        }

        if (!validateEmail(email.value)){
            errorEmail.innerText = 'Debe ingresar un formato de E-mail válido';
            errorEmail.style.display = "block"
            errors = true

        }
        if(!validExtensionFormat.test(avatar.value)) {
                errorAvatar.innerText = "La extensión no es correcta";
                errorAvatar.style.display = "block";
                errors = true;
            }
            if (!avatar.value){
                errorAvatar.innerText = 'Debe Subir una imágen';
                errorAvatar.style.display = "block";
                errors = true;
            }

        // Enviamos o rejectamos JS Front
        if (errors) {
            e.preventDefault();
            console.log('No Mandamos Nada');
        }
    });
