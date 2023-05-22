$(document).ready(function(){

    let posicao = 0

    $('form').on('submit', function(e){
        e.preventDefault();

        posicao += 1;

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li id="${posicao}"></li>');


        $(`<div class="task-item"><p>${novaTarefa}</p></div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul').on('click','li',function(){    

        $(this).toggleClass('riscado');

  })

    
});
