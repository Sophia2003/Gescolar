
function validar_cad_aluno() {

    var nome      = document.querySelector('input [name="nome"]');
    var data_nasc = document.querySelector('input [name="data_nascimento"]');
    var sexo      = document.querySelector('input [name="sexo"]');
    var genero    = document.querySelector('input [name="genero"]');
    var cpf       = document.querySelector('input [name="cpf"]');
    var cidade    = document.querySelector('input [name="cidade"]');
    var estado    = document.querySelector('input [name="estado"]');
    var bairro    = document.querySelector('input [name="bairro"]');
    var rua       = document.querySelector('input [name="rua"]');
    var cep       = document.querySelector('input [name="cep"]');

    if(nome.value == "" || nome.value == null) {
        alert("por favor, informe o nome do aluno.");
        nome.focus();
        nome.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(data_nasc.value == "" || data_nasc.value == null) {
        alert("por favor, informe a data de nascimento.");
        data_nasc.focus();
        data_nasc.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(sexo.value == "" || sexo.value == null) {
        alert("Por favor, informe o sexo.");
        sexo.focus();
        sexo.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(genero.value == "" || genero.value == null) {
        alert("Por favor, informe o genero.");
        genero.focus();
        genero.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(cpf.value == "" || cpf.value == null) {
        alert("Por favor, informe o cpf.");
        cpf.focus();
        cpf.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(cidade.value == "" || cidade.value == null) {
        alert("Por favor, informe a cidade.");
        cidade.focus();
        cidade.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(estado.value == "" || estado.value == null) {
        alert("Por favor, informe o estado.");
        estado.focus();
        estado.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(bairro.value == "" || bairro.value == null) {
        alert("por favor, informe o bairro.");
        bairro.focus();
        bairro.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(rua.value == "" || rua.value == null) {
        alert("por favor, informe a rua.");
        rua.focus();
        rua.getElementsByClassName.border - "1px solid red";
        return false;
    }

    if(cep.value == "" || cep.value == null) {
        alert("por favor, informe o cep.");
        cep.focus();
        cep.getElementsByClassName.border - "1px solid red";
        return false;
    }
    
 }