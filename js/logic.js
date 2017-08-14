﻿
function switchViews(view) {

    for (var i = 0; i < views.length; i++) {
        if(view === views[i]) {
            $("#" + view).show();
            $("#headerView").show();
         } else {
            $("#" + views[i]).hide();
        }
    }

    if(view == "loginView"){
        $("#headerView").hide();
    }
}


function showWeather(data){
  $('#summary').text(data.currently.summary);
  let icon;
  console.log(data);
  switch(data.currently.icon){
    case 'partly-cloudy-day': icon = 'glyphicon-cloud'
                        break;
    case 'clear-day':   icon = 'glyphicon-certificate'
                        break;
    case 'rainy-day': icon = 'glypicon-cloud-download'
                        break;
    case 'snowy-day': icon = 'glyphicon-certificate'
                        break;
    default: icon = 'glyphicon-cloud'
                    break;
  }

  $('#weatherIcon').attr('class', "glyphicon " + icon);
  let fahrenheit = data.currently.temperature;
  let celsius = (fahrenheit - 32) * 5 / 9;
  $('#temperature').text(Math.round(celsius) + "° C");
};


function login(data){

  console.log(data);
}
