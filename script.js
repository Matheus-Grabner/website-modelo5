        // Validação em tempo real para e-mail
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        emailInput.addEventListener('input', function () {
            if (emailInput.validity.valid) {
                emailError.classList.add('hidden');
            } else {
                emailError.classList.remove('hidden');
            }
        });

        // Validação em tempo real para número de telefone
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        phoneInput.addEventListener('input', function () {
            if (phoneInput.validity.valid) {
                phoneError.classList.add('hidden');
            } else {
                phoneError.classList.remove('hidden');
            }
        });