<?php 
namespace Bankole\Portfolio;
	/**
	 * 
	 *  @author Bankole Emmanuel
	 *	 
	 */
	class Contact
	{
		
		function SendEmail(array $data)
		{
			$email = "mrbarnk1@gmail.com";
	      if (array_key_exists('to_email', $data) && array_key_exists('message', $data)) {
		        $to = $data['to_email'];
		        if(isset($data['title'])) {
		            $subject = $data['title']." => Portfolio";
		        }else {
		            $subject = "New Email From Your Portfolio";
		        }
		        $txt = $data['message'];
		        $headers = "From: ".$email . "\r\n" .
		        "CC: ".$data['to_email'];

		        try {
		        	return mail($to,$subject,$txt,$headers);
		        } catch (Exception $e) {
		        	return '';
		        }
		        // return mail($to,$subject,$txt,$headers);
		      }
		    }
		}
 ?>