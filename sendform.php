<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']); 
$fromMail = 'gidrodinamika-163@yandex.ru'; 
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'gidrodinamika-163@yandex.ru'; 
$subject = 'Форма обратной связи Гидродинамика'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 
 
// Содержимое письма 
$body = "Получено письмо с сайта \n Имя: $name\nТелефон: $phone"; 
 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 
 
?>