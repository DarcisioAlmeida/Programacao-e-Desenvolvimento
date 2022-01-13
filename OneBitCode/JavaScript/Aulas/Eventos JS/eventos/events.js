/*
    Adicionando Evento 
        - selecionando select
*/

    document.querySelector("select[name='select-option']").addEventListener("change", function(){
        alert(event.target.value)
    })
