onload = () => {

    const validateForm = (ev) => {
        let qdtErros = 0;

        qdtErros = qdtErros + validaNome();
        qdtErros = qdtErros + validadeEmail();
        qdtErros = qdtErros + validadePhone();
        qdtErros = qdtErros + validadeMensagem();
        if (qdtErros == 0) {
            abrirModal();
            ev.preventDefault();
            document.querySelector('.form').reset();
        } else {
            ev.preventDefault();
        }
    }

    const validaNome = () => {
        let name = document.querySelector('#name').value;
        var erroNome = document.querySelector('.erro__nome');
        const re = /[^a-zA-Z\s]/;

        if (name.trim() == '' || re.test(name)) {
            if (name.trim() == '') {
                erroNome.innerHTML = '* Campo necessário.';
                erroNome.style.visibility = 'visible';
                return 1;
            } else {
                erroNome.innerHTML = '* Campo não aceita caracteres especiais!';
                erroNome.style.visibility = 'visible'
                return 1;
            }
        } else {
            erroNome.style.visibility = 'hidden';
            return 0;
        }
    }

    const validadeEmail = () => {
        let email = document.querySelector('#email').value;
        var erroEmail = document.querySelector('.erro__email');
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email.trim() == '' || !re.test(String(email).toLowerCase())) {
            if (email.trim() == '') {
                erroEmail.innerHTML = '* Campo necessário.';
                erroEmail.style.visibility = 'visible'
                return 1;
            } else {
                erroEmail.innerHTML = '* E-mail inválido.';
                erroEmail.style.visibility = 'visible'
                return 1;
            }
        } else {
            erroEmail.style.visibility = 'hidden';
            return 0;
        }
    }


    const validadePhone = () => {
        var phone = document.querySelector('#phone').value;
        var erroPhone = document.querySelector('.erro__phone');
        const re = /([0-9]{2})(\s{1})(([0-9]{4}-[0-9]{4}))$/

        if (phone.trim() == '' || !re.test(String(phone).toLowerCase())) {
            if (phone.trim() == '') {
                erroPhone.innerHTML = '* Campo necessário.';
                erroPhone.style.visibility = 'visible'
                return 1;
            } else {
                erroPhone.innerHTML = '* Telefone inválido. Formato: xx xxxx-xxxx';
                erroPhone.style.visibility = 'visible'
                return 1;
            }
        } else {
            erroPhone.style.visibility = 'hidden';
            return 0;
        }
    }



    const validadeMensagem = () => {
        let message = document.querySelector('#message').value;
        var erroNome = document.querySelector('.erro__message');
        let qdtPalavras = message.split(' ');

        if (message.trim() == '' || qdtPalavras.length < 8) {
            if (message.trim() == '') {
                erroNome.innerHTML = '* Campo necessário.';
                erroNome.style.visibility = 'visible'
                return 1;
            } else {
                erroNome.innerHTML = '* Mensagem tem que ter mais de 8 palavras';
                erroNome.style.visibility = 'visible'
                return 1;
            }
        } else {
            erroNome.innerHTML = '';
            return 0;
        }
    }


    const maskPhone = () => {
        var phone = document.querySelector('#phone').value;
        phone = phone.replace(/\D/g, "");
        phone = phone.replace(/^(\d{2})(\d)/g, "$1 $2");
        phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");
        document.querySelector('#phone').value = phone;
    }

    const abrirModal = () => {
        document.querySelector('#modal').style.display = 'flex';
    }

    const fecharModal = () => {
        document.querySelector('#modal').style.display = 'none';
    }

    var indexGeral = 1;
    showSlides(indexGeral);

    const updateSlide = (novo) => {
        showSlides(indexGeral = indexGeral + novo);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        
        if (n > slides.length) {
            indexGeral = 1;
        }
        if (n < 1) {
            indexGeral = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[indexGeral - 1].style.display = "flex";
    }

    const openMenu = () => {
        let menu = document.querySelector('#nav__menu');
        
        menu.className === "nav__bar" ?  menu.className += " nav__open" :  menu.className = "nav__bar";
    }

    const closeMenu = () => {
        let menu = document.querySelector('#nav__menu');
        menu.className === "nav__bar" ?  menu.className -= " nav__open" :  menu.className = "nav__bar";
    }


    document.querySelector('#btn__submit').onclick = validateForm;
    document.querySelector('#btn__modal').onclick = fecharModal;
    document.querySelector('#modal').onclick = fecharModal;
    document.querySelector('#phone').onkeyup = maskPhone;
    document.querySelector('#menu__icon').onclick = openMenu;
    document.querySelector('#close__icon').onclick = closeMenu;
    document.querySelector('.next').onclick = () => updateSlide(1);
    document.querySelector('.prev').onclick = () => updateSlide(-1);
   
}