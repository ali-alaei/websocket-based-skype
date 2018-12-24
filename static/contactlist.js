$(document).ready(function() {
console.log($('form'));
	$('form').on('submit', function(event) {
		$.ajax({
			data : {
				roomname : $('#roomname').val()
			},
			type : 'POST',
			url : '/waitorjoin'
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