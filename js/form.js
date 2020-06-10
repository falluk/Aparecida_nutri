var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adciona");
    var paciente = obtenhaInformacaoDoForm(form);
    
    pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
    
    form.reset();

}); 

function obtenhaInformacaoDoForm(form){
    
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montatd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montatd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montatd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montatd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montatd(paciente.imc, "info-imc"));
    return pacienteTr;

}

function montatd(dado, classe){

   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);
   return td;
}