/*
$(window).load(function() {
      alert("window load occurred!");
});
*/

$(document).ready(function() {
/*       alert("document ready occurred!"); */


$.getJSON("../resources/lang.json", function(json) {

	i18n.init("fr-CA", json);
	
	var translatedString = i18n.translate("GRISOUscientificcontributionsreporterbyVOGG2013");
	console.log("French for key (GRISOUscientificcontributionsreporterbyVOGG2013): " + translatedString);

	var translatedString = i18n.translate("nonexistingKey");
	console.log("French for non-existing key (nonexistingKey) should be null: ")
});




});

function translateToFrench() {
	$.getJSON("../resources/lang.json", function(json) {
		i18n.init("fr-CA", json);
		i18n.translatePage($);
	});
}

function translateToEnglish() {
	$.getJSON("../resources/lang.json", function(json) {
		i18n.init("en-CA", json);
		i18n.translatePage($);
	});
}