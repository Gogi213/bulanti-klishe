$(document).ready(function() {
    $('.username').val('');
    $('.userphone').val('');
    $('.usermail').val('');
    $('.userqestion').val('');
    $('.usermessage').val('');
    $('.auto').val('');
    $('.autoengine').val('');
    $('.submit-button').click(function() {

        if (($(this).closest('form').find('input[name*="phone"]').val() != "")
                ) {

            var name = $(this).closest('form').find('input[name*="name"]').val();
            var phone = $(this).closest('form').find('input[name*="phone"]').val();
            var e_mail = $(this).closest('form').find('input[name*="e_mail"]').val();
            var country = $(this).closest('form').find('input[name*="country"]').val();
            var qestion = $(this).closest('form').find('textarea[name*="message"]').val();
            var page = $('title').html();
            var auto = $(this).closest('form').find('input[name*="auto"]').val();
            var autoengine = $(this).closest('form').find('input[name*="autoengine"]').val();
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, e_mail: e_mail, qestion: qestion, country: country, page: page, auto: auto, autoengine: autoengine}
            }).done(function(msg) {
                var width = $(window).width();
                var margin = (width / 2) - ($('.compleet-window').width() / 2) - 31.5;
                 $('.compleet-window').css({'left':margin});
                $('.compleet-window').css({'display':'block'});
                $('.username').val('');
                $('.userphone').val('');
                $('.usermail').val('');
                $('.userqestion').val('');
                $('.auto').val('');
                $('.autoengine').val('');
                $('.usermessage').val('');
            });
        } else {
            window.alert('Пожалуйста оставьте свой телефон чтобы мы могли с вами связаться');
        }
    }
    );
    $('.compleet-button').click(function(){
       $('.compleet-window').css({'display':'none'}); 
    });
    $('.submit-button2').click(function() {
        if (($(this).closest('form').find('input[name*="phone"]').val() != "")
                ) {
            //отправка файла на сервер
            $$f({
                formid: 'file_form', //id формы
                url: 'form-handler.php', //адрес на серверный скрипт который будет принимать файл
                onstart: function() {//действие при начале загрузки файла

                },
                onsend: function() {//действие по окончании загрузки файла

                    window.alert('«Ваш заказ принят менеджер свяжется с вами»');
                }
            });
        } else {
            window.alert('Пожалуйста оставьте свой телефон чтобы мы могли с вами связаться');
        }
    });

});
