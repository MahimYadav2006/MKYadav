<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'raomahimyadav2006@gmail.com';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name. \n".
              "User Email: $email. \n".
              "Subject: $subject.\n".
              "Message: $message.\n";
$to = "raomahimyadav2006@gmail.com"
$headers = "From: $email_from \r\n";
$headers = "Reply to: $visitor_email \r\n";
mail($to,$subject,$email_body,$headers);
header("Location: contact.html");
?>