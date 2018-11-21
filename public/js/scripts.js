
$(document).ready (function(){
	/*operate Recaptcha*/
  $('#myForm').submit(function(event) {
        		/*console.log('form submitted.');*/
       $("#prec").html("<br>");

       	  $("#rec").addClass("alert").html("Potwierdź że nie jesteś bootem !");

	        	if (!grecaptcha.getResponse()) {
	           /* console.log('captcha not yet completed.');*/

		            event.preventDefault(); //prevent form submit
		            grecaptcha.execute();

        	}
    	});

/*Jquery - submitting the form*/

	$('form').on('submit', function(event){
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var persons = $("#persons").val();
		var data = $("#datePickerId").val();
		var hour = $("#hour").val();
		$("#reservation-right").html("<br><br>"+"Dziekujemy za złożenie rezerwacji " +name + " !" +  "<br>" + "Odpowiemy na email : "+ email + "<br>" + "Ilość osób: " + persons + "<br>" + " Data : " + data + "<br>"+ "Godzina : " + hour );
		$("#rec").removeClass("alert").html("");
		
		
	});

 
$(".button-reco").click(function(){

		$(".content").text("Ładowanie treści...");

		$.ajax({
			type:"GET",
			url: "https://jsonplaceholder.typicode.com/comments",
			success: function(data) {
				$(".content").html("");
				for ( var i = 0; i < 9; i++ ) {
					$(".content").append("<br><p>" +"' " + data[i].body +" '" + "</br>" +"<p> " + data[i].email+"</br></br>"  );
				}
			},
			dataType: "jsonp"
		});

	});



	//datePciker : minimal date
	datePickerId.min = new Date().toISOString().split("T")[0];

	/*zmiana teksu -jQuery*/
	$(".banner>.container> p").text("Kraków ul. Kawowa 1415").css("color" , "#FFFFFF");
	$("#col1> p").text("Poznaj kunszt parzenia kawy i jej wyjątkowy smak !");
	$("#col2> p").text("Najlepsza mieszanka ziaren kawy z całego świata !");
	$("#col3> p").text("A do kawy polecamy, pyszne wypieki naszych cukierników !");

	

	/* Przejscia przy wczytywaniu strony */
	$("p, h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);


});