<?php
if(empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['date']) || empty($_POST['time']) || empty($_POST['guest']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$date = strip_tags(htmlspecialchars($_POST['date']));
$time = strip_tags(htmlspecialchars($_POST['time']));
$guest = strip_tags(htmlspecialchars($_POST['guest']));

$to = "romsoft2023@gmail.com";
$subject = "Masa Rezervasyonu";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nAdı: $name\n\n\nmail: $email\n\nTelefon: $phone\n\nTarih: $date\n\nSaat: $time\n\nMısafir: $guest";
$header = "From: $email";
$header .= "Reply-To: $email";

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
