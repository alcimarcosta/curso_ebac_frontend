$(document).ready(function(){

    let posicao = 0

    $('form').on('submit', function(e){
        e.preventDefault();

        posicao += 1;

        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li id="${posicao}"></li>');


        $(`<a href="">${novaTarefa}</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul li a').on('submit', function(e){
        e.preventDefault();
    })

    
});
