function appendHello() {
    $.ajax('/hello', {
        method: 'GET',
        success: function (response) {
            $('body').append('<div>' + response + '</div>');
        }
    });
}

function getJacked(){
    $.ajax('/pumpup', {
        method: 'POST',
        data: '!',
        success: function(response){
            console.log('getJacked success');
            
        }
    })
}

function updateGreeting(){
    var updatedGreeting = $('#greetingInput').val();
    $('#greetingInput').val('');
    $.ajax('/hello', {
        method: 'POST',
        data: { newGreeting: updatedGreeting },
        success: function(response){
            console.log('updateGreeting success:', updatedGreeting);
            appendHello();
        },
        statusCode: {
            400: function(){
                window.alert('no ghost greetings, please!');
            }
        }
    });
}


$(document).ready(function () {
    $('h1').css('font-size', '2em');

    $('#helloButton').on('click', appendHello);

    $('#pumpUpButton').on('click', getJacked);

    $('#greetingSendButton').on('click', updateGreeting);

    $('#greetingInput').keypress(function(key){
        if (key.which == 13){
            updateGreeting();
        }
    });

});