$(document).ready(function(){
    $('h1').css('font-size', '9em');

    $('#helloButton').on('click',function(){
        $.ajax('/hello', {
            method: 'GET',
            success: function(response){
                $('body').append(response);
            }
        });
    })

});

