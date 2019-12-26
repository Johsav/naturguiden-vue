
<?php
    $_POST = json_decode(file_get_contents('php://input'), true);

    $name = $_POST['name_'];
    $email = $_POST['email_'];
    $message = $_POST['message_'];
    $gdpr = $_POST['gdpr_'];

    $email_from = "info@naturguiden.se";
	$headers = "From: ".$email_from." \r\n";
	$headers .= "Reply-To: ".$email_from." \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";

	/*Mail to NATURGUIDEN */
	$subject1 = "Naturguiden-com Inquiry";
	$mailto1 = "john@naturguiden.se";
		 
	$form_message1 = "<html><body><p>Message sent from Naturguiden.com Inquiry form - 4\n<br/>
	<b>FirstName:</b> ".$name." \n<br/>
	<b>Email:</b> ".$email." \n<br/>
    <b>Message:</b> ".$message." 
    <b>GDPR?:</b> ".$gdpr." \n<br/></p></body></html>"; 
	 
	$sent = mail($mailto1, $subject1, $form_message1, $headers);
?>