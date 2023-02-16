$(document).ready(function(){
    $("form").submit(function(){
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "sendform.php",
            data: form_data,
            success: function(){
                alert('Ваша заявка принята')
            }
        })
        event.preventDefault();
    })
})