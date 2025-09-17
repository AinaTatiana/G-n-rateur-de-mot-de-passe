        // Mettre à jour la valeur affichée du slider
        const lengthSlider = document.getElementById('passwordLength');
        const lengthValue = document.getElementById('lengthValue');
        lengthSlider.addEventListener('input', () => {
            lengthValue.textContent = lengthSlider.value;
        });

        // Fonction pour générer un mot de passe
        function generatePassword() {
            const length = parseInt(lengthSlider.value);
            const includeUppercase = document.getElementById('includeUppercase').checked;
            const includeLowercase = document.getElementById('includeLowercase').checked;
            const includeNumbers = document.getElementById('includeNumbers').checked;
            const includeSymbols = document.getElementById('includeSymbols').checked;

            const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lowercase = 'abcdefghijklmnopqrstuvwxyz';
            const numbers = '0123456789';
            const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
            let characters = '';
            let password = '';

            if (includeUppercase) characters += uppercase;
            if (includeLowercase) characters += lowercase;
            if (includeNumbers) characters += numbers;
            if (includeSymbols) characters += symbols;

            if (characters === '') {
                alert('Veuillez sélectionner au moins un type de caractère !');
                return;
            }

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }

            document.getElementById('passwordOutput').textContent = password;
        }

        // Fonction pour copier le mot de passe
        function copyPassword() {
            const password = document.getElementById('passwordOutput').textContent;
            if (password === 'Votre mot de passe apparaîtra ici') {
                alert('Générez un mot de passe d\'abord !');
                return;
            }
            navigator.clipboard.writeText(password).then(() => {
                alert('Mot de passe copié dans le presse-papiers !');
            });
        }