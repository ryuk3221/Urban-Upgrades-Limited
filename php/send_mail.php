<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require "../PHPMailer/src/Exception.php";
    require "../PHPMailer/src/PHPMailer.php";
	$mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true);
    $name =$_POST['name'];
    $last_name=$_POST['last_name'];
    $email=$_POST['email'];
    $message=$_POST['message'];
    $theme='Message from form';
    $email_template = "../template_mail.html";
    $body = file_get_contents($email_template);
    $body = str_replace('%name%', $name, $body);
    $body = str_replace('%email%', $email, $body);
    $body = str_replace('%last_name%', $last_name, $body);
    $body = str_replace('%message%', $message, $body);
    $mail->addAddress("info@tech-core-ltd.com");
    $mail->Subject = "From form";
    $mail->MsgHTML($body);
    if (!$mail->send()) {
      echo("Send error.");
    } else {
      echo("Data sent!");
    }

?>