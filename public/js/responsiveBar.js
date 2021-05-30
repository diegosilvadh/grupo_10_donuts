let responsiveNav = document.querySelector(".responsive-nav")
        let hamburguerButton = document.querySelector(".hamburguer-button")
       
        hamburguerButton.addEventListener("click", function(){
            responsiveNav.classList.toggle("showResponsiveNav")
            console.log('click')
       })
       /*hamburguerButton.addEventListener("mouseout", function(){
        responsiveNav.classList.toggle("hiddeResponsiveNav")
       }) */
