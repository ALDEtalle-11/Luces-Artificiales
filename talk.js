$(function() {
    $('#yes').click(function(event) {
        document.getElementById('ver').style.display = 'none'
        modal('Sabía que estarías dispuesta, jovencita.。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();
            
        });
    });
    $('#no').click(function(event) {
        document.getElementById('ver').style.display = 'none'
        modal('no me digas que no', A);
    });
});

function A() {
    modal('solo aceptas ser mi novia', J);
}



function J() {
    modal('y punto', function() {
        fireworks();
    });
}

function fireworks() {
    
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">Estoy segura</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
