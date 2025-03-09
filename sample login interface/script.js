
        const correctUsername = "admin";
        const correctPassword = "admin";

        function checkLogin() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("errorMessage");

            if (username === correctUsername && password === correctPassword) {
                document.getElementById("loginPopup").style.display = "none";
                document.getElementById("mainContent").style.display = "block";
            } else {
                errorMessage.textContent = "Wrong Username or Password!";
            }
        }
