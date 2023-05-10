const form = document.getElementById('formulario')
let a = document.getElementById('campo-a')
let b = document.getElementById('campo-b')
let validaFormulario = false;
let mensageParaUsuario = document.querySelector('.success-message')

function limparFormulario(){
    a.value = ''
    b.value = ''
}

function validaNumeros(a, b){
    if (a > b){
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaFormulario = validaNumeros(a.value, b.value);

    if(validaFormulario){
        const mensagemSucesso = `Tudo certo, o valor de A é <b>${a.value}</b> e é maior que o valor de B que é <b>${b.value}</b>.`
        mensageParaUsuario.innerHTML = mensagemSucesso;
        mensageParaUsuario.style.display = 'block';
        mensageParaUsuario.classList.remove('erro-form');
        mensageParaUsuario.classList.add('success-form');
        limparFormulario()

    } else {
        const mensagemErro = `Erro no formulário, o valor de A é <b>${a.value}</b> e é menor que o valor de B que é <b>${b.value}</b>.`
        mensageParaUsuario.innerHTML = mensagemErro;
        mensageParaUsuario.style.display = 'block';
        mensageParaUsuario.classList.remove('success-form');
        mensageParaUsuario.classList.add('erro-form');
        limparFormulario()
    }

})

