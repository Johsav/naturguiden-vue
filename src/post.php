
<?php
    $_POST = json_decode(file_get_contents('php://input'), true);

    $name = $_POST['name_'];
    $email = $_POST['email_'];
    $phone = $_POST['phone_'];
    $message = $_POST['message_'];
    $group = $_POST['group_'];
    $date1 = $_POST['date1_'];
    $date2 = $_POST['date2_'];
    $gdpr = $_POST['gdpr_'];

    $email_from = "info@naturguiden.se";
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
    <b>Phone:</b> ".$phone." \n<br/>
    <b>Message:</b> ".$message." \n<br/>
    <b>Group:</b> ".$group." \n<br/>
    <b>Start date:</b> ".$date1." \n<br/>
    <b>End date:</b> ".$date2." \n<br/>
    <b>GDPR?:</b> ".$gdpr." \n<br/></p></body></html>"; 
	 
	$sent = mail($mailto1, $subject1, $form_message1, $headers);
?>