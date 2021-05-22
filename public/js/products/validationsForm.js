    let form = document.querySelector("#form-register");
    let name = document.querySelector("#name");
    let price = document.querySelector("#price");
    let discount_value = document.querySelector("#discount_value");
    let discount = document.querySelector("#discount");
    let image = document.querySelector("#image");
    let description = document.querySelector("#description");
    let validExtensionFormat = (/\.(jpg|png|gif|jpeg)$/i);
    let numberFormat = /^[0-9]+$/;
    let discountFormat = /^(0|1)+$/;

    //Clases de Errores

    let errorName = document.querySelector(".error-name");
    let errorPrice = document.querySelector(".error-price");
    let errorDiscountValue = document.querySelector(".error-discount_value");
    let errorDiscount = document.querySelector(".error-discount");
    let errorImage = document.querySelector(".error-image");
    let errorDescription = document.querySelector(".error-description");
    let errorMessages = document.querySelectorAll(".error-message");


    // Reset Message

    function resetFormErrors() {
            errorMessages.forEach(errorMessage => {
                errorMessage.style.display = "none"
            });
    }

    // Limpiar Mensajes on foucs

    name.addEventListener("focus", resetFormErrors);
    price.addEventListener("focus", resetFormErrors);
    discount_value.addEventListener("focus", resetFormErrors);
    discount.addEventListener("focus", resetFormErrors);
    image.addEventListener("focus", resetFormErrors);
    description.addEventListener("focus", resetFormErrors);

    form.addEventListener('submit', (e) => {
        let errors = false;
        resetFormErrors();

        //Validaciones
        if (name.value.length < 5) {

            errorName.innerText = 'Debe completar el campo con al menos 5 caracteres';
            errorName.style.display = "block";
            errors = true;
        }
        if (!numberFormat.test(price.value)) {
            errorPrice.innerText = 'El campo debe ser numérico';
            errorPrice.style.display = "block"
            errors = true
        }
        if (!price.value) {
            errorPrice.innerText = 'Debe Ingresar el precio';
            errorPrice.style.display = "block"
            errors = true
        }
        if (discount.value == 1 && !discount_value.value) {
            errorDiscountValue.innerText = 'Debe ingresar un descuento';
            errorDiscountValue.style.display = "block"
            errors = true
        }
        if (!discountFormat.test(discount.value)) {
            errorDiscount.innerText = 'Los valores permitidos son 0 y 1';
            errorDiscount.style.display = "block";
            errors = true;
        }
        if (!discount.value.length == 1) {
            errorDiscount.innerText = 'Debe completar el campo';
            errorDiscount.style.display = "block";
            errors = true;
        }
        if (description.value.length < 20) {
            errorDescription.innerText = 'Debe completar el campo con al menos 20 caracteres';
            errorDescription.style.display = "block"
            errors = true
        }
         if(!validExtensionFormat.test(image.value)) {
                errorImage.innerText = "La extensión no es correcta";
                errorImage.style.display = "block";
                errors = true;
            }
        if (!image.value){
            errorImage.innerText = 'Debe Subir una imágen';
            errorImage.style.display = "block";
            errors = true;
        }
        // Enviamos o rejectamos JS Front
        if (errors) {
            e.preventDefault();
            console.log('No Mandamos Nada');
        }
    });
