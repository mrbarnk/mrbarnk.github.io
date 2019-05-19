<?php
require 'server.php';

use Bankole\Portfolio\Contact;

$contact = new Contact;

if (isset($_POST['email']) && isset($_POST['name']) && isset($_POST['message'])) {
	$email = addslashes($_POST['email']);
	$name = addslashes($_POST['name']);
	$message = addslashes($_POST['message']);
	$message ="New Message from Name: ".$name."\n\n"."Email :".$email."\n\n".$message;
	try {
		if($contact->SendEmail([
	      'to_email' => $email,
	      'message' => $message
	    ])) {
			die("Email sent");
	    }
	} catch (Exception $e) {
	    	die("An error occured.");
	}
} else {
	die("All fields are required.");
}