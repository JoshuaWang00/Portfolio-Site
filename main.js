
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'KeyGoesHere',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
console.log(options);

function updateData(){
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Rego%20Park%20New%20York', options)
	.then(response => response.json())
	.then(response => {console.log(response);
		document.getElementById('ltime').innerHTML = 'Local Time: ' + response.location.localtime;
		document.getElementById('temp').innerHTML = 'Temperature(f): ' + response.current.temp_f;
        document.getElementById('windir').innerHTML = 'Wind Direction: ' + response.current.wind_dir;
		document.getElementById('mph').innerHTML = 'Wind MPH: ' + response.current.wind_mph;
		document.getElementById('rain').innerHTML = 'Precipitation(in): ' + response.current.precip_in;


    })

	.catch(err => console.error(err));
}

function playanim(){
	var pos = $(this).offset().top;
	var winTop = $(window).scrollTop();
	if (pos < winTop + 800) {
	  $(this).addClass("slide");
	}
  }


$(window).scroll(function() {
	$(".slideanim").each(playanim);
  });
  
$(".slideanim").each(playanim);
updateData();

$(function(){
	$("body").on('hidden.bs.modal', function (e) {
	  var $iframes = $(e.target).find("iframe");
	  $iframes.each(function(index, iframe){
		$(iframe).attr("src", $(iframe).attr("src"));
	  });
	});
  });
