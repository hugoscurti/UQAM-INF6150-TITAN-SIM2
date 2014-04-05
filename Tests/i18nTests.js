/*
$(window).load(function() {
      alert("window load occurred!");
});
*/

$(document).ready(function() {
/*       alert("document ready occurred!"); */


$.getJSON("../resources/lang.json", function(json) {

	i18n.init("fr-CA", json);
	
	var translatedString = i18n.translate("grisouscientificcontributionsreporterbyvogg2013");
	console.log("French for key (grisouscientificcontributionsreporterbyvogg2013): " + translatedString);

	var translatedString = i18n.translate("nonexistingKey");
	console.log("French for non-existing key (nonexistingKey) should be null: " + translatedString);
});


$.getJSON("../resources/lang.json", function(json) {

	i18n.init("en-CA", json);
	
	var translatedString = i18n.translate("grisouscientificcontributionsreporterbyvogg2013");
	console.log("English for key (grisouscientificcontributionsreporterbyvogg2013): " + translatedString);

	var translatedString = i18n.translate("nonexistingKey");
	console.log("English for non-existing key (nonexistingKey) should be null: " + translatedString);
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