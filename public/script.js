function appendHello() {
    $.ajax('/hello', {
        method: 'GET',
        success: function (response) {
            $('#output').text(response);
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

function addToGreeting(){
    var stringToAdd = $('#greetingAdd').val();
    $('#greetingAdd').val('');
    $.ajax('/add-to-greeting', {
        method: 'POST',
        data: { stringToAdd: stringToAdd },
        success: function(response){
            console.log('addToGreeting success:', stringToAdd);
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

    $('#greetingAddButton').on('click', addToGreeting);
    $('#greetingAdd').keypress(function(key){
        if (key.which == 13){
            addToGreeting();
        }
    });
});