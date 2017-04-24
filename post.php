<?php
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=\"utf-8\"\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

// НАСТРОЙКИ
$toEmail = 'Design@bulanti.ru';
$subject = 'Срочно! Заявка по Клише';


$message = sprintf('Name - "%s".<br/>Phone - "%s".<br/>email - "%s".<br/><br/>Message:<br/>%s',
	$_REQUEST['name'], $_REQUEST['phone'], $_REQUEST['email'], $_REQUEST['message']);


mail($toEmail, $subject, $message, $headers);




printf("
        <html>
            <head>
            	<link rel='shortcut icon' href='sp.png' type='image/png'>
                <meta content='text/html; charset=utf-8'>
                <title>Заявка на клише отправлена</title>
                <link href='backup.css' rel='stylesheet' type='text/css'>
            </head>
            <body>
                <div class='main'>
                    <h2>
                        Спасибо за заявку, мы свяжемся с Вами в ближайшее время.
                    </h2>
                    <p>
                        <a href='http://bulanti-klishe.ru/'>
                                <button>Вернутся на сайт</button>
                        </a>
                    </p>
                </div>
            </body>
        </html>
");
