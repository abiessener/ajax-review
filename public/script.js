function appendHello(){
        $.ajax('/hello', {
            method: 'GET',
            success: function(response){
                $('body').append('<div>' + response + '</div>');
            }
        });
}


$(document).ready(function(){
    $('h1').css('font-size', '9em');

    $('#helloButton').on('click',appendHello);

});

