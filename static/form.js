$(document).ready(function() {
console.log($('form'));
	$('form').on('submit', function(event) {
		$.ajax({
			data : {
				username : $('#nameInput').val(),
				password : $('#passInput').val()
			},
			type : 'POST',
			url : '/process'
		})
		.done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				$('#successAlert').text(data.name).show();
				$('#errorAlert').hide();
			}

		});

		event.preventDefault();

	});

});