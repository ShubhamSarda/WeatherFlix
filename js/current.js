$(document).ready(function(){
	$("#submitCity").click(function(){
		return getWeather();
	});
}); 

function getWeather(){
	var city = $("#city").val();
	
	if(city != ''){
		$.ajax({
			url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=*****************4bed59f294", /* Add Your API Here*/
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				var widget = showResults(data)
				$("#showWeather").html(widget);
				$("#city").val('');
			}
		});
	}else{
		$("#error").html("<div style='margin-bottom: 10px;' class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City feild cannot be empty.</div>");
	}
}

function showResults(data){
	return "<div style='margin-top: 10px;' class='alert' id='dataCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>" + 
			"<h3 class='text-center' style='padding-top:20px; font-weight:bold; margin-top:10px; font-size:30px;'> Weather For " + data.name + " - " + data.sys.country + "</h3>" + 
			"<p id='result'>Weather: "+ data.weather[0].main + "</p>" +
			"<p id='result'>Weather Description: "+ "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon +".png'>" + data.weather[0].description + "</p>" +
			"<p id='result'>Temperature: "+ data.main.temp + " &deg;C</p>"+
			"<p id='result'>Pressure: " + data.main.pressure + " hpa</p>" +
			"<p id='result'>Humidity: " + data.main.humidity + "%</p>" +
			"<p id='result'>Min Temperature: " + data.main.temp_min + " &deg;C</p>"+
			"<p id='result' style='padding-bottom:20px;'>Max Temperature: " + data.main.temp_max + " &deg;C</p> </div>";
}