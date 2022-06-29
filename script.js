var cont = 0;

function selecionado(){
    var checkbox = document.getElementsByClassName("task"); //Criei a class "task" para as tarefas da lista,
    for(var i = 0; i <= checkbox.length; i++)               //a partir da captura desses elementos vou fazer
        if(checkbox[i].checked) {                           //as manipulações no text-decoration.
            document.getElementById(checkbox[i].value).style.textDecoration ="line-through";// Alterando o text-decoration da Label do Checkbox,
    } else {                                                                                // o value do Checkbox tem o mesmo valor do id do Label,
            document.getElementById(checkbox[i].value).style.textDecoration ="none";        // fiz dessa forma para facilitar a manipulação.
        }

}

function adicionar(tarefa){
    if(tarefa == ""){
        alert("Informe uma tarefa");
        document.getElementById("input-tarefa").focus();
    }else{
        var divLista = document.getElementById("tarefas");
        var novaDivTarefa = document.createElement("div");
        var novoCheckbox = document.createElement("input");
        var novoLabel = document.createElement("label") 
        
        novoCheckbox.setAttribute("type", "checkbox");
        novoCheckbox.setAttribute("value", String(cont));
        novoCheckbox.setAttribute("class", "task");
        novoCheckbox.setAttribute("onclick", "selecionado()");
        novoLabel.setAttribute("id", String(cont));
        cont++;
        
        novoLabel.textContent = tarefa;
        
        novaDivTarefa.appendChild(novoCheckbox);
        novaDivTarefa.appendChild(novoLabel);
        divLista.appendChild(novaDivTarefa);
        
    }
}
