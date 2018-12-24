$(document).ready(function() {
console.log($('form'));
	$('form').on('submit', function(event) {
		$.ajax({
			data : {
				contact : $('#contactInput').val()
			},
			type : 'POST',
			url : '/addcontactprocess'
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