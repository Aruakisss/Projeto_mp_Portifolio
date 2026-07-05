const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();

        const email = document.getElementById("email").value.trim();

        const mensagem = document.getElementById("mensagem").value.trim();

        if(nome === ""){

            alert("Digite seu nome.");

            return;

        }

        if(!email.includes("@")){

            alert("Digite um email válido.");

            return;

        }

        if(mensagem.length < 10){

            alert("Sua mensagem deve ter pelo menos 10 caracteres.");

            return;

        }

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}

const topoBtn = document.getElementById("topoBtn");

if (topoBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 8) {

            topoBtn.style.display = "block";

        } else {

            topoBtn.style.display = "none";

        }

    });

    topoBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


const temaBtn = document.getElementById("temaBtn");

if (temaBtn) {

    temaBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            temaBtn.textContent = "☀️";

        } else {

            temaBtn.textContent = "🌙";

        }

    });

}