$("#sendMessage").submit(function (e) {
	e.preventDefault();

	$.ajax({
		url: "/sendMail.php",
		data: new FormData(this),
		cache: false;
		proccessData: false,
		contentType: false,
		// beforeSend: function () {
			
		// },
		success: function (data) {
			alert(data);
		}
	});
});