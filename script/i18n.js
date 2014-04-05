var i18n = (function(){
	var my = {};
	var currentLanguage = null;
	var traduction = null;
	
	var translationString = function(key){

		//TODO: changer la validation lorsque la clé n'existe pas dans le tableau de langues.
		
		//On va chercher l'objet général de la langue.
		var tableTraduction = traduction[currentLanguage];
		if (tableTraduction === undefined) {
			console.log("Language is undefined for language: " + currentLanguage);
			return key;
		}

		var valeurTraduite = tableTraduction[key];
		if (valeurTraduite === undefined) {
			console.log("Value is undefined for key " + key);
			return key;
		}
		return valeurTraduite;
	};
	
	
	my.setCurrentLanguage = function(newLanguage){
		currentLanguage = newLanguage;
	};
	
	my.getCurrentLanguage = function(){
		return currentLanguage;
	};
	
	//languageTables doit être un objet javascript
	my.init = function (defaultLanguage, languageTables) {
		my.setCurrentLanguage(defaultLanguage);
		traduction = languageTables;
	};
	
	//on translate une key
	//args est un tableau qui contient les valeurs à remplacer dans le texte.
	//exemple si la valeur retourné par la clé contient {1}, on va chercher la valeur dans args[1]
	my.translate = function(key, args){
		var valeurTraduite = translationString(key);
		
		//var result = /\{([0-9]+)\}/.exec(valeurTraduite);
		if(args !== undefined) {
			for(var i = 0; i < args.length; ++i){
				var match = "{" + i + "}";
				valeurTraduite = valeurTraduite.replace(match, args[i]);
			}
		}
		
		return valeurTraduite;
	};
	

	
	//i18nkey_title
	//i18nkey_placeholder
	//i18nkey
	//On doit avoir en paramètre l'objet jquery
	my.translatePage = function($){
		var key = "";
		var textValue = "";
		
		$("[i18nkey]").each(function() {
			key = $(this).attr("i18nkey");
			textValue= my.translate(key);
			
			//iterate through text value to find {i} occurences
			var i = 0;
			var args = [];
			while($(this).attr("i18nreplace" + i) !== undefined) {
				args.push($(this).attr("i18nreplace" + i++));
			}
			
			if(args.length > 0) {
				textValue = my.translate(key, args);
			}
			
			var tagName = $(this).prop("tagName");
			var text = $(this).prop("text");
			
			if (tagName === "INPUT") {
                if (text !== undefined) {
                    $(this).text(textValue);
                } else {
                    $(this).val(textValue);
                }
            } else {
                $(this).html(textValue);
            }
		});
		
		$("[i18nkey_placeholder]").each(function() {
			key = $(this).attr("i18nkey_placeholder");
			textValue= my.translate(key);
			$(this).attr('placeholder', textValue);
		});
		
		$("[i18nkey_title]").each(function() {
			key = $(this).attr("i18nkey_title");
			textValue = my.translate(key);
			$(this).attr('title', textValue);
		});
	};
	
	
	//fonction appelée par les boutons qui changent dynamiquement le texte de la page
	my.changeLanguage = function(newLanguage) {
		my.setCurrentLanguage(newLanguage);
		my.translatePage($);
	};
	
	return my;
})();




