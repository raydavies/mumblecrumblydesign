<?php

function CleanData($data)
{
	if (get_magic_quotes_gpc()) {
		$data = stripslashes($data);
	}
		$data = str_replace("\n", '', trim($data));
		$data = str_replace("\r", '', $data);
		return $data;

}

$name = CleanData($_POST['name']);
$email = CleanData($_POST['email']);
$message = CleanData($_POST['message']);

$nameregex = '/^[a-zA-Z0-9\-]+$/';
$emailregex = '/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/';

$spam = array(
'jingchaob@gmail.com'
,'zhaojared@gmail.com'
,'clmul4sale001@aol.com'
,'lq521452@gmail.com'
,'ehai866@hotmail.com'
,'vivifi0208@hotmail.com'
,'tfyihc959@hotmail.com'
);

if (!isset($name) || empty($name) || !isset($email) || empty($email) || !isset($message) || empty($message) || (preg_match($nameregex, $name) == 0) || (preg_match($emailregex, $email) == 0)){
	header("Location: error.html");
	die;
}
else {
	if (in_array($email, $spam)) {
		$toaddress = $email;
		$subject = "Returning Your Spam";
	}
	else {
		$toaddress = "jordanmand@gmail.com";
		$subject = "MC Design Feedback";
	}

	$mailcontent = "Name: ".$name."\n".
		"E-mail: ".$email."\n".
		"Details: ".$message."\n";

	$fromaddress = "From: ".$name."<".$email.">";

	mail($toaddress, $subject, $mailcontent, $fromaddress);

	header("Location: thanks.php");
	die;
}