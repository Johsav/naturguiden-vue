
<?php
    $_POST = json_decode(file_get_contents('php://input'), true);

    $name = $_POST['name_'];
    $email = $_POST['email_'];
    $message = $_POST['message_'];
    $gdpr = $_POST['gdpr_'];

    $email_from = "info@naturguiden.com";
	$headers = "From: ".$email_from." \r\n";
	$headers .= "Reply-To: ".$email_from." \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=utf-8\r\n";

	/*Mail to NATURGUIDEN */
	$subject1 = "Naturguiden-com Inquiry";
	$mailto1 = "john@naturguiden.se";
		 
	$form_message1 = "<html><body><p>Message sent from Naturguiden.com Inquiry form\n<br/>
	<b>Name:</b> ".$name." \n<br/>
    <b>Email:</b> ".$email." \n<br/>
    <b>Message:</b> ".$message." \n<br/>
    <b>GDPR?:</b> ".$gdpr." \n<br/></p></body></html>"; 
	 
	$sent = mail($mailto1, $subject1, $form_message1, $headers);
	echo $sent1;
	
	/*Mail to CUSTOMER */
	$subject2 = "Replay from Naturguiden";
	$mailto2 = $email;
		 
	/*$form_message2 = "<html><body><p>Thank you for contacting us at Naturguiden. Will get back in touch with you soon! \n<br/>
	<br/<i> ".$message." <i>\n<br/></p></body></html>"   */
	
	$form_message2 = "<html><body><p>Hello ".$name." </p>
	<p>Thank you for contacting us at Naturguiden. Will get back in touch with you soon! </p>
	<p><i> ".$message." </i></p>
	<p>Best Regards <br/>John Savelid <br/>john@naturguiden.se <br/>+46 70 53 53 630 <br/> <br/>
	Outdoor adventures in Sweden </p></body></html>"; 
	 
	$sent1 = mail($mailto2, $subject2, $form_message2, $headers);
	echo $sent1;
?>